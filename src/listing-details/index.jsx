// import Header from '@/components/Header'
// import React, { useEffect, useState } from 'react'
// import DetailHeader from './components/DetailHeader'
// import { useParams } from 'react-router-dom'
// import { db } from './../../configs';
// import { CarImages, CarListing } from './../../configs/schema';
// import { eq } from 'drizzle-orm';
// import Service from '@/Shared/Service';
// import ImageGallery from './components/ImageGallery';
// import Description from './components/Description';


// import Pricing from './components/Pricing';
// import Specification from './components/Specification';
// import Footer from '@/components/Footer';

// import FinancialCalculator from './components/FinancialCalculator';
// import MostSearchedCar from '@/components/MostSearchedCar';
// import OwnersDetails from './components/OwnersDetails';
// import Features from './components/Features';
// function ListingDetail() {

//     const {id}=useParams();
//     const [carDetail,setCarDetail]=useState();
    
    
//     useEffect(()=>{
//      GetCarDetail();
//     },[])

//     const GetCarDetail=async()=>{
//         const result=await db.select().from(CarListing)
//         .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
//         .where(eq(CarListing.id,id))
//     console.log(id);
    
//         const resp=Service.FormatResult(result);
//         console.log(resp[0]);
//         setCarDetail(resp[0]);
//     }
//   return (
//     <div>

//         <Header/>

//         {/* Header Details Component */}
//         <div>
//             <DetailHeader carDetail={carDetail}/>
//     <div className='grid grid-cols-1 md:grid-cols-3 ml-16 mt-10 gap-5' >
//             {/* Left */}
//          <div className='md:col-span-2 '>
//        {/* Image Gallery */}
//         <ImageGallery carDetail={carDetail}/>

//        {/* Description */}
//           <Description carDetail={carDetail}/>

//        {/* Features List */}

//        <Features features={carDetail?.features}/>

//        {/* FInancial Calculator */}

//        <FinancialCalculator carDetail={carDetail}/>
//          </div>

//             {/* right */}
//             <div className=' mr-16'>
//           {/* Pricing */}
//         <Pricing carDetail={carDetail}/>
//           {/* Car Specification */}
//        <Specification  carDetail={carDetail}/>

//           {/* Owners Details */}
//           <OwnersDetails carDetail={carDetail}/>
//             </div >
//     </div>
//     <MostSearchedCar/>
//         </div>
//         <Footer/>
//     </div>
//   )
// }

// export default ListingDetail

import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from './../../configs';
import { CarImages, CarListing } from './../../configs/schema';
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import Footer from '@/components/Footer';
import MostSearchedCar from '@/components/MostSearchedCar';
import CarDetailsPage from './components/CarDetailsPage'; // merged component

function ListingDetail() {
  const { id } = useParams();
  const [carDetail, setCarDetail] = useState();

  useEffect(() => {
    GetCarDetail();
  }, []);

  const GetCarDetail = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, id));

    const resp = Service.FormatResult(result);
    setCarDetail(resp[0]);
  };

  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {carDetail ? (
          <CarDetailsPage carDetail={carDetail} />
        ) : (
          <div className="w-full h-[400px] bg-slate-200 animate-pulse rounded-xl"></div>
        )}
      </div>

      <MostSearchedCar />
      <Footer />
    </div>
  );
}

export default ListingDetail;
