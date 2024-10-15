// import { Button } from '@/components/ui/button'
// import { CarImages, carListing } from './../../../configs/schema'
// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { desc,eq } from 'drizzle-orm'
// import { useUser } from '@clerk/clerk-react'
// import { db } from './../../../configs'


// function MyListing() {
//     const {user}=useUser();
//     useEffect(()=>{
//      user&&GetUserCarListing();
//     },[user])
//     const GetUserCarListing=async()=>{
//         const {user}=useUser();
//         const result=await db.select().from(carListing).
//         leftJoin(carImages,eq(carListing.id,carImages.carListingId))
//        .where(eq(carListing.createdBy,user?.primaryEmailAddress?.emailAddress))
//         .orderBy(desc(carListing.id))
//         console.log(result);
//     }
//   return (
//     <div className='mt-6'>
//           <div className='flex justify-between items-center'>
//                         <h2 className='font-bold text-4xl'>My Listing</h2>
//                         <Link to={'/add-listing'}>
//                       <Button>+ Add New Listing</Button>
//                         </Link>
//                     </div>
                    
//     </div>
//   )
// }

// export default MyListing











// import { Button } from '@/components/ui/button';
// import { CarImages, CarListing } from './../../../configs/schema';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { desc, eq } from 'drizzle-orm';
// import { useUser } from '@clerk/clerk-react';
// import { db } from './../../../configs';
// import Service from '@/Shared/Service';
// import CarItem from '@/components/Caritem';
// import carList from '@/Shared/carList';
// import { FaTrashAlt } from "react-icons/fa";
// function MyListing() {
//     const { user } = useUser();
//     const [carList, setCarList] = useState([]);

//     useEffect(() => {
//         user&&GetUserCarListing();
//     }, [user]);

//     const GetUserCarListing = async () => {
//         const result = await db
//             .select()
//             .from(CarListing)
//             .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
//             .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
//             .orderBy(desc(CarListing.id));
      
//              const resp=Service.FormatResult(result)
//              console.log(resp);
//         setCarList(resp); // Store results in state
//     };
    
//     return (
//         <div className='container mx-auto mt-6 p-4 md:p-8'>
//             <div className='flex justify-between items-center'>
//                 <h2 className='font-bold text-3xl md:text-4xl'>My Listing</h2>
//                 <Link to={'/add-listing'}>
//                     <Button>+ Add New Listing</Button>
//                 </Link>
//             </div>

//             {/* Responsive Grid for car listings */}
//             <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7'>
//                 {carList.map((item, index) => (
//                     <div key={index} className='bg-white shadow-md rounded-lg p-4'>
//                         {/* <img
//                             src={listing.CarImages?.imageUrl || '/default-car-image.jpg'} 
//                             alt='Car'
//                             className='w-full h-40 object-cover rounded-md'
//                         />
//                         <h3 className='font-bold text-lg mt-2'>{listing.CarListing?.title}</h3>
//                         <p className='text-sm text-gray-600'>{listing.CarListing?.description}</p> */}
//                    <CarItem car={item}/>
           
           
//     <div className='p-2 bg-gray-50 rounded-lg flex justify-between gap-3'>
           
//            <Link to={'/add-listing?mode=edit&id=' +item?.id }className='w-full'>
           
//             <Button variant="outline" className='w-full'>Edit</Button>
//             </Link>
    
//            </div>

//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default MyListing;

import { Button } from '@/components/ui/button';
import { CarImages, CarListing } from './../../../configs/schema';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { desc, eq } from 'drizzle-orm';
import { useUser } from '@clerk/clerk-react';
import { db } from './../../../configs';
import Service from '@/Shared/Service';
import CarItem from '@/components/Caritem';
import { FaTrashAlt } from "react-icons/fa";

function MyListing() {
    const { user } = useUser();
    const [carList, setCarList] = useState([]);

    useEffect(() => {
        user && GetUserCarListing();
    }, [user]);

    const GetUserCarListing = async () => {
        const result = await db
            .select()
            .from(CarListing)
            .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
            .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
            .orderBy(desc(CarListing.id));

        const resp = Service.FormatResult(result);
        console.log(resp);
        setCarList(resp); // Store results in state
    };

    // Function to delete a car listing from the database and update UI
    const onDeleteCar = async (carId) => {
        try {
            // Delete car from CarListing table (it will cascade to CarImages if FK is set to cascade)
            await db.delete(CarListing).where(eq(CarListing.id, carId));
            
            // Update UI by removing the deleted car from carList
            setCarList(prevList => prevList.filter(car => car.id !== carId));
        } catch (error) {
            console.error("Error deleting car:", error);
        }
    };

    return (
        <div className=' mt-6 '>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-3xl md:text-4xl'>My Listing</h2>
                <Link to={'/add-listing'}>
                    <Button>+ Add New Listing</Button>
                </Link>
            </div>

            {/* Responsive Grid for car listings */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7'>
                {carList.map((item, index) => (
                    <div key={index} className='bg-white shadow-md rounded-lg p-4'>
                        <CarItem car={item} />

                        <div className='p-2 bg-gray-50 rounded-lg flex justify-between gap-3'>
                            {/* Edit Button */}
                            <Link to={'/add-listing?mode=edit&id=' + item?.id} className='w-full'>
                                <Button variant="outline" className='w-full'>Edit</Button>
                            </Link>
                            
                            {/* Delete Button */}
                            <Button 
                                variant="destructive" 
                                className='w-full' 
                                onClick={() => onDeleteCar(item?.id)}
                            >
                                <FaTrashAlt className='mr-2' />
                                Delete
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyListing;







