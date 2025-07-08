// import React from 'react';
// import { Separator } from '@radix-ui/react-separator'; // Corrected import for Separator
// import { LuFuel } from "react-icons/lu";
// import { IoSpeedometerOutline } from "react-icons/io5";
// import { GiGearStickPattern } from "react-icons/gi";
// import { IoMdOpen } from "react-icons/io";
// import { Link } from 'react-router-dom';
// import { useEffect,useState } from 'react';

// function CarItem({ car }) {

//   const [imageUrl, setImageUrl] = useState(car?.images[0]?.imageUrl || '/path-to-your-placeholder-image.jpg');

//   useEffect(() => {
//     if (car?.images[0]?.imageUrl) {
//       setImageUrl(car.images[0].imageUrl);
//     }
//   }, [car?.images[0]?.imageUrl]);
  
//   return (
//     <Link to={'/listing-details/'+car?.id}>
//     <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer p-4 '>
//       {/* <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-white '>new</h2> */}
//       {/* <img className='w-full h-[250px] object-cover rounded-t-xl' src={car?.images[0]?.imageUrl} width={'100%'} height={250} alt={car?.vehicleModel} /> */}

//       <img 
//   className='w-full h-[250px] object-cover rounded-t-xl' 
//   src={car?.images[0]?.imageUrl || '/default-car-image.jpg'} 
//   alt={car?.vehicleModel || 'Default Car Image'} 
// />



//       <div className='p-4 flex-grow'>
//         <h2 className='font-bold text-black text-lg mb-2'>{car?.name}</h2>
        
//         {/* Separator for visual separation */}
//         <Separator className='my-4 bg-gray-300' style={{ height: '1px' }} /> 

//         <div className='grid grid-cols-3 mt-5'>
//           <div className='flex flex-col items-center'>
//             <LuFuel className='text-lg mb-2' />
//             <h2>{car.mileage} Miles</h2>
//           </div>
//           <div className='flex flex-col items-center'>
//             <IoSpeedometerOutline className='text-lg mb-2' />
//             <h2>{car.fuelType}</h2>
//           </div>
//           <div className='flex flex-col items-center'>
//             <GiGearStickPattern className='text-lg mb-2' />
//             <h2>{car.transmission} Gear</h2>
//           </div>
//         </div>
        
//         {/* Separator for visual separation */}
//         <Separator className='my-4 bg-gray-300' style={{ height: '1px' }} />

//         <div className='flex items-center justify-between'>
//           <h2 className='font-bold text-xl'>${car.price}</h2>
//           <h2 className='text-primary text-sm flex gap-2 items-center'>
//             View Details <IoMdOpen />
//           </h2>
//         </div>
//       </div>
//     </div>
//     </Link>
//   );
// }

// export default CarItem;


// import  { useState, useEffect } from 'react';
// import { Separator } from '@radix-ui/react-separator';
// import { LuFuel } from "react-icons/lu";
// import { IoSpeedometerOutline } from "react-icons/io5";
// import { GiGearStickPattern } from "react-icons/gi";
// import { IoMdOpen } from "react-icons/io";
// import { Link } from 'react-router-dom';

// function CarItem({ car }) {
//   const [imageUrl, setImageUrl] = useState(car?.images[0]?.imageUrl || '/path-to-your-placeholder-image.jpg');

//   useEffect(() => {
//     if (car?.images[0]?.imageUrl) {
//       setImageUrl(car.images[0].imageUrl);
//     }
//   }, [car?.images[0]?.imageUrl]);

//   return (
//     <Link to={'/listing-details/' + car?.id}>
//       <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer p-4'>
//         <img 
//           className='w-full h-[250px] object-cover rounded-t-xl' 
//           src={imageUrl} 
//           alt={car?.vehicleModel || 'Default Car Image'} 
//         />

//         <div className='p-4 flex-grow'>
//           <h2 className='font-bold text-black text-lg mb-2'>{car?.name}</h2>

//           <Separator className='my-4 bg-gray-300' style={{ height: '1px' }} /> 

//           <div className='grid grid-cols-3 mt-5'>
//             <div className='flex flex-col items-center'>
//               <LuFuel className='text-lg mb-2' />
//               <h2>{car.mileage} Miles</h2>
//             </div>
//             <div className='flex flex-col items-center'>
//               <IoSpeedometerOutline className='text-lg mb-2' />
//               <h2>{car.fuelType}</h2>
//             </div>
//             <div className='flex flex-col items-center'>
//               <GiGearStickPattern className='text-lg mb-2' />
//               <h2>{car.transmission} Gear</h2>
//             </div>
//           </div>

//           <Separator className='my-4 bg-gray-300' style={{ height: '1px' }} />

//           <div className='flex items-center justify-between'>
//             <h2 className='font-bold text-xl'>${car.price}</h2>
//             <h2 className='text-primary text-sm flex gap-2 items-center'>
//               View Details <IoMdOpen />
//             </h2>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default CarItem;



import { useState, useEffect } from 'react';
import { Separator } from '@radix-ui/react-separator';
import { LuFuel } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";
import { Link } from 'react-router-dom';

function CarItem({ car }) {
  const [imageUrl, setImageUrl] = useState(car?.images[0]?.imageUrl || '/path-to-your-placeholder-image.jpg');

  useEffect(() => {
    if (car?.images[0]?.imageUrl) {
      setImageUrl(car.images[0].imageUrl);
    }
  }, [car?.images[0]?.imageUrl]);

  return (
    <Link to={`/listing-details/${car?.id}`}>
      <div className="rounded-xl bg-white border hover:shadow-md cursor-pointer p-4 flex flex-col">
        <img
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-xl"
          src={imageUrl}
          alt={car?.vehicleModel || 'Default Car Image'}
        />

        <div className="pt-4 flex-grow flex flex-col">
          <h2 className="font-bold text-black text-lg mb-2 truncate">{car?.name}</h2>

          <Separator className="my-4 bg-gray-300" style={{ height: '1px' }} />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 text-sm mt-2">
            <div className="flex flex-col items-center">
              <LuFuel className="text-lg mb-1" />
              <h2>{car.mileage} mi</h2>
            </div>
            <div className="flex flex-col items-center">
              <IoSpeedometerOutline className="text-lg mb-1" />
              <h2>{car.fuelType}</h2>
            </div>
            <div className="flex flex-col items-center">
              <GiGearStickPattern className="text-lg mb-1" />
              <h2>{car.transmission}</h2>
            </div>
          </div>

          <Separator className="my-4 bg-gray-300" style={{ height: '1px' }} />

          <div className="flex items-center justify-between mt-auto">
            <h2 className="font-bold text-xl">${car.price}</h2>
            <h2 className="text-primary text-sm flex items-center gap-1">
              View Details <IoMdOpen />
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarItem;
