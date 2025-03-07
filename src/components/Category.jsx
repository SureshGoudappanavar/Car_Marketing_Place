// import React from 'react'
// import Data from '@/Shared/Data'
// function Category() {
//   return (
//     <div className='mt-40'>
//         <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>
   
//     {Data.Category.map((Category,index)=>{
//         <div>
//             <img  src={Category.icon} width={40} height={40} />

//         </div>
//     })}
  
//     </div>
//   )
// }

// export default Category
import React from 'react';
import Data from '@/Shared/Data'; // Ensure the Data import is correct
import { Link } from 'react-router-dom';

function category() {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center mb-6">Browse By Type</h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid lg:grid-cols-9 gap-6 px-20'>
        {Data.Category.map((category, index) => (
          <Link key={index} to={'search/' + category.name}>
            <div className='border rounded-xl p-3 items-center flex flex-col hover:shadow-md cursor-pointer'>
              <img src={category.icon} alt={category.name} width={35} height={35} />
              <p className='mt-2'>{category.name}</p>
              
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
}

export default category;

