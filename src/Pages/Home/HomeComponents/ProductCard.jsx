
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({id, name, img, brand, price, oldPrice, rating , label, labelColor}) => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <div key={id} className='border border-gray-200 rounded-xl p-4 hover:scale-101 hover:shadow-lg hover:border-green-200 duration-500 cursor-pointer relative group'>
                        <div className='relative'>
                            <img src={img} />

                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-700'>
                            <div className='px-3 py-2 border border-green-600 bg-white text-green rounded-md text-center w-30 mx-auto'>
                                <div className='flex gap-3'>


                                    <div className='relative group/icon'>
                                        <i class="fa-solid fa-code-compare"></i>
                                        <p className='absolute bottom-9 right-2 opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible duration-300 bg-green-700 text-white text-[10px] px-2 py-1 rounded-md'>Compare</p>
                                    </div>

                                    <div className='relative group/icon2'>
                                        <i class="fa-regular fa-heart"></i>
                                        <p className='absolute bottom-9 left-2 w-23 opacity-0 invisible group-hover/icon2:opacity-100 group-hover/icon2:visible duration-300 bg-green-700 text-white text-[10px] px-2 py-1 rounded-md'>Add to wishlist</p>
                                    </div>
                                    

                                    <div className='relative group/icon3'>
                                        <i class="fa-regular fa-eye"></i>
                                        <p className='absolute w-18 bottom-9 left-2 opacity-0 invisible group-hover/icon3:opacity-100 group-hover/icon3:visible duration-300 bg-green-700 text-white text-[10px] px-2 py-1 rounded-md'>Quick View</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        </div>
                        <p className='text-lg font-semibold'>{name}</p>
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
                            <Link to={`/product/${id}`}><button className='bg-[#def9ec] text-sm text-[#3BB77E] hover:bg-[#3BB77E] hover:text-white duration-700 hover:-translate-y-1 px-3 py-2 rounded-md'>View <i class="fa-solid fa-cart-shopping"></i></button></Link>
                        </div>


                        <div className={`${labelColor} px-2 py-1 rounded-br-xl rounded-tl-xl w-20 absolute top-0 left-0`}>
                            <p className='text-white text-center text-[12px]'>{label}</p>
                        </div>


                        {/* hover-group-div */}
                        {/* <div className='absolute top-30 right-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-700'>
                            <div className='px-3 py-2 border border-green-600 bg-white text-green rounded-md text-center w-30 mx-auto'>
                                <div className='flex gap-3'>


                                    <div className='relative group/icon'>
                                        <i class="fa-solid fa-code-compare"></i>
                                        <p className='absolute bottom-9 right-2 opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible duration-300 bg-green-700 text-white text-[10px] px-2 py-1 rounded-md'>Compare</p>
                                    </div>

                                    <div className='relative group/icon2'>
                                        <i class="fa-regular fa-heart"></i>
                                        <p className='absolute bottom-9 left-2 w-23 opacity-0 invisible group-hover/icon2:opacity-100 group-hover/icon2:visible duration-300 bg-green-700 text-white text-[10px] px-2 py-1 rounded-md'>Add to wishlist</p>
                                    </div>
                                    

                                    <div className='relative group/icon3'>
                                        <i class="fa-regular fa-eye"></i>
                                        <p className='absolute w-18 bottom-9 left-2 opacity-0 invisible group-hover/icon3:opacity-100 group-hover/icon3:visible duration-300 bg-green-700 text-white text-[10px] px-2 py-1 rounded-md'>Quick View</p>
                                    </div>
                                </div>


                            </div>
                        </div> */}
                    </div>

                    
                </div>

                

            </div>
        </div>
    </div>
  )
}

export default ProductCard