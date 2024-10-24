// import { Button } from '@/components/ui/button';
// import { storage } from './../../../configs/firebaseConfig.js'; // Correct import path
// import React, { useEffect, useState } from 'react';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'; // Correct firebase storage imports
// import { IoMdCloseCircle } from "react-icons/io";
// import { carImages,carListing } from './../../../configs/schema.js';
// import { db } from './../../../configs/index.js';
// function UploadImages({ triggerUploadImages,setLoader}) {
//     const [selectedFileList,setSelectFileList]=useState([]);
//     useEffect(()=>{
//      if(triggerUploadImages){
//         UploadImagesToServer();
//      }
//     },[triggerUploadImages]);
    
//     const onFileSelected=(event)=>{

        
//         const files=event.target.files;
         
//         for(let i=0;i<files?.length;i++){
//              const file=files[i];
//           setSelectFileList((prev)=>[...prev,file])

//         }
//     }



// const UploadImagesToServer=async()=>{
//     setLoader(true);
//   await  selectedFileList.forEach(async(file)=>{
//         const fileName=Date.now()+'.jpeg';
//         const storageRef=ref(storage,'car-marketplace/'+fileName);
//         const metaData={
//             contentType:'image/jpeg'

//         }
//        await uploadBytes(storageRef,file,metaData).then((snapShot)=>{
//             console.log('Uploaded File');
//         }).then(resp=>{
//             getDownloadURL(storageRef).then(async(downloadUrl)=>{
//                 console.log(downloadUrl);
//                 await db.insert(carImages).values({
//                     imageUrl:downloadUrl,
//                    carListingId:triggerUploadImages
//                 })
//             })
//         })

//         setLoader(false);
//     })
//   }
//   const onImageRemove=(image,index)=>{
//     const result =selectedFileList.filter((item)=>item!=image);
//     setSelectFileList(result);
// }

//   return (
//     <div>
//         <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
//         <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
//             {selectedFileList.map((image,index)=>(
//             <div key={index}>
//                <IoMdCloseCircle className=' absolute m-2 text-lg text-white' 
//                onClick={()=>onImageRemove(image,index)}
//                />
//                 <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover  rounded-xl' />
//             </div>
//             ))}
            
            
            
//             <label htmlFor='upload-images'>
//             <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 hover:bg-blue-200 hover:border-blue-500 cursor-pointer'>
//                     <h2 className='text-lg text-center'>+</h2>
//                 </div>
//             </label>
//             <input type="file" multiple={true} id='upload-images' 
//             onChange={onFileSelected}
//             className="opacity-0"/>
//         </div>

//     </div>
//   )
// }

// export default UploadImages



// import { Button } from '@/components/ui/button';
// import { storage } from './../../../configs/firebaseConfig.js';
// import React, { useEffect, useState } from 'react';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import { IoMdCloseCircle } from "react-icons/io";
// import { carImages } from './../../../configs/schema.js';
// import { db } from './../../../configs/index.js';

// function UploadImages({ triggerUploadImages, setLoader }) {
//     const [selectedFileList, setSelectedFileList] = useState([]);

//     useEffect(() => {
//         if (triggerUploadImages && selectedFileList.length > 0) {
//             uploadImagesToServer(); // Trigger only when there are files
//         }
//     }, [triggerUploadImages]);

//     const onFileSelected = (event) => {
//         const files = event.target.files;
//         const fileArray = [];
//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];
//             fileArray.push(file);

//             // Create a URL for the selected file and log it
//             const fileUrl = URL.createObjectURL(file);
//             console.log("Selected image URL: ", fileUrl);
//         }
//         setSelectedFileList(fileArray);
//     };

//     const uploadImagesToServer = async () => {
//         if (selectedFileList.length === 0) return;

//         setLoader(true);
//         try {
//             for (const file of selectedFileList) {
//                 const fileName = Date.now() + '.jpeg';
//                 const storageRef = ref(storage, 'car-marketplace/' + fileName);
//                 const metaData = { contentType: 'image/jpeg' };

