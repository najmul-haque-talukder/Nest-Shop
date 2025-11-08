import React from 'react'

const ServicesCard = ({index, title, desc, image}) => {
  return (
    <div>
        <div>
            <div className='w-85 border border-gray-200 justify-center shadow-sm rounded-lg p-7 hover:shadow-xl duration-500' key={index}>
                <img src={image} className='w-40 m-auto' />
                <p className='text-2xl font-semibold text-center py-4'>{title}</p>
                <p className='text-center'>{desc}</p>


                <p className='text-[#3BB77E] text-center pt-4'>Read More</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesCard