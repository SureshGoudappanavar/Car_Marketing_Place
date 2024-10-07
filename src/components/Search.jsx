import React from 'react';
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from '@/Shared/Data';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full
     flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%] '>
      
      {/* Car Type Selector */}
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-pretty">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="old">Old</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      {/* Car Makes Selector */}
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-pretty">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((maker, index) => (
            <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      {/* Pricing Selector */}
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-pretty">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((price, index) => (
            <SelectItem key={index} value={price.amount}>{price.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Icon */}
      <div>
        <CiSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer' />
      </div>

    </div>
  );
}

export default Search;
