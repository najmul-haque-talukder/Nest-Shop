import React from 'react'

const Banner = () => {
  return (
    <div>
        <div>
            <div>
                <section className="px-5 py-10">
                    <div className="relative w-full h-auto rounded-xl overflow-hidden">
                    
                    <img 
                        src="/img/full-img-2.jpg" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="relative z-10 flex flex-col justify-center text-center md:text-left px-5 md:px-10 lg:px-20 py-20">

                        <p className="font-semibold text-xl md:text-3xl lg:text-4xl text-black leading-tight">
                        Stay home & get your daily <br/> needs from our shop
                        </p>

                        <p className="py-5 text-black text-sm md:text-base">
                        Start Your Daily Shopping with <span className="font-semibold text-[#00a357]">Nest Mart</span>
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="flex items-center bg-white px-5 py-3 rounded-full w-full md:w-auto">
                            <img src="/icon/plane.png" className="w-5 h-5" />
                            <input
                            type="text"
                            placeholder="Your Email Address.."
                            className="outline-none ml-3 py-3 w-full md:w-[300px]"
                            />
                        </div>

                        <button className="bg-[#238155] text-white px-10 py-3 -translate-x-20 md:py-6 rounded-full">
                            Subscribe
                        </button>
                        </div>

                    </div>
                    
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Banner