//                 // Upload image to Firebase
//                 const snapshot = await uploadBytes(storageRef, file, metaData);
//                 const downloadUrl = await getDownloadURL(storageRef);

//                 // Insert image URL into the carImages table
//                 await db.insert(carImages).values({
//                     imageUrl: downloadUrl,
//                     carListingId: triggerUploadImages
//                 });
//                 console.log("Uploaded image URL: ", downloadUrl);
//             }
//         } catch (error) {
//             console.error("Error uploading file: ", error);
//         } finally {
//             setLoader(false); // Ensure loader stops after uploads complete
//         }
//     };

//     const onImageRemove = (image, index) => {
//         const result = selectedFileList.filter((item) => item !== image);
//         setSelectedFileList(result);
//     };

//     return (
//         <div>
//             <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
//             <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
//                 {selectedFileList.map((image, index) => (
//                     <div key={index} className="relative">
//                         <IoMdCloseCircle className='absolute m-2 text-lg text-white cursor-pointer'
//                             onClick={() => onImageRemove(image, index)}
//                         />
//                         <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl' />
//                     </div>
//                 ))}

//                 <label htmlFor='upload-images'>
//                     <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 hover:bg-blue-200 hover:border-blue-500 cursor-pointer'>
//                         <h2 className='text-lg text-center'>+</h2>
//                     </div>
//                 </label>
//                 <input type="file" multiple={true} id='upload-images'
//                     onChange={onFileSelected}
//                     className="opacity-0"
//                 />
//             </div>
//         </div>
//     );
// }

// export default UploadImages;







// import { Button } from '@/components/ui/button';
// import { storage } from './../../../configs/firebaseConfig.js'; 
// import React, { useEffect, useState } from 'react';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'; 
// import { IoMdCloseCircle } from "react-icons/io";
// import { CarImages } from './../../../configs/schema.js';
// import { db } from './../../../configs/index.js';
// import { eq } from 'drizzle-orm';


// function UploadImages({ triggerUploadImages, setLoader,carInfo,mode }) {
//     const [selectedFileList, setSelectedFileList] = useState([]);
//     const [EditCarImageList,setEditCarimageList]=useState([]);
   
//     useEffect(() => {
//        if(mode=='edit'){
//         setEditCarimageList([]);
//         carInfo?.images.forEach((image)=>{
//             setEditCarimageList(prev=>[...prev,image?.imageUrl]);
            
//         })
//        }
//     }, [carInfo]); 
   
//     useEffect(() => {
//         if (triggerUploadImages && selectedFileList.length > 0) {
//             uploadImagesToServer(); // Trigger upload only when files are selected
//         }
//     }, [triggerUploadImages]);

//     // Handle file selection and display the local file path in the console
//     const onFileSelected = (event) => {
//         const files = event.target.files;
//         const fileArray = [];
        
//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];
//             fileArray.push(file);

//             // Log the local URL of the selected image in the console
//             const localUrl = URL.createObjectURL(file);
//             console.log("Local image URL: ", localUrl);
//         }

//         // Update selected file list state
//         setSelectedFileList(fileArray);
//     };

//     // Function to upload images to Firebase and push URLs to Drizzle database
//     const uploadImagesToServer = async () => {
//         if (selectedFileList.length === 0) return;
    
//         setLoader(true); // Show loader while images are being uploaded
    
//         try {
//             for (const file of selectedFileList) {
//                 console.log("Uploading file:", file.name);
    
//                 const fileName = Date.now() + '.jpeg';
//                 const storageRef = ref(storage, 'car-marketplace/' + fileName);
//                 const metaData = { contentType: 'image/jpeg' };
    
//                 // Upload image to Firebase Storage
//                 const snapshot = await uploadBytes(storageRef, file, metaData);
//                 const downloadUrl = await getDownloadURL(storageRef);
//                 console.log("Firebase download URL:", downloadUrl);
    
