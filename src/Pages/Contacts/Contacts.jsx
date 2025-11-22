import React from 'react'
import { GoogleMap } from './ContactsComponent/GoogleMap'
import Banner from '../../Components/Shared/Banner'
import SectionCard from '../../Components/Shared/SectionCard'

const Contacts = () => {
  return (
    <div>
      <div>
        <div>

          <section>
            <div>
              <div className='flex flex-col lg:flex-row px-5 md:px-20 lg:px-40 gap-10 items-start lg:items-end py-10 lg:py-20'>

                <div>
                  <p className='text-[#3bb77e] font-semibold text-xl md:text-2xl py-2'>How can help you ?</p>
                  <p className='font-semibold text-3xl md:text-4xl lg:text-5xl py-2'>
                    Let us know how <br /> we can help you
                  </p>
                  <p className='text-gray-500 py-2 text-sm md:text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. 
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                </div>

                <div className='flex flex-col gap-5'>
                  <div>
                    <p className='font-semibold text-lg md:text-xl py-2'>01. Visit Feedback</p>
                    <p className='text-gray-500 text-sm md:text-base'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                  </div>

                  <div>
                    <p className='font-semibold text-lg md:text-xl py-2'>03. Billing Inquiries</p>
                    <p className='text-gray-500 text-sm md:text-base'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                  </div>
                </div>

                <div className='flex flex-col gap-5'>
                  <div>
                    <p className='font-semibold text-lg md:text-xl py-2'>02. Employer Services</p>
                    <p className='text-gray-500 text-sm md:text-base'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                  </div>

                  <div>
                    <p className='font-semibold text-lg md:text-xl py-2'>04. General Inquiries</p>
                    <p className='text-gray-500 text-sm md:text-base'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section>
            <div className='px-5 md:px-10 lg:px-20 rounded-lg'>
              <GoogleMap />
            </div>
          </section>


          <section className='px-5 md:px-20 lg:px-50 py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

              <div>
                <p className='font-semibold text-[#3bb77e] text-xl py-3'>Office</p>
                <ul className='text-gray-600 space-y-1'>
                  <li>205 North Michigan Avenue, Suite 810</li>
                  <li>Chicago, 60601, USA</li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Email: contact@Evara.com</li>
                </ul>
                
                <div className='py-5'>
                  <div className='flex gap-2 bg-[#3bb77e] items-center px-3 py-2 rounded-md w-fit justify-center hover:bg-amber-400 hover:-translate-y-1 duration-700'>
                    <i className="fa-solid fa-location-dot text-white"></i>
                    <p className='text-white'>View Map</p>
                  </div>
                </div>
              </div>

              <div>
                <p className='font-semibold text-[#3bb77e] text-xl py-3'>Studio</p>
                <ul className='text-gray-600 space-y-1'>
                  <li>205 North Michigan Avenue, Suite 810</li>
                  <li>Chicago, 60601, USA</li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Email: contact@Evara.com</li>
                </ul>

                <div className='py-5'>
                  <div className='flex gap-2 bg-[#3bb77e] items-center px-3 py-2 rounded-md w-fit justify-center hover:bg-amber-400 hover:-translate-y-1 duration-700'>
                    <i className="fa-solid fa-location-dot text-white"></i>
                    <p className='text-white'>View Map</p>
                  </div>
                </div>
              </div>

              <div>
                <p className='font-semibold text-[#3bb77e] text-xl py-3'>Shop</p>
                <ul className='text-gray-600 space-y-1'>
                  <li>205 North Michigan Avenue, Suite 810</li>
                  <li>Chicago, 60601, USA</li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Email: contact@Evara.com</li>
                </ul>

                <div className='py-5'>
                  <div className='flex gap-2 bg-[#3bb77e] items-center px-3 py-2 rounded-md w-fit justify-center hover:bg-amber-400 hover:-translate-y-1 duration-700'>
                    <i className="fa-solid fa-location-dot text-white"></i>
                    <p className='text-white'>View Map</p>
                  </div>
                </div>
              </div>

            </div>
          </section>


          <section className='px-5 md:px-20 lg:px-50 pb-10'>
            <div>
              <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-10'>

                <div className='w-full'>
                  <p className='text-xl font-semibold text-[#3bb77e]'>Contact form</p>
                  <p className='text-2xl md:text-3xl font-bold'>Drop Us a Line</p>
                  <p className='text-sm text-gray-500'>
                    Your email address will not be published. Required fields are marked *
                  </p>

                  <div className='py-10'>
                    <div className='flex flex-col md:flex-row gap-4 py-5'>
                      <input type="text" placeholder='Enter your Name' className='input h-12 w-full' />
                      <input type="password" placeholder='Your Password' className='input h-12 w-full' />
                    </div>

                    <div className='flex flex-col md:flex-row gap-4 pb-5'>
                      <input type="text" placeholder='Your Phone' className='input h-12 w-full' />
                      <input type="text" placeholder='Subject' className='input h-12 w-full' />
                    </div>

                    <textarea className="textarea w-full h-40" placeholder="Message"></textarea>
                  </div>

                  <p className='btn btn-neutral'>Send Message</p>
                </div>

                <img 
                  src="/ContactPage/contacts-page.png" 
                  className='rounded-xl w-full lg:w-100'
                />
              </div>
            </div>
          </section>

          <Banner />
          <SectionCard />

        </div>
      </div>
    </div>
  )
}

export default Contacts
