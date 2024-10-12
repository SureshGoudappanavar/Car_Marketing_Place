import { Button } from '@/components/ui/button'
import Service from '@/Shared/Service';
import { useUser } from '@clerk/clerk-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function OwnersDetails({carDetail}) {
  const {user}=useUser();
  const navigation=useNavigate();

  const OnMessageOwnerButtonClick = async () => {
    console.log(carDetail?.userName);
    const ownerUserId = carDetail?.createdBy.split('@')[0];
    const userId = user.primaryEmailAddress.emailAddress.split('@')[0];
  
    try {
      // Create Current User
      const userResp = await Service.CreateSendBirdUser(userId, user?.fullName);
      console.log('Current User Created:', userResp);
    } catch (e) {
      console.error('Error creating current user:', e); // Add error logging
    }
  
    try {

        await Service.CreateSendBirdUser(ownerUserId,carDetail?.userName ,carDetail?.userImageUrl)
        .then((resp)=>{
          console.log(resp)
        })

    }  catch (e) {
      console.error('Error creating owner user:', e); // Add error logging
    }
  
    // Additional logic for creating a channel or other actions
    try {

      await Service.CreateSendBirdUser([userId,ownerUserId],carDetail?.vehicleModel )
      .then((resp)=>{
        console.log(resp)
        console.log('Channel Created');
        navigation('./profile');
      })

  }  catch (e) {
    console.error('Error creating owner user:', e); // Add error logging
  }


  };
  
  return (
    <div className='p-10 border rounded-xl shadow-md mt-7'>
        <h2 className='font-medium text-2xl mb-3'>Owner / Deals</h2>
        
        <img src={carDetail?.userImageUrl} className='w-[70px] h-[70px] rounded-full'/>
        <h2 className='mt-2 font-bold text-xl'>{carDetail?.userName}</h2>
        <h2 className='mt-2 text-gray-500'>{carDetail?.createdBy}</h2>

<Button className="w-full mt-6"

onClick={OnMessageOwnerButtonClick}
>Message Owner


</Button>

    </div>
  )
}

export default OwnersDetails