//                 // Insert image URL into the correct table in Drizzle
//                 const result = await db.insert(CarImages).values({
//                     imageUrl: downloadUrl,
//                     carListingId: triggerUploadImages // Ensure this ID is valid and corresponds to the carListingId in your carListing table
//                 });
    
//                 // Check if the insertion was successful
//                 if (result) {
//                     console.log("Image URL successfully inserted into Drizzle:", downloadUrl);
//                 } else {
//                     console.error("Failed to insert image URL into Drizzle.");
//                 }
//             }
//         } catch (error) {
//             console.error("Error uploading file or inserting into Drizzle: ", error);
//         } finally {
//             setLoader(false); // Hide loader after upload process is complete
//         }
//     };
    
    

//     // Remove selected image from the list
//     const onImageRemove = (image, index) => {
//         const result = selectedFileList.filter((item) => item !== image);
//         setSelectedFileList(result);
//     };

//     const onImageRemoveFromDB=async(image,index)=>{
//        const result=await db.delete(CarImages).
//        where(eq(CarImages.id,carInfo?.images[index]?.id)).returning({id:CarImages.id});

//        const imageList=EditCarImageList.filter(item=>item!=image);
//        setEditCarimageList(imageList);
//     }

//     return (
//         <div>
//             <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
//             <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                
//                {mode=='edit'&&
//                          EditCarImageList.map((image, index) => (
//                             <div key={index} className="relative">
//                                 <IoMdCloseCircle className='absolute m-2 text-lg text-white cursor-pointer'
//                                     onClick={() => onImageRemoveFromDB(image, index)}
//                                 />
//                                 <img src={(image)} className='w-full h-[130px] object-cover rounded-xl' />
//                             </div>
//                         ))}
                
//                 {selectedFileList.map((image, index) => (
//                     <div key={index} className="relative">
//                         <IoMdCloseCircle className='absolute m-2 text-lg text-white cursor-pointer'
//                             onClick={() => onImageRemove(image, index)}
//                         />
//                         <img src={image} className='w-full h-[130px] object-cover rounded-xl' />
//                     </div>
//                 ))}

//                 <label htmlFor='upload-images'>
//                     <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 hover:bg-blue-200 hover:border-blue-500 cursor-pointer'>
//                         <h2 className='text-lg text-center'>+</h2>
//                     </div>
//                 </label>
//                 <input type="file" multiple={true} id='upload-images'
//                     onChange={onFileSelected}
//                     className="opacity-0"
//                 />
//             </div>
//         </div>
//     );
// }

// export default UploadImages;








