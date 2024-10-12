import React from 'react'
import { TbCheckbox } from "react-icons/tb";

function Features({features}) {
    console.log(features)
//   return (
//     <div className='mt-6'>
//         <div className='p-5 bg-white rounded-xl shadow-md'>
//         <h2 className='font-medium text-2xl'>Features</h2>
//         {[features]?.map((item,index)=>(
//             <div key={index}>
//               <TbCheckbox  className=' text-lg bg-blue-100 text-primary'/>
//             </div>
//         ))}
//         </div>
//     </div>
//   )
return (
    <div className='p-5 border shadow-md rounded-xl my-7 '>
         <h2 className='font-medium text-2xl'>Features</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2'>
       
        {features && Object.entries(features).map(([key, value]) => (
    <div className='flex items-center space-x-2' key={key}>
        <TbCheckbox className='text-lg bg-blue-100 text-primary' />
        <h2>{value}</h2>
    </div>
))}




        </div>
    </div>
  )
}

export default Features