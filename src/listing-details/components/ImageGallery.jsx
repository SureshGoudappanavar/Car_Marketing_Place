import React from 'react'

// function ImageGallery({carDetail}) {
//   return (
//     <div>
//         <img src={carDetail?.images[0].imageUrl} className='w-full h-[500px] rounded-xl object-cover' />
//     </div>
//   )
// }



function ImageGallery({ carDetail }) {
  return (
    <div className="w-screen max-w-full overflow-hidden px-0 sm:px-0">
      <img
        src={carDetail?.images[0]?.imageUrl}
        className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-none sm:rounded-xl"
        alt="Car"
      />
    </div>
  );
}

export default ImageGallery;