import { Button } from '@/components/ui/button';
import { storage } from './../../../configs/firebaseConfig.js'; 
import React, { useEffect, useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'; 
import { IoMdCloseCircle } from "react-icons/io";
import { CarImages } from './../../../configs/schema.js';
import { db } from './../../../configs/index.js';
import { eq } from 'drizzle-orm';

function UploadImages({ triggerUploadImages, setLoader, carInfo, mode }) {
    const [selectedFileList, setSelectedFileList] = useState([]);
    const [editCarImageList, setEditCarImageList] = useState([]);

    useEffect(() => {
        if (mode === 'edit') {
            setEditCarImageList([]);
            carInfo?.images.forEach((image) => {
                setEditCarImageList(prev => [...prev, image?.imageUrl]);
            });
        }
    }, [carInfo, mode]);

    useEffect(() => {
        if (triggerUploadImages && selectedFileList.length > 0) {
            uploadImagesToServer(); // Trigger upload only when files are selected
        }
    }, [triggerUploadImages]);

    // Handle file selection and display the local file path in the console
    const onFileSelected = (event) => {
        const files = event.target.files;
        const fileArray = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const localUrl = URL.createObjectURL(file);
            
            fileArray.push({ file, url: localUrl });

            // Log the local URL of the selected image in the console
            console.log("Local image URL: ", localUrl);
        }

        // Update selected file list state
        setSelectedFileList(fileArray);
    };

    // Function to upload images to Firebase and push URLs to Drizzle database
    const uploadImagesToServer = async () => {
        if (selectedFileList.length === 0) return;
    
        setLoader(true); // Show loader while images are being uploaded
    
        try {
            for (const item of selectedFileList) {
                const { file } = item; // Access the file from the object
                console.log("Uploading file:", file.name);
    
                const fileName = Date.now() + '.jpeg';
                const storageRef = ref(storage, 'car-marketplace/' + fileName);
                const metaData = { contentType: 'image/jpeg' };
    
                // Upload image to Firebase Storage
                const snapshot = await uploadBytes(storageRef, file, metaData);
                const downloadUrl = await getDownloadURL(storageRef);
                console.log("Firebase download URL:", downloadUrl);
    
                // Insert image URL into the correct table in Drizzle
                const result = await db.insert(CarImages).values({
                    imageUrl: downloadUrl,
                    carListingId: triggerUploadImages // Ensure this ID is valid and corresponds to the carListingId in your carListing table
                });
    
                if (result) {
                    console.log("Image URL successfully inserted into Drizzle:", downloadUrl);
                } else {
                    console.error("Failed to insert image URL into Drizzle.");
                }
            }
        } catch (error) {
            console.error("Error uploading file or inserting into Drizzle: ", error);
        } finally {
            setLoader(false); // Hide loader after upload process is complete
        }
    };

    // Remove selected image from the list
    const onImageRemove = (image, index) => {
        const result = selectedFileList.filter((_, idx) => idx !== index);
        setSelectedFileList(result);
    };

    const onImageRemoveFromDB = async (image, index) => {
        const result = await db.delete(CarImages)
            .where(eq(CarImages.id, carInfo?.images[index]?.id))
            .returning({ id: CarImages.id });

        const imageList = editCarImageList.filter(item => item !== image);
        setEditCarImageList(imageList);
    };

    return (
        <div>
            <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                
                {mode === 'edit' &&
                    editCarImageList.map((image, index) => (
                        <div key={index} className="relative">
                            <IoMdCloseCircle className='absolute m-2 text-lg text-white cursor-pointer'
                                onClick={() => onImageRemoveFromDB(image, index)}
                            />
                            <img src={image} className='w-full h-[130px] object-cover rounded-xl' />
                        </div>
                    ))
                }

                {selectedFileList.map((item, index) => (
                    <div key={index} className="relative">
                        <IoMdCloseCircle className='absolute m-2 text-lg text-white cursor-pointer'
                            onClick={() => onImageRemove(item, index)}
                        />
                        <img src={item.url} className='w-full h-[130px] object-cover rounded-xl' />
                    </div>
                ))}

                <label htmlFor='upload-images'>
                    <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 hover:bg-blue-200 hover:border-blue-500 cursor-pointer'>
                        <h2 className='text-lg text-center'>+</h2>
                    </div>
                </label>
                <input type="file" multiple={true} id='upload-images'
                    onChange={onFileSelected}
                    className="opacity-0"
                />
            </div>
        </div>
    );
}

export default UploadImages;

















// import { Button } from '@/components/ui/button';
// import { storage } from './../../../configs/firebaseConfig.js'; 
// import React, { useEffect, useState } from 'react';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'; 
// import { IoMdCloseCircle } from "react-icons/io";
// import { carImages } from './../../../configs/schema.js';
// import { db } from './../../../configs/index.js';

// function UploadImages({ triggerUploadImages, setLoader }) {
//     const [selectedFileList, setSelectedFileList] = useState([]);

//     useEffect(() => {
//         if (triggerUploadImages && selectedFileList.length > 0) {
//             uploadImagesToServer(); // Trigger upload only when files are selected
//         }
//     }, [triggerUploadImages]);

//     // Handle file selection and display the local file path in the console
//     const onFileSelected = (event) => {
//         const files = event.target.files;
//         const fileArray = [];
        
//         for (let i = 0; i < files?.length; i++) {
//             const file = files[i];
//             fileArray.push(file);

