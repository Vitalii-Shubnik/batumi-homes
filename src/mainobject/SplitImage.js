import React from 'react'
const SplitImage = ({ photos, current }) => {
  return (
    <div className={`flex flex-row gap-[0.5%] top-0 bottom-0 my-auto left-0 right-0 mx-auto absolute h-fit w-fit max-h-[90vh]`}>
      {photos && photos.length === 4 && (
        <>
          <img src={photos[0]} className={`duration-1000 max-h-[90vh] object-contain w-[24%] ease-out ${current ? 'opacity-100 animate-slide_up' : 'opacity-0 '}  `} />
          <img src={photos[1]} className={`duration-1000 max-h-[90vh] object-contain w-[24%] ease-out ${current ? 'opacity-100 animate-slide_down' : 'opacity-0 '}  `} />
          <img src={photos[2]} className={`duration-1000 max-h-[90vh] object-contain w-[24%] ease-out ${current ? 'opacity-100 animate-slide_up' : 'opacity-0 '}  `} />
          <img src={photos[3]} className={`duration-1000 max-h-[90vh] object-contain w-[24%] ease-out ${current ? 'opacity-100 animate-slide_down' : 'opacity-0 '}  `} />
        </>)}
    </div>
  )
}

export default SplitImage