import React from 'react'

const ProductCart2 = ({name, rating, price, oldPrice, img}) => {
  return (
    <div>
        <div className='flex items-center gap-3 py-4 hover:-translate-y-1 duration-500'>
            <div>
                <img src={img} className='w-23 border border-gray-200 rounded-xl' />
            </div>

            <div>
                <p className='text-lg font-semibold'>{name}</p>
                <div className='flex gap-3 items-center'>
                    <div className='text-yellow-400 text-[12px]'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <p className='text-lg text-gray-500 '>Rateing :<span className='font-semibold'> {rating}</span></p>
                </div>
                
                <p className='text-lg font-semibold text-[#3BB77E]'>{price}$ <span className='text-gray-500 line-through'>{oldPrice}$</span></p>

            </div>
        </div>
    </div>
  )
}

export default ProductCart2