//             // Log the local URL of the selected image in the console
//             const localUrl = URL.createObjectURL(file);
//             console.log("Local image URL: ", localUrl);

//             setSelectedFileList((prev)=>[...prev,file]);
//         }

//         // Update selected file list state
//         setSelectedFileList(fileArray);
//     };

//     // Function to upload images to Firebase and push URLs to Drizzle database
//     const uploadImagesToServer =  () => {
//         setLoader(true);
        
//         // Loop through each selected file
//         for (const file of selectedFileList) {
          
//             const fileName = Date.now() + '.jpeg'; // Create unique file name
//             const storageRef = ref(storage, 'car-selling/' + fileName);
//             const metaData = {
//               contentType: 'image/jpeg'
//             };
      
//             // Upload file to Firebase storage
//             uploadBytes(storageRef, file, metaData).then((snapShot=>{
//               console.log('Uploaded File');
//             }));
           

          
          
//             // const downloadUrl = await getDownloadURL(storageRef);
            
//             // // Make sure downloadUrl is not null or undefined
//             // if (downloadUrl) {
//             //   console.log('Image URL from Firebase:', downloadUrl); // Check if downloadUrl is valid
      
//             //   // Insert image URL into the database (Drizzle)
//             //   const result = await db.insert(carImages).values({
//             //     imageUrl: downloadUrl, // Store the image URL
//             //     carListingId: triggerUploadImages // Associated car listing ID
//             //   });
      
//             //   // Log result to confirm that the image was saved in the database
//             //   console.log('Database Insert Result:', result);
//             // } else {
//             //   console.error('Failed to fetch download URL from Firebase.');
//             // }
//           //  catch (error) {
//           //   console.error('Error uploading file or inserting into the database:', error);
//           // }
//         }
      
//         setLoader(false); // Hide loader when done
//       };
      

//     // Remove selected image from the list
//     const onImageRemove = (image, index) => {
//         const result = selectedFileList.filter((item) => item !=image);
//         setSelectedFileList(result);
//     };

//     return (
//         <div>
//             <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
//             <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
//                 {selectedFileList.map((image, index) => (
//                     <div key={index} className="relative">
//                         <IoMdCloseCircle className='absolute m-2 text-lg text-white cursor-pointer'
//                             onClick={() => onImageRemove(image, index)}
//                         />
//                         <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl' />
//                     </div>
//                 ))}

//                 <label htmlFor='upload-images'>
//                     <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 hover:bg-blue-200 hover:border-blue-500 cursor-pointer'>
//                         <h2 className='text-lg text-center'>+</h2>
//                     </div>
//                 </label>
//                 <input type="file" multiple={true} id='upload-images'
//                     onChange={onFileSelected}
//                     className="opacity-0"
//                 />
//             </div>
//             <Button onClick={UploadImages}>Upload Images</Button>
//         </div>
//     );
// }

// export default UploadImages;


// import { Button } from '@/components/ui/button';
// import { storage } from './../../../configs/firebaseConfig.js'; 
// import React, { useEffect, useState } from 'react';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'; 
// import { IoMdCloseCircle } from "react-icons/io";
// import { carImages } from './../../../configs/schema.js';
// import { db } from './../../../configs/index.js';


// function UploadImages() {

//     const [selectedFileList, setSelectedFileList] = useState([]);
//     const onFileSelected = (event) => {
//                 const files = event.target.files;
//                 // const fileArray = [];
                
//                 for (let i = 0; i < files?.length; i++) {
//                     const file = files[i];
                   
                 

//                     // fileArray.push(file);
        
//                     // // Log the local URL of the selected image in the console
//                     // const localUrl = URL.createObjectURL(file);
//                     // console.log("Local image URL: ", localUrl);
        
//                      setSelectedFileList((prev)=>[...prev,file]);
//                 }
        
             
//                 // setSelectedFileList(fileArray);
//             };


//     // Remove selected image from the list
//     const onImageRemove = (image, index) => {
//         const result = selectedFileList.filter((item) => item !=image);
//         setSelectedFileList(result);
//     };

