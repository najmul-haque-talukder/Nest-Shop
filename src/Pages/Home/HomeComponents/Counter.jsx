import React from 'react'

const Counter = ({img, title, price, rating, brand, oldPrice}) => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <img src={img} className='rounded rounded-xl' />
                </div>

                <div className='-translate-y-30'>
                    <div>
                        <div className='flex gap-4 justify-center w-full pb-3'>
                            <p className='h-12 w-12 rounded-xl flex items-center justify-center text-lg text-[#3bb77e] font-semibold bg-white'>10</p>
                            <p className='h-12 w-12 rounded-xl flex items-center justify-center text-lg text-[#3bb77e] font-semibold bg-white'>10</p>
                            <p className='h-12 w-12 rounded-xl flex items-center justify-center text-lg text-[#3bb77e] font-semibold bg-white'>10</p>
                            <p className='h-12 w-12 rounded-xl flex items-center justify-center text-lg text-[#3bb77e] font-semibold bg-white'>10</p>
                        </div>
                    </div>
                    <div className='rounded-xl shadow-xl mx-5 p-4 bg-white'>
                        <p className='text-lg font-semibold'>{title}</p>
                            <div className='flex gap-3 items-center py-1'>
                                <div className='text-yellow-400 text-[12px]'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <p className='text-lg text-gray-500 '>Rateing :<span className='font-semibold'> {rating}</span></p>
                            </div>
                            
                            <p className='text-gray-500 text-sm'>By <span className='text-green-500 font-semibold'>{brand}</span></p>
                            
                            <div className='flex justify-between items-center py-2'>
                                <p className='text-lg font-semibold text-[#3BB77E]'>{price}$ <span className='text-gray-500 line-through'>{oldPrice}$</span></p>
                                <button className='bg-[#def9ec] text-sm text-[#3BB77E] hover:bg-[#3BB77E] hover:text-white duration-700 hover:-translate-y-1 px-3 py-2 rounded-md'>View <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter