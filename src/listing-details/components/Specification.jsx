import CarSpecification from '@/Shared/CarSpecification'
import React from 'react'
import { IoMdStarOutline } from "react-icons/io";
function Specification({ carDetail }) {
  return (
    <div className='p-4 sm:p-6 md:p-10 rounded-xl border shadow-md mt-6'>
      <h2 className='font-medium text-xl sm:text-2xl'>Specifications</h2>

      {carDetail ? (
        CarSpecification.map((item, index) => (
          <div
            className='mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm sm:text-base space-y-1 sm:space-y-0'
            key={index}
          >
            <h2 className='flex gap-2 items-center'>
              <IoMdStarOutline />
              {item?.label}
            </h2>
            <h2>{carDetail?.[item?.name]}</h2>
          </div>
        ))
      ) : (
        <div className='w-full h-[300px] sm:h-[500px] bg-slate-200 animate-pulse rounded-xl mt-4'></div>
      )}
    </div>
  );
}


export default Specification