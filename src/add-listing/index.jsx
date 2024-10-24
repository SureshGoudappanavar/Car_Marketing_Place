



 // Handle form submission
  // const onSubmit = async (e) => {
  //   e.preventDefault(); // Prevent default form submission behavior
    
  //   if (!isValid) {
  //     toast.error("Please fill all required fields.");
  //     return;
  //   }
  
  //   setLoader(true); // Show loader
  //   toast('Please Wait...'); // Toast message on form submission start
  
  //   try {
  //     // Get user ID (this could come from session or context)
  //     // const createdBy="user123";
      
    
  //     // Insert car listing data into the database
  //     const result = await db.insert(CarListing).values({
  //       ...formData,
  //       features: featuresData,
       

  //       postedOn:moment().format('DD/MM/yyyy'),
  //     }).returning({ id: carListing.id });
     
  //     if (result) {
  //       console.log("Data Saved");
  //       console.log('User Email:', user?.primaryEmailAddress?.emailAddress);
  //       setTriggerUploadImages(result[0]?.id);
  //       toast.success('Listing added successfully!'); // Success message
  //       setLoader(false); // Hide loader
  
  //       // Navigate to profile after successful submission
  //       navigate('/profile');
  //     }
  //   } catch (error) {
  //     console.error('Error details:', error);
  //     toast.error("Error adding listing!"); // Error message
  //     setLoader(false); // Hide loader in case of error
  //   }
  // };











//   import Header from '@/components/Header';
//   import React, { useState } from 'react';
//   import carDetails from './../Shared/carDetails.json';
//   import InputField from './components/InputField';
//   import DropdownField from './components/DropdownField';
//   import TextAreaField from './components/TextAreaField'; 
//   import { Separator } from '@/components/ui/separator';
//   import features from './../Shared/features.json';
//   import { Button } from '@/components/ui/button';
//   import { Checkbox } from '@/components/ui/checkbox';
//   import { CarListing } from './../../configs/schema';
//   import { db } from './../../configs';
//   import UploadImages from './components/UploadImages'; // Correct import for UploadImages
//   import { TbLoader3 } from "react-icons/tb";
//   import { toast } from 'sonner'; // Correct import for toast messages
//   import { useNavigate } from 'react-router-dom';
//   import moment from 'moment';
//   import { useUser } from '@clerk/clerk-react';
// import { isNotNull } from 'drizzle-orm';
  
//   function AddListing() {
//     const [formData, setFormData] = useState([]); // Track form data
//     const [featuresData, setFeaturesData] = useState([]); // Features array
//     const [triggerUploadImages, setTriggerUploadImages] = useState(null); // Track when to trigger image upload
//     const [loader, setLoader] = useState(false); // Track loading state
//     const navigate = useNavigate();
//     const {user} = useUser(); // Get user information
  
//     // Capture user input from form
//     const handleInputChange = (name, value) => {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//       console.log(formData);
//     };
  
//     // Update selected features list
//     const handleFeatureChange = (name, isChecked) => {
//       setFeaturesData((prevData) => {
//         if (isChecked) {
//           return [...prevData, name];
//         } else {
//           return prevData.filter((feature) => feature !== name);
//         }
//       });
//     };
  
//     let isValid = true;
  
//     carDetails.carDetails.forEach((item) => {
//       if (item.required && !formData[item.name]?.trim()) {
//         isValid = false;
//       }
//     });
  
//     // Handle form submission and image upload
//     const onSubmit = async (e) => {
//       e.preventDefault(); // Prevent default form submission behavior
      
//       if (!isValid) {
//         toast.error("Please fill all required fields.");
//         return;
//       }
    
//       setLoader(true); // Show loader
//       toast('Please Wait...'); // Toast message on form submission start
    
//       try {
//         const createdByEmail = user?.primaryEmailAddress?.emailAddress;
    
//         if (!createdByEmail) {
//           throw new Error("User email is missing. Please log in again.");
//         }
    
//         const result = await db.insert(CarListing).values({
//           ...formData, 
//           features: featuresData, 
//           postedOn: moment().format('DD/MM/yyyy'), 
//           createdBy: createdByEmail, 
//         }).returning({ id: CarListing.id });
    
