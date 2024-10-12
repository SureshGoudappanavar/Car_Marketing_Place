
import Header from '@/components/Header'
import React from 'react'
import { IoCalendarOutline } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
function DetailHeader({carDetail}) {
  return (
    <div>
        {carDetail?.vehicleModel ?
    <div>
      <h2 className='font-bold text-3xl ml-16'>{carDetail?.vehicleModel}</h2>
       <p className='ml-16 text-sm'>Luxury Car For Sale</p>
<div className='flex gap-2 mt-3'>
    <div className='flex gap-2 items-center bg-blue-50 rounded-full ml-16 p-1 px-3'>
    <IoCalendarOutline className='h-7 w-7 text-primary' />
    <h2 className='text-primary'>{carDetail?.year}</h2>
    </div>
    <div className='flex gap-2 items-center bg-blue-50 rounded-full ml-16 p-1 px-3'>
    <IoIosColorPalette  className='h-7 w-7 text-primary' />
    <h2 className='text-primary'>{carDetail?.color}</h2>
    </div>
    <div className='flex gap-2 items-center bg-blue-50 rounded-full ml-16 p-1 px-3'>
    <GiGearStickPattern  className='h-7 w-7 text-primary' />
    <h2 className='text-primary'>{carDetail?.mileage}</h2>
    </div>
    <div className='flex gap-2 items-center bg-blue-50 rounded-full ml-16 p-1 px-3'>
    <BsFillFuelPumpFill   className='h-7 w-7 text-primary' />
    <h2 className='text-primary'>{carDetail?.fuelType}</h2>
    </div>
  
    </div>
    </div>:
    <div className='w-full rounded-xl h-[100px] bg-slate-200 animate-pulse mt-5 ml-16 mr-16'>
        
        </div>}
    </div>
   
  )
}

export default DetailHeader