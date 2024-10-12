import CarSpecification from '@/Shared/CarSpecification'
import React from 'react'
import { IoMdStarOutline } from "react-icons/io";
function Specification({carDetail}) {
    console.log(carDetail?.name);
  return (
    <div className='p-10 rounded-xl border shadow-md mt-7'>
        <h2 className='font-medium text-2xl'>Specifications</h2>
    {carDetail ? CarSpecification.map((item, index) => (
        <div className='mt-5 flex items-center space-x-2 justify-between' key={index}>
            
                
                <h2 className='flex gap-2'><IoMdStarOutline />{item?.label}</h2>
                <h2>{carDetail?.[item?.name]}</h2>
           
        </div>
    )):
    
    <div className='w-full h-[500px] bg-slate-200 animate-pulse'>


    </div>
    }
</div>

  )
}

export default Specification