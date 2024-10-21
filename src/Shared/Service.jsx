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


// import axios from "axios";

// const SendBirdApplicationId = import.meta.env.VITE_SENDBIRD_APP_ID;
// const SendBirdApplicationToken = import.meta.env.VITE_SENDBIRD_APP_TOKEN;

// // Helper function to format API responses
// const FormatResult = (resp) => {
//   let result = [];
//   let finalResult = [];
  
//   resp.forEach((item) => {
//     const listingId = item.carListing?.id;
//     if (!result[listingId]) {
//       result[listingId] = {
//         car: item.carListing,
//         images: []
//       };
//     }
//     if (item.carImages) {
//       result[listingId].images.push(item.carImages);
//     }
//   });

//   result.forEach((item) => {
//     finalResult.push({
//       ...item.car,
//       images: item.images
//     });
//   });
//   return finalResult;
// };

// // Function to create a SendBird user, checks if user exists first
// const CreateSendBirdUser = async (userId, nickName, profileUrl) => {
//   try {
//     // First, check if the user already exists
//     const userExists = await axios.get(
//       `https://api-${SendBirdApplicationId}.sendbird.com/v3/users/${userId}`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Api-Token': SendBirdApplicationToken,
//         },
//       }
//     );

//     // If user exists, return the user's data
//     if (userExists) {
//       console.log(`User with user_id ${userId} already exists.`);
//       return userExists.data;
//     }
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       // If the user does not exist, proceed to create the user
//       try {
//         const createUser = await axios.post(
//           `https://api-${SendBirdApplicationId}.sendbird.com/v3/users`,
//           {
//             user_id: userId,            // Ensure 'user_id' is a string
//             nickname: nickName,         // Ensure 'nickname' is a string
//             profile_url: profileUrl,    // 'profile_url' is optional
//             issue_access_token: false   // Set to true if access token is needed
//           },
//           {
//             headers: {
//               'Content-Type': 'application/json',    // Set correct headers
//               'Api-Token': SendBirdApplicationToken  // Set correct API token
//             },
//           }
//         );

//         return createUser.data;  // Return the created user's data
//       } catch (createError) {
//         console.error("Error creating user:", createError);
//         throw createError;
//       }
//     } else {
//       // Handle any other errors
//       console.error("Error checking user existence:", error);
//       throw error;
//     }
//   }
// };

// // Function to create a SendBird group channel
// const CreateSendBirdChannel = (users, title) => {
//   return axios.post(
//     `https://api-${SendBirdApplicationId}.sendbird.com/v3/group_channels`,  // Correct endpoint for channel creation
//     {
//       user_ids: users,     // List of user IDs who will be part of the channel
//       is_distinct: true,   // Set to true if you want a distinct channel
//       name: title,         // Channel name
//     },
//     {
//       headers: {
//         'Content-Type': 'application/json',    // Set correct headers
//         'Api-Token': SendBirdApplicationToken  // Set correct API token
//       },
//     }
//   );
// };

// export default {
//   FormatResult,
//   CreateSendBirdUser,
//   CreateSendBirdChannel
// };

