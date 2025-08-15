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
import Data from '@/Shared/Data';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div className="mt-20 px-4 sm:px-8 md:px-12">
      <h2 className="font-bold text-2xl sm:text-3xl text-center mb-6">
        Browse By Type
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 sm:gap-6">
        {Data.Category.map((category, index) => (
          <Link key={index} to={`/search/${category.name}`}>
            <div className="border rounded-xl p-3 flex flex-col items-center hover:shadow-lg transition-shadow bg-white">
              <img
                src={category.icon}
                alt={category.name}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <p className="mt-2 text-xs sm:text-sm text-center font-medium">
                {category.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;