// const UploadImages=()=>{
//     selectedFileList.forEach((file)=>{
//         const fileName = Date.now() + '.jpeg';
//         const storageRef = ref(storage, 'Car-Market/' + fileName);
//         const metaData={
//             contentType:'image/jpeg'
//         }

//          uploadBytes(storageRef,file,metaData).then((snapShot)=>{
//             console.log('uploaded file')
//          }).then(resp=>{
//             getDownloadURL(storageRef).then(async(downloadUrl)=>{
//                 console.log(downloadUrl);
//             })
//          })


//     })
//  }

    



//     return (
//         <div>
//             <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
//             <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
//                 {selectedFileList.map((image, index) => (
//                     <div key={index} >
//                         <IoMdCloseCircle className='absolute m-2 text-lg text-white cursor-pointer'
//                             onClick={() => onImageRemove(image, index)}
//                         />
//                         <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl' />
//                     </div>
//                 ))}

//                 <label htmlFor='upload-images'>
//                     <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 hover:bg-blue-200 hover:border-blue-500 cursor-pointer'>
//                         <h2 className='text-lg text-center'>+</h2>
//                     </div>
//                 </label>
//                 <input type="file" multiple={true} id='upload-images'
//                     onChange={onFileSelected}
//                     className="opacity-0"
//                 />
//             </div>
//           <Button onClick={UploadImages}>Upload Images</Button>
//         </div>
//     );
// }

// export default UploadImages;



//import { Button } from '@/components/ui/button';
// import { storage } from './../../../configs/firebaseConfig.js'; 
// import React, { useEffect, useState } from 'react';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'; 
// import { IoMdCloseCircle } from "react-icons/io";

// function UploadImages({triggleUploadImages}) {
//     const [selectedFileList, setSelectedFileList] = useState([]);
//     const [uploadedUrls, setUploadedUrls] = useState([]);

//     useEffect(() => {
//         if (triggleUploadImages && selectedFileList.length > 0) {
//             UploadImagesToServer(); // Trigger upload only when files are selected
            
//         }
//     }, [triggleUploadImages]);

//     const onFileSelected = (event) => {
//         const files = event.target.files;
//         const fileArray = [];

//         for (let i = 0; i < files?.length; i++) {
//             const file = files[i];
//             fileArray.push(file);
//         }
//         setSelectedFileList((prev) => [...prev, ...fileArray]);
//     };

//     // Remove selected image from the list
//     const onImageRemove = (image, index) => {
//         const result = selectedFileList.filter((item) => item !== image);
//         setSelectedFileList(result);
//     };

//     const UploadImagesToServer = async () => {
//         const promises = selectedFileList.map(async (file) => {
//             const fileName = Date.now() + '-' + file.name; // Use unique filename with original name
//             const storageRef = ref(storage, 'Car-Market/' + fileName);
//             const metaData = {
//                 contentType: file.type, // Dynamically set content type based on file
//             };

//             try {
//                 // Upload file to Firebase Storage
//                 const snapshot = await uploadBytes(storageRef, file, metaData);
//                 const downloadUrl = await getDownloadURL(snapshot.ref);
                
//                 // Add the URL to the uploaded URLs array
//                 setUploadedUrls((prev) => [...prev, downloadUrl]);
//                 console.log('Uploaded file URL:', downloadUrl); // Log the URL in the console
//             } catch (error) {
//                 console.error('Error uploading file:', error);
//             }
//         });

//         await Promise.all(promises); // Wait for all uploads to complete
//     };

//     return (
//         <div>
//             <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
//             <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
//                 {selectedFileList.map((image, index) => (
//                     <div key={index} className="relative">
//                         <IoMdCloseCircle className='absolute m-2 text-lg text-white cursor-pointer'
//                             onClick={() => onImageRemove(image, index)}
//                         />
//                         <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl' alt="selected" />
//                     </div>
//                 ))}

