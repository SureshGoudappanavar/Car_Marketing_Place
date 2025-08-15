// import React, { useState } from 'react';
// import { Separator } from "@/components/ui/separator";
// import { CiSearch } from "react-icons/ci";
// import Data from '@/Shared/Data';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// function Search() {
//   const [cars, setCars] = useState('');
//   const [make, setMake] = useState('');
//   const [price, setPrice] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     const params = new URLSearchParams();

//     if (cars) params.append('cars', cars);
//     if (make) params.append('make', make);
//     if (price) params.append('price', price);

//     navigate(`/search?${params.toString()}`);
//   };

//   return (
//     <div className='w-full md:w-[90%] lg:w-[70%] mx-auto p-4 bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-4 md:gap-6'>
//       {/* Car Type Selector */}
//       <Select onValueChange={(value) => setCars(value)}>
//         <SelectTrigger className="w-full md:w-[180px] outline-none border-gray-300 shadow-sm">
//           <SelectValue placeholder="Cars" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="New">New</SelectItem>
//           <SelectItem value="Used">Used</SelectItem>
//           <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
//         </SelectContent>
//       </Select>

//       <Separator orientation="vertical" className="hidden md:block h-8" />

//       {/* Car Makes Selector */}
//       <Select onValueChange={(value) => setMake(value)}>
//         <SelectTrigger className="w-full md:w-[180px] outline-none border-gray-300 shadow-sm">
//           <SelectValue placeholder="Car Makes" />
//         </SelectTrigger>
//         <SelectContent>
//           {Data.CarMakes.map((maker, index) => (
//             <SelectItem key={index} value={maker.name}>
//               {maker.name}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>

//       <Separator orientation="vertical" className="hidden md:block h-8" />

//       {/* Pricing Selector */}
//       <Select onValueChange={(value) => setPrice(value)}>
//         <SelectTrigger className="w-full md:w-[180px] outline-none border-gray-300 shadow-sm">
//           <SelectValue placeholder="Max Price" />
//         </SelectTrigger>
//         <SelectContent>
//           {Data.Pricing.map((item, index) => (
//             <SelectItem key={index} value={item.amount}>
//               Under {item.amount}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>

//       {/* Search Button */}
//       <div className="mt-2 md:mt-0">
//         <button
//           onClick={handleSearch}
//           className='bg-primary text-white p-3 rounded-full hover:scale-105 transition-all'
//         >
//           <CiSearch className='text-2xl' />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Search;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Data from '@/Shared/Data'; // your file with CarMakes, Pricing, Category
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// function CarSearch() {
//   const navigate = useNavigate();

//   // State
//   const [carMake, setCarMake] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   // Handle Search
//   const handleSearch = () => {
//     const params = new URLSearchParams();

//     if (searchTerm.trim()) params.append('name', searchTerm.trim());
//     if (carMake) params.append('make', carMake);
//     if (price) params.append('price', price);
//     if (category) params.append('type', category);

//     navigate(`/search?${params.toString()}`);
//   };

//   return (
//     <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-4xl mx-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      
//         {/* Car Make */}
//         <Select value={carMake} onValueChange={setCarMake}>
//           <SelectTrigger>
//             <SelectValue placeholder="Select Make" />
//           </SelectTrigger>
//           <SelectContent>
//             {Data.CarMakes.map((make) => (
//               <SelectItem key={make.id} value={make.name}>
//                 {make.name}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>

//         {/* Price */}
//         <Select value={price} onValueChange={setPrice}>
//           <SelectTrigger>
//             <SelectValue placeholder="Select Price Range" />
//           </SelectTrigger>
//           <SelectContent>
//             {Data.Pricing.map((p) => (
//               <SelectItem key={p.id} value={p.amount}>
//                 {p.amount}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>

//         {/* Search Button */}
//         <Button
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
//           onClick={handleSearch}
//         >
//           Search
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default CarSearch;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "@/Shared/Data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function CarSearch() {
  const navigate = useNavigate();

  const [carMake, setCarMake] = useState("");
  const [priceId, setPriceId] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (carMake) params.append("make", carMake);

    if (priceId) {
      const priceRange = Data.Pricing.find(
        (p) => p.id === Number(priceId)
      );
      if (priceRange) {
        params.append("minPrice", priceRange.min);
        params.append("maxPrice", priceRange.max);
      }
    }

    navigate(`/search?${params.toString()}`);
  };

  const handleReset = () => {
    setCarMake("");
    setPriceId("");
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        
        {/* Car Make */}
        <Select value={carMake} onValueChange={setCarMake}>
          <SelectTrigger>
            <SelectValue placeholder="Select Make" />
          </SelectTrigger>
          <SelectContent>
            {Data.CarMakes.map((make, index) => (
              <SelectItem
                key={`${make.id}-${index}`}
                value={make.name}
              >
                {make.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Price Range */}
        <Select value={priceId} onValueChange={setPriceId}>
          <SelectTrigger>
            <SelectValue placeholder="Select Price Range" />
          </SelectTrigger>
          <SelectContent>
            {Data.Pricing.map((price, index) => (
              <SelectItem
                key={`${price.id}-${index}`}
                value={price.id.toString()}
              >
                {price.amount}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full"
          onClick={handleSearch}
        >
          Search
        </Button>

        {/* Reset Button */}
        <Button
          variant="outline"
          className="w-full"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default CarSearch;