//         if (result && result.length > 0) {
//           console.log("Data Saved");
//           setTriggerUploadImages(result[0]?.id); // Trigger image upload
//           toast.success('Listing added successfully!'); 
//           setLoader(false);
//           navigate('/profile');
//         }
//       } catch (error) {
//         console.error('Error details:', error); 
//         toast.error("Error adding listing!"); 
//         setLoader(false); 
//       }
//     };
  
//     return (
//       <div>
//         <Header />
//         <div className="px-10 md:px-20 my-10">
//           <h2 className="font-bold text-xl">Add New Listing</h2>
//           <form className="p-10 border rounded-xl mt-10" onSubmit={onSubmit}>
//             {/* Car details */}
//             <div>
//               <h2 className="font-medium text-xl mb-6">Car Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 {carDetails.carDetails.map((item, index) => (
//                   <div key={index}>
//                     <label className="text-sm">
//                       {item?.label}
//                       {item.required && <span className="text-red-500">*</span>}
//                     </label>
//                     {item.fieldType === 'text' || item.fieldType === 'number' ? (
//                       <InputField
//                         item={item}
//                         handleInputChange={handleInputChange}
//                       />
//                     ) : item.fieldType === 'dropdown' ? (
//                       <DropdownField
//                         item={item}
//                         handleInputChange={handleInputChange}
//                       />
//                     ) : item.fieldType === 'textarea' ? (
//                       <TextAreaField
//                         item={item}
//                         handleInputChange={handleInputChange}
//                       />
//                     ) : null}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <Separator className="my-6" />
  
//             {/* Features list */}
//             <div>
//               <h2 className="font-medium text-xl my-6">Features</h2>
//               <div className="grid grid-cols-2 md:grid-cols-3">
//                 {features.features.map((item, index) => (
//                   <div key={index} className="flex gap-2 items-center">
//                     <Checkbox
//                       onCheckedChange={(isChecked) =>
//                         handleFeatureChange(item.name, isChecked)
//                       }
//                     />
//                     <h2>{item.label}</h2>
//                   </div>
//                 ))}
//               </div>
//             </div>
  
//             {/* Car Images */}
//             <Separator className="my-6" />
  
//             <UploadImages triggerUploadImages={triggerUploadImages} setLoader={setLoader} /> 
           
//             <div className="mt-10 flex justify-center" >
//               <Button type="submit" disabled={loader} onClick={(e)=>onSubmit(e)}>
//                 {loader ? <TbLoader3 className="animate-spin"  /> : 'Submit'   
//                 }
                
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }   
  
//   export default AddListing;
import React, { useEffect, useState } from 'react';
import carDetails from './../Shared/carDetails.json';
import InputField from './components/InputField';
import DropdownField from './components/DropdownField';
import TextAreaField from './components/TextAreaField';
import { Separator } from '@/components/ui/separator';
import features from './../Shared/features.json';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { CarImages, CarListing } from './../../configs/schema';
import { db } from './../../configs';
import UploadImages from './components/UploadImages'; // Correct import for UploadImages
import { TbLoader3 } from "react-icons/tb";
import { toast } from 'sonner'; // Correct import for toast messages
import { useNavigate,useSearchParams } from 'react-router-dom';
import moment from 'moment';
import { useUser } from '@clerk/clerk-react';
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import Data from '@/Shared/Data';
import Category from '@/components/Category';
function AddListing() {
  const [formData, setFormData] = useState([]); // Track form data
  const [featuresData, setFeaturesData] = useState([]); // Features array
  const [triggerUploadImages, setTriggerUploadImages] = useState(null); // Track carListingId for image upload
const [searchParams]=useSearchParams();


  const [loader, setLoader] = useState(false); // Track loading state
  
  
  const [carInfo,setCarInfo]=useState();
  
  const navigate = useNavigate();
  const { user } = useUser(); // Get user information

  // const selectedCategory = Data.Category.find();

const mode=searchParams.get('mode');
const recordId=searchParams.get('id');

// const categories = Data.Category || []; // Handle potential undefined Data.Category

// if (categories.length > 0) {
//   console.log("Category Name:", categories[0].name);
// } else {
//   console.log("No categories found.");
// }



useEffect(()=>{
if(mode=='edit'){
  GetListingDetail();
}


},[]);

const GetListingDetail=async()=>{
   const result=await db.select().from(CarListing)
   .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
  .where(eq(CarListing.id,recordId))

  const resp=Service.FormatResult(result);
  setCarInfo(resp[0]);
  setFormData(resp[0]);
  setFeaturesData(resp[0].features)
}

  // Capture user input from form
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  // Update selected features list
  const handleFeatureChange = (name, isChecked) => {
    setFeaturesData((prevData) => {
      if (isChecked) {
        return [...prevData, name];
      } else {
        return prevData.filter((feature) => feature !== name);
      }
    });
  };

  let isValid = true;

  carDetails.carDetails.forEach((item) => {
    if (item.required && !formData[item.name]?.trim()) {
      isValid = false;
    }
  });

  // Handle form submission and image upload
  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!isValid) {
      toast.error("Please fill all required fields.");
      return;
    }

    setLoader(true); // Show loader
    toast('Please Wait...'); // Toast message on form submission start
