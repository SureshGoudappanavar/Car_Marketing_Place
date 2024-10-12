//const {CarImages}=require("configs/schema")

import axios from "axios";


const SendBirdApplicationId=import.meta.env.VITE_SENDBIRD_APP_ID;
const SendBirdApplicationToken=import.meta.env.VITE_SENDBIRD_APP_TOKEN;
const FormatResult=(resp)=>{
    let result=[];
    let finalResult=[];
    resp.forEach((item)=>{
        const listingId=item.carListing?.id;
        if(!result[listingId]){
            result[listingId]={
                car:item.carListing,
                images:[]
            }
        }
        if(item.carImages){
            result[listingId].images.push(item.carImages)
        }
    })

    result.forEach((item)=>{
         finalResult.push({
            ...item.car,
            images:item.images
         })
    })
    return finalResult;
}

const CreateSendBirdUser = (userId, nickName, profileUrl) => {
    return axios.post(
      'https://api-'+SendBirdApplicationId+'.sendbird.com/v3/users', // Make sure this URL is correct
      {
        user_id: userId,           // Ensure 'user_id' is a string
        nickname: nickName,        // Ensure 'nickname' is a string
        profile_url: profileUrl,   // 'profile_url' is optional but should be a valid URL if provided
        issue_access_token: false  // You may want to set this to 'true' if you need an access token for the user
      },
      {
        headers: {
          'Content-Type': 'application/json',     // Ensure headers are correctly set
          'Api-Token': SendBirdApplicationToken,  // API token should be correct
        },
      }
    );
  };
  
const CreateSendBirdChannel=(users,title)=>{
    return axios.post(
        'https://api-'+SendBirdApplicationId+'.sendbird.com/v3/users',
        {
        user_ids: users,  
        is_distinct:true,
        name:title ,    
        },
        {
            headers: {
              'Content-Type': 'application/json',     // Ensure headers are correctly set
              'Api-Token': SendBirdApplicationToken,  // API token should be correct
            },
          }
    )
}

export default{
    FormatResult,
    CreateSendBirdUser,
    CreateSendBirdChannel
}