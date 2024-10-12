import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from '@/Shared/Data';
import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Search() {

const [cars,setCars]=useState();
const [make,setMake]=useState();
const [price,setPrice]=useState();



  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full
     flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%] '>
      
      {/* Car Type Selector */}
      <Select onValueChange={(value)=>setCars(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-pretty">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Used">Used</SelectItem>
          <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
        </SelectContent>


      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      {/* Car Makes Selector */}
      <Select onValueChange={(value)=>setMake(value)}>
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
      <Select onValueChange={(value)=>setPrice(value)}>
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
      <Link to={'/search?cars='+cars+"&make="+make+"&price="+price}>
        <CiSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer' />
      </Link>

    </div>
  );
}

export default Search;