//                 <label htmlFor='upload-images'>
//                     <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 hover:bg-blue-200 hover:border-blue-500 cursor-pointer'>
//                         <h2 className='text-lg text-center'>+</h2>
//                     </div>
//                 </label>
//                 <input type="file" multiple={true} id='upload-images'
//                     onChange={onFileSelected}
//                     className="opacity-0"
//                 />
//             </div>

//             <Button onClick={UploadImagesToServer}>Upload Images</Button>

//             {/* Display uploaded URLs */}
//             {uploadedUrls.length > 0 && (
//                 <div className='mt-5'>
//                     <h3>Uploaded Image URLs:</h3>
//                     <ul>
//                         {uploadedUrls.map((url, index) => (
//                             <li key={index}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default UploadImages;




// import { storage } from './../../../configs/firebaseConfig.js'; 
// import React, { useEffect, useState } from 'react';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'; 
// import { IoMdCloseCircle } from "react-icons/io";
// import { CarImages } from './../../../configs/schema.js';
// import { db } from './../../../configs/index.js';

// function UploadImages({ triggerUploadImages }) {
//     const [selectedFileList, setSelectedFileList] = useState([]);
//     const [isUploading, setIsUploading] = useState(false);

//     // Trigger image upload when the form is submitted (triggerUploadImages)
//     useEffect(() => {
//         if (triggerUploadImages) {
//             if (selectedFileList.length > 0) {
//                 console.log("Triggering image upload for carListingId:", triggerUploadImages);
//                 uploadImagesToServer(); // Automatically upload images
//             } else {
//                 alert('Please upload at least one image before submitting the form!');
//             }
//         }
//     }, [triggerUploadImages]);

//     const onFileSelected = (event) => {
//         const files = event.target.files;
//         for (let i = 0; i < files?.length; i++) {
//             const file = files[i];
//             setSelectedFileList((prev) => [...prev, file]);
//         }
//     };

//     // Remove selected image from the list
//     const onImageRemove = (image) => {
//         setSelectedFileList((prev) => prev.filter((item) => item !== image));
//     };

//     // Upload selected images to the server
//     const uploadImagesToServer = async () => {
//         setIsUploading(true);
//         for (const file of selectedFileList) {
//             const fileName = Date.now() + '.jpeg';
//             const storageRef = ref(storage, 'Car-Market/' + fileName);
//             const metaData = { contentType: 'image/jpeg' };

//             await uploadBytes(storageRef, file, metaData).then(() => {
//                 console.log('Uploaded file');
//                 getDownloadURL(storageRef).then(async (downloadUrl) => {
//                     console.log("downloadUrl:", downloadUrl);

//                     // Save the image URL to the CarImages table
//                     await db.insert(CarImages).values({
//                         imageUrl: downloadUrl,
//                         carListingId: triggerUploadImages, // Ensure the car listing ID is correct
//                     });
//                 });
//             });
//         }
//         setIsUploading(false);
//     };

//     return (
//         <div className='p-6 bg-white rounded-lg shadow-lg'>
//             <h2 className='font-semibold text-xl mb-4 text-gray-800'>Upload Car Images</h2>
//             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//                 {selectedFileList.map((image, index) => (
//                     <div key={index} className='relative group'>
//                         <img src={URL.createObjectURL(image)} className='w-full h-40 object-cover rounded-lg shadow-md' />
//                         <div className='absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity'>
//                             <IoMdCloseCircle
//                                 className='cursor-pointer text-red-600 hover:text-red-800'
//                                 size={24}
//                                 onClick={() => onImageRemove(image)}
//                             />
//                         </div>
//                     </div>
//                 ))}
//                 <label className='cursor-pointer'>
//                     <div className='flex items-center justify-center w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-200 transition'>
//                         <span className='text-lg text-gray-500'>+</span>
//                     </div>
//                     <input type="file" accept="image/jpeg" multiple onChange={onFileSelected} className='hidden' />
//                 </label>
//             </div>
//             {isUploading && <p className="text-blue-500 mt-4">Uploading images...</p>}
//         </div>
//     );
// }

