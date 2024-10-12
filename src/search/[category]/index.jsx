import Header from '@/components/Header'
import Search from '@/components/Search'
import { db } from './../../../configs';
import { CarImages,CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Service from '@/Shared/Service';
import CarItem from '@/components/Caritem';

function SearchByCategory() {

  const { category } = useParams();

  
const [carList,setCarList]=useState();

useEffect(()=>{
    GetCarList();
},[category])

const GetCarList = async () => {
  const result = await db
    .select()
    .from(CarListing)
    .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
     .where(eq(CarListing.Category,category));

  // Log the entire result for debugging
  const resp=Service.FormatResult(result);
  setCarList(resp);


};




  return (
    <div> 
    
       <Header />
        <div className='p-16 bg-black flex justify-center'>
        
          <Search/>
    </div>
    <div className='p-10 md:px-20'>
        <h2 className='font-bold text-4xl '>{category}</h2>

    {/* List Of CarList */}
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 '>
  {carList?.length > 0 ? (
    carList.map((item, index) => (
      <div key={index}>
        <CarItem car={item} />
      </div>
    ))
  ) : (
    <> {/* Use fragment to avoid unnecessary wrapper */}
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <div key={index} className='h-[320px] rounded-xl bg-slate-200 animate-pulse' />
      ))}
    </>
  )}
</div>
    </div>
    </div>
    
  )
}

export default SearchByCategory


// import Header from '@/components/Header';
// import Search from '@/components/Search';
// import { db } from './../../../configs';
// import { CarImages, CarListing } from './../../../configs/schema';
// import { eq } from 'drizzle-orm';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function SearchByCategory() {
//   const { category } = useParams();
//   const normalizedCategory = category.trim().toLowerCase();
//   const [carList, setCarList] = useState([]);

//   useEffect(() => {
//     GetCarList();
//   }, [category]);

//   const GetCarList = async () => {
//     try {
//       const result = await db
//         .select({
//           id: CarListing.id,
//           vehicleModel: CarListing.vehicleModel,
//           price: CarListing.price,
//           carCategory: CarListing.category,  // Aliased as carCategory
//           imageUrl: CarImages.imageUrl
//         })
//         .from(CarListing)
//         .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
//         .where(eq(CarListing.category, normalizedCategory));

//       setCarList(result);  // Set the car list state
//       console.log(result); // For debugging
//     } catch (error) {
//       console.error("Error fetching car list:", error);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className='p-16 bg-black flex justify-center'>
//         <Search />
//       </div>
//       <div>
//         <h2 className='font-bold text-4xl p-10 md:px-20'>{category}</h2>

//         {/* List of Car Listings */}
//         {carList.length > 0 ? (
//           carList.map(({ id, vehicleModel, price, carCategory, imageUrl }) => (
//             <div key={id} className="car-listing">
//               <h3>{vehicleModel}</h3>
//               <p>Price: {price}</p>
//               <p>Category: {carCategory}</p>
//               <img src={imageUrl} alt={vehicleModel} />
//             </div>
//           ))
//         ) : (
//           <p>No cars found for this category.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchByCategory;

