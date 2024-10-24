// import { Button } from '@/components/ui/button'
// import React from 'react'
// import { MdLocalOffer } from "react-icons/md";
// import { useState } from 'react';





// const offer=(async()=>{

//   const [formData, setFormData] = useState([]); 

//   // Display a prompt and store the user's input
// let offerprice = prompt("Enter your offer price in Dollar:");

// // Check if the user entered a value or canceled
// if (offerprice !== null) {
//   // User entered a value
//   const result = await db.insert(CarListing).values({
//     ...formData, 
//     priceOffer: offerprice, 
//   }).returning({ id: CarListing.id });
//   console.log("User's offer price: " + priceOffer);

// } else {
//   // User clicked cancel
//   console.log("User canceled the prompt.");
// }

// })
// function Pricing({carDetail}) {
  
//   return (
//     <div className='p-10 rounded-xl border shadow-md'>
//        <h2>Our Price
//         </h2> 
//   <h2 className='font-bold text-4xl'>${carDetail?.sellingPrice}</h2>
//   <Button className="w-full mt-7 " size="lg" onClick={offer}><MdLocalOffer className='text-lg mr-2'/>Make An Offer Price</Button>
//     </div>
//   )
// }

// export default Pricing


import { Button } from '@/components/ui/button';
import React from 'react';
import { MdLocalOffer } from 'react-icons/md';
import { db } from './../../../configs';
import { CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
function Pricing({ carDetail }) {
  const handleOffer = async () => {
    // Display a prompt to the user to enter the offer price
    let offerPrice = prompt('Enter your offer price in Dollar:');
    
    if (offerPrice !== null && offerPrice.trim() !== '') {
      // User entered a value and it's not empty
      try {
      
        const result = await db
          .update(CarListing)
          .set({
            offerPrice: offerPrice,  // Updating the offerPrice field
          })
         
         .where(eq(CarListing.id,carDetail.id))
          .returning({ id: CarListing.id, offerPrice: CarListing.offerPrice });

        console.log('Offer updated successfully:', result);
      } catch (error) {
        console.error('Error updating offer:', error);
      }
    } else {
      // User canceled the prompt or entered invalid input
      console.log('User canceled the prompt or entered an invalid value.');
    }
  };

  return (
    <div className='p-10 rounded-xl border shadow-md'>
      <h2>Our Price</h2>
      <h2 className='font-bold text-4xl'>${carDetail?.sellingPrice}</h2>
      <Button className='w-full mt-7' size='lg' onClick={handleOffer}>
        <MdLocalOffer className='text-lg mr-2'/>
        Make An Offer Price
      </Button>
    </div>
  );
}

export default Pricing;


