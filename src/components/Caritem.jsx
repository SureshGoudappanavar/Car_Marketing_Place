import React from 'react';
import { Separator } from '@radix-ui/react-separator'; // Corrected import for Separator
import { LuFuel } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";

function CarItem({ car }) {
  return (
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer p-4'>
      <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-white '>new</h2>
      {/* <img className='rounded-t-xl rounded-b-xl' src={car?.images[0]?.imageUrl} width={'100%'} height={250} alt={car?.vehicleModel} /> */}

      <img 
  className='rounded-t-xl rounded-b-xl h-[180px] object-cover' 
  src={car?.images[0]?.imageUrl || '/default-car-image.jpg'} 
  width={'100%'} 
  height={250} 
  alt={car?.vehicleModel || 'Default Car Image'} 

/>







      <div className='p-4 '>
        <h2 className='font-bold text-black text-lg mb-2'>{car?.name}</h2>
        
        {/* Separator for visual separation */}
        <Separator className='my-4 bg-gray-300' style={{ height: '1px' }} /> 

        <div className='grid grid-cols-3 mt-5'>
          <div className='flex flex-col items-center'>
            <LuFuel className='text-lg mb-2' />
            <h2>{car.mileage} Miles</h2>
          </div>
          <div className='flex flex-col items-center'>
            <IoSpeedometerOutline className='text-lg mb-2' />
            <h2>{car.fuelType}</h2>
          </div>
          <div className='flex flex-col items-center'>
            <GiGearStickPattern className='text-lg mb-2' />
            <h2>{car.transmission} Gear</h2>
          </div>
        </div>
        
        {/* Separator for visual separation */}
        <Separator className='my-4 bg-gray-300' style={{ height: '1px' }} />

        <div className='flex items-center justify-between'>
          <h2 className='font-bold text-xl'>${car.price}</h2>
          <h2 className='text-primary text-sm flex gap-2 items-center'>
            View Details <IoMdOpen />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CarItem;

