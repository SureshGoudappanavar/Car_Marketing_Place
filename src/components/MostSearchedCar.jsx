import FakeData from '@/Shared/FakeData'
import React, { useEffect,useState } from 'react'
import Caritem from './Caritem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { CarImages, CarListing } from './../../configs/schema';
import { desc, eq } from 'drizzle-orm';
import { db } from './../../configs';
import carList from '@/Shared/carList';
import Service from '@/Shared/Service';
function MostSearchedCar() {
   const [carList,setCarList]=useState([]);
useEffect(()=>{
  GetPopularCarList();
},[])
    const GetPopularCarList=async()=>{
      const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .orderBy(desc(CarListing.id))
      .limit(10);

      const resp=Service.FormatResult(result)
    // console.log(resp);
      setCarList(resp);

    }
  return (
    <div className='mx-24  mt-16 mb-7'>
        {/* <h2 className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>Most Searched Car</h2> */}
        <h2 className='text-2xl font-bold text-center mb-8'>
      Most Searched Cars
    </h2>
     
        <Carousel>
  <CarouselContent>
    
    
    {
           carList.map((car,index)=>(
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 ">
                    <Caritem car={car} />
                    </CarouselItem>

              )  )
        }
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  )
}

export default MostSearchedCar



// import FakeData from '@/Shared/FakeData';
// import React from 'react';
// import Caritem from './Caritem';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// // Car name to image URL mapping
// const carImageMap = {
//   "Tesla Model 3": "https://example.com/tesla-model-3.jpg",
//   "Ford Mustang": "https://example.com/ford-mustang.jpg",
//   "BMW X5": "https://example.com/bmw-x5.jpg",
//   // Add more car image URLs here
// };

// function MostSearchedCar() {
//   console.log(FakeData.carList);

//   return (
//     <div className='container mx-auto px-4 md:px-8 mt-16 mb-7'>
//       {/* Title with responsive margin and font size */}
//       <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
//         Most Searched Cars
//       </h2>
      
//       {/* Carousel Wrapper */}
//       <Carousel className="w-full">
//         <CarouselContent className='flex gap-4'>
//           {FakeData.carList.map((car, index) => (
//             <CarouselItem
//               key={index}
//               className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
//             >
//               {/* Adjusting the image size inside Caritem for responsive behavior */}
//               <div className="p-4 bg-white shadow-md rounded-lg">
//                 <Caritem 
//                   car={car} 
//                   imageUrl={carImageMap[car.name] || 'https://example.com/default-car.jpg'}  // Default if not found
//                   imageClass="h-32 w-full object-cover md:h-48"  // Responsive height change
//                 />
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {/* Carousel controls */}
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// }

// export default MostSearchedCar;



