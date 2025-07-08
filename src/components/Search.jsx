import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from '@/Shared/Data';
import { Link, useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Search() {
  const [cars, setCars] = useState('');
  const [make, setMake] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (cars) params.append('cars', cars);
    if (make) params.append('make', make);
    if (price) params.append('price', price);

    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className='w-full md:w-[90%] lg:w-[70%] mx-auto p-4 bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-4 md:gap-6'>
      {/* Car Type Selector */}
      <Select onValueChange={(value) => setCars(value)}>
        <SelectTrigger className="w-full md:w-[180px] outline-none border-gray-300 shadow-sm">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Used">Used</SelectItem>
          <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block h-8" />

      {/* Car Makes Selector */}
      <Select onValueChange={(value) => setMake(value)}>
        <SelectTrigger className="w-full md:w-[180px] outline-none border-gray-300 shadow-sm">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((maker, index) => (
            <SelectItem key={index} value={maker.name}>
              {maker.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block h-8" />

      {/* Pricing Selector */}
      <Select onValueChange={(value) => setPrice(value)}>
        <SelectTrigger className="w-full md:w-[180px] outline-none border-gray-300 shadow-sm">
          <SelectValue placeholder="Max Price" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((item, index) => (
            <SelectItem key={index} value={item.amount}>
              Under ${item.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Button */}
      <div className="mt-2 md:mt-0">
        <button
          onClick={handleSearch}
          className='bg-primary text-white p-3 rounded-full hover:scale-105 transition-all'
        >
          <CiSearch className='text-2xl' />
        </button>
      </div>
    </div>
  );
}

export default Search;