if(mode=='edit'){
    const result=await db.update(CarListing).set({
      ...formData, 
        features:featuresData,
        postedOn: moment().format('DD/MM/yyyy'), 
        createdBy:user?.primaryEmailAddress?.emailAddress, 
        userName:user?.fullName,
        userImageUrl:user?.imageUrl,
     
    }).where(eq(CarListing.id,recordId)).returning({id:CarListing.id})
    console.log(result);

navigate('/profile');

    setLoader(false);


}
else{
    try {
     const createdByEmail= user?.primaryEmailAddress?.emailAddress;
    
      if (!createdByEmail) {
        throw new Error("User email is missing. Please log in again.");
      }

      const result = await db.insert(CarListing).values({
        ...formData, 
        features: featuresData, 
        postedOn: moment().format('DD/MM/yyyy'), 
        createdBy:createdByEmail , 
        userName:user?.fullName,
      
      }).returning({ id: CarListing.id });

      if (result && result.length > 0) {
        const listingId = result[0]?.id; // Retrieve inserted car listing ID
        console.log("Data Saved, carListingId:", listingId);
        setTriggerUploadImages(listingId); // Set car listing ID for image upload
        toast.success('Listing added successfully!');
        setLoader(false);
        // Do not navigate immediately; allow the user to upload images
      }
    } catch (error) {
      console.error('Error details:', error);
      toast.error("Error adding listing!");
      setLoader(false);
    }
  }
  };

  return (
    <div>
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-xl">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-10" onSubmit={onSubmit}>
          {/* Car details */}
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm">
                    {item?.label}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType === 'text' || item.fieldType === 'number' ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange} carInfo={carInfo}
                    />
                  ) : item.fieldType === 'dropdown' ? (
                    <DropdownField
                      item={item}
                      handleInputChange={handleInputChange}  carInfo={carInfo}
                    />
                  ) : item.fieldType === 'textarea' ? (
                    <TextAreaField
                      item={item}
                      handleInputChange={handleInputChange} carInfo={carInfo}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />

          {/* Features list */}
     {/* Features list */}
<div>
  <h2 className="font-medium text-xl my-6">Features</h2>
  <div className="grid grid-cols-2 md:grid-cols-3">
    {features.features.map((item, index) => (
      <div key={index} className="flex gap-2 items-center">
        <Checkbox
          onCheckedChange={(isChecked) =>
            handleFeatureChange(item.name, isChecked)
          }
          // Correctly set the `checked` prop based on `featuresData`
          checked={featuresData.includes(item.name)} 
        />
        <h2>{item.label}</h2>
      </div>
    ))}
  </div>
</div>


                     {/* Car Images */}
             <Separator className="my-6" />
           <UploadImages triggerUploadImages={triggerUploadImages} 
           carInfo={carInfo}
           mode={mode} 
           setLoader={(v)=>{setLoader(v);navigate('/profile')}
          
          }  /> 
           
            <div className="mt-10 flex justify-center" >
              <Button type="submit" disabled={loader} onClick={(e)=>onSubmit(e)}>
                 {loader ? <TbLoader3 className="animate-spin"  /> : 'Submit'   
                }
                
              </Button>
            </div>
          </form>
        </div>
       </div>
    );
   }   
  
   export default AddListing;

  