// export default UploadImages;


// import { storage } from './../../../configs/firebaseConfig.js'; 
// import React, { useEffect, useState } from 'react';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'; 
// import { IoMdCloseCircle } from "react-icons/io";
// import { CarImages } from './../../../configs/schema.js';
// import { db } from './../../../configs/index.js';

// function UploadImages({ triggerUploadImages }) {
//     const [selectedFileList, setSelectedFileList] = useState([]);
//     const [isUploading, setIsUploading] = useState(false);
//     const [uploadedImages, setUploadedImages] = useState([]); // Track uploaded images

//     // Trigger image upload when the form is submitted (triggerUploadImages)
//     useEffect(() => {
//         if (triggerUploadImages) {
//             if (selectedFileList.length > 0) {
//                 console.log("Triggering image upload for carListingId:", triggerUploadImages);
//                 uploadImagesToServer(); // Automatically upload images
//             } else {
//                 console.log('No images selected!'); // Remove alert, just log it
//             }
//         }
//     }, [triggerUploadImages]);

//     const onFileSelected = (event) => {
//         const files = event.target.files;
//         for (let i = 0; i < files?.length; i++) {
//             const file = files[i];
//             setSelectedFileList((prev) => [...prev, file]);
//         }
//     };

//     // Remove selected image from the list
//     const onImageRemove = (image) => {
//         setSelectedFileList((prev) => prev.filter((item) => item !== image));
//     };

//     // Upload selected images to the server
//     const uploadImagesToServer = async () => {
//         setIsUploading(true);
//         const uploadedImagesList = [];
//         for (const file of selectedFileList) {
//             const fileName = Date.now() + '.jpeg';
//             const storageRef = ref(storage, 'Car-Market/' + fileName);
//             const metaData = { contentType: 'image/jpeg' };

//             await uploadBytes(storageRef, file, metaData).then(() => {
//                 console.log('Uploaded file');
//                 getDownloadURL(storageRef).then(async (downloadUrl) => {
//                     console.log("downloadUrl:", downloadUrl);

//                     // Save the image URL to the CarImages table
//                     await db.insert(CarImages).values({
//                         imageUrl: downloadUrl,
//                         carListingId: triggerUploadImages, // Ensure the car listing ID is correct
//                     });

//                     uploadedImagesList.push(downloadUrl); // Keep track of uploaded images
//                 });
//             });
//         }

//         setIsUploading(false);

//         // Once all images are uploaded, store them and redirect to profile page
//         if (uploadedImagesList.length === selectedFileList.length) {
//             setUploadedImages(uploadedImagesList); // Store the uploaded image URLs
//             window.location.href = 'http://localhost:5173/profile'; // Redirect to the profile page
//         }
//     };

//     return (
//         <div className='p-6 bg-white rounded-lg shadow-lg'>
//             <h2 className='font-semibold text-xl mb-4 text-gray-800'>Upload Car Images</h2>
//             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//                 {selectedFileList.map((image, index) => (
//                     <div key={index} className='relative group'>
//                         <img src={URL.createObjectURL(image)} className='w-full h-40 object-cover rounded-lg shadow-md' />
//                         <div className='absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity'>
//                             <IoMdCloseCircle
//                                 className='cursor-pointer text-red-600 hover:text-red-800'
//                                 size={24}
//                                 onClick={() => onImageRemove(image)}
//                             />
//                         </div>
//                     </div>
//                 ))}
//                 <label className='cursor-pointer'>
//                     <div className='flex items-center justify-center w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-200 transition'>
//                         <span className='text-lg text-gray-500'>+</span>
//                     </div>
//                     <input type="file" accept="image/jpeg" multiple onChange={onFileSelected} className='hidden' />
//                 </label>
//             </div>
//             {isUploading && <p className="text-blue-500 mt-4">Uploading images...</p>}
//         </div>
//     );
// }

// export default UploadImages;









