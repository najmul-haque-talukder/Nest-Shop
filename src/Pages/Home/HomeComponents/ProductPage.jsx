import React from 'react'
import { useLoaderData } from 'react-router'

const ProductPage = () => {

    const product = useLoaderData()
  return (
    <div className='px-20 py-10'>
        <div>
            <div>
                {
                    <div className='grid grid-cols-3 gap-10'>
                        <section>
                            <img src={product.image1} className='w-130 border border-gray-200 rounded-xl' />
                        </section>


                        <section>
                            <p className='bg-red-100 text-red-600 font-semibold text-[12px] w-20 text-center rounded-md py-1'>Sale Off</p>
                            <p className='font-bold text-4xl py-2'>{product.name}</p>

                            <div className='flex gap-3 items-center py-2'>
                                <div className='text-yellow-400 text-[12px]'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>

                                <p className='text-gray-500 text-sm'>( {product.rating} Rateing)</p>
                            </div>

                            <div className='flex gap-3 py-3'>
                                <p className='font-black text-5xl text-[#3BB77E]'>{product.price}$</p>
                                <div>
                                    <p className='text-sm text-yellow-400'>{product.label}</p>
                                    <p className='text-gray-500 line-through font-semibold'>{product.oldPrice}</p>
                                </div>
                            </div>


                            <p className='py-5 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.</p>
                        </section>



                        <section>

                        </section>
                    </div>
                }
            </div>
        </div>

    </div>
  )
}

export default ProductPage