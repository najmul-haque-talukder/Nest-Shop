import React from 'react'

const SmallBanner = ({img,text}) => {
  return (
    <div>
        <div>
            <div className='relative'>
                <img src={img} className='rounded-lg' />

                <div className='absolute top-10 left-9'>
                    <p className='text-2xl font-semibold py-4 hover:-translate-y-2 duration-700 w-60'>{text}</p>
                    <button className='bg-[#238155] text-white px-3 py-2 text-sm font-semibold rounded-md hover:-translate-y-1 hover:bg-amber-500 duration-800'>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SmallBanner