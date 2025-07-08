import React from 'react'

// function Description({carDetail}) {
//   return (
  
//     <div>
//           {carDetail?.description ?
//     <div className='p-5 rounded-xl bg-white shadow-md mt-6 border '> 
//     <h2 className='my-2 font-medium text-2xl'>Description</h2>
//         <p>{carDetail?.description}</p>
//     </div>:
//     <div className='w-full h-[100px] bg-slate-200 mt-7 animate-pulse rounded-xl'>

//     </div>}
//     </div>
//   )
// }


function Description({ carDetail }) {
  return (
    <div>
      {carDetail?.description ? (
        <div className='p-4 sm:p-5 rounded-xl bg-white shadow-md mt-6 border'>
          <h2 className='my-2 font-medium text-xl sm:text-2xl'>Description</h2>
          <p className='text-sm sm:text-base'>{carDetail?.description}</p>
        </div>
      ) : (
        <div className='w-full h-[100px] bg-slate-200 mt-7 animate-pulse rounded-xl'></div>
      )}
    </div>
  );
}

 export default Description