import Header from '@/components/Header'
import Search from '@/components/Search'
import { db } from './../../../configs';
import { CarImages,CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Service from '@/Shared/Service';

function SearchByCategory() {

  const { category } = useParams();
  const normalizedCategory = category.trim().toLowerCase();
  
console.log(category)

useEffect(()=>{
    GetCarList();
},[])

const GetCarList = async () => {
  const result = await db
    .select({
      id: CarListing.id,
      vehicleModel: CarListing.vehicleModel,
      price: CarListing.price,
      carCategory: CarListing.category,  // Aliased as carCategory
      imageUrl: CarImages.imageUrl
    })
    .from(CarListing)
    .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
    .where(eq(CarListing.category, normalizedCategory));

  // Log the entire result for debugging
  console.log(result);

  // Loop through the array and destructure each item
  result.forEach(({ id, vehicleModel, price, carCategory, imageUrl }) => {
    console.log(`ID: ${id}`);
    console.log(`Model: ${vehicleModel}`);
    console.log(`Price: ${price}`);
    console.log(`Category: ${carCategory}`);
    console.log(`Image URL: ${imageUrl}`);
  });
};




  return (
    <div> 
        <Header  />
        <div className='p-16 bg-black flex justify-center'>
          <Search/>
    </div>
    <div>
        <h2 className='font-bold text-4xl p-10 md:px-20'>{category}</h2>

    {/* List Of CarList */}

    </div>
    </div>
    
  )
}

export default SearchByCategory
