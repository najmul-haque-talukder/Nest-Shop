import React, { useState } from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div>

      {/* TOP NAV */}
      <div className="border-b border-gray-200">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-10 py-2 gap-2 lg:gap-0">

          <ul className="flex text-sm flex-wrap justify-center lg:justify-start">
            <li className="pr-4 border-r border-gray-200 text-gray-500">About Us</li>
            <li className="px-4 border-r border-gray-200 text-gray-500">My Account</li>
            <li className="px-4 border-r border-gray-200 text-gray-500">WishList</li>
            <li className="px-4 text-gray-500">Order Tracking</li>
          </ul>

          <p className="text-gray-500 text-center text-sm">
            Supper Value Deals - Save more with coupons
          </p>

          <ul className="flex items-center text-sm gap-4">
            <li className="border-r border-gray-200 pr-4 text-gray-500">
              Need help? Call Us:
              <span className="text-[#3BB77E] font-semibold"> + 1800 900</span>
            </li>

            <li>
              <select className="outline-none text-sm">
                <option value="USD">USD</option>
                <option>INR</option>
                <option>EU</option>
              </select>
            </li>
          </ul>
        </div>
      </div>

      {/* MIDDLE NAV */}
      <section>
        <div className="px-4 lg:px-10 py-4 lg:py-6 border-b border-gray-200">
          <div className="flex justify-between items-center flex-wrap gap-4">

            <img src="/src/assets/icon/logo.svg" className="w-32 md:w-40" />

            <div className="p-1 border border-green-600 rounded-md flex-grow max-w-xl hidden md:block">
              <div className="flex gap-2 items-center">
                <select className="outline-none rounded-md px-2 py-2 w-32 text-sm bg-white">
                  <option>All Categories</option>
                  <option>Milks and Dairies</option>
                  <option>Wines & Alcohol</option>
                  <option>Clothing & Beauty</option>
                  <option>Pet Foods & Toy</option>
                  <option>Fast food</option>
                  <option>Baking material</option>
                  <option>Vegetables</option>
                  <option>Fresh Seafood</option>
                  <option>Noodles & Rice</option>
                  <option>Ice cream</option>
                </select>

                <div className="text-gray-300 px-2">|</div>

                <input
                  type="text"
                  className="outline-none flex-grow text-sm"
                  placeholder="Search for items"
                />

                <img src="/src/assets/icon/search.png" className="w-8" />
              </div>
            </div>

            <div className="flex gap-2 items-center border border-gray-300 px-3 py-2 rounded-md shadow-lg hover:-translate-y-1 duration-700">
              <img src="/src/assets/icon/location.svg" className="w-4" />
              <select className="outline-none w-20 text-sm text-gray-500 bg-white">
                <option>Location</option>
                <option>Dhaka</option>
                <option>Cumilla</option>
                <option>Chandpur</option>
                <option>Chittagong</option>
                <option>Rangpur</option>
                <option>Rajsahi</option>
                <option>Khulna</option>
                <option>Barishal</option>
                <option>Maymensingh</option>
                <option>Sylhet</option>
                <option>Gazipur</option>
              </select>
            </div>

            <button
              className="lg:hidden bg-gray-100 px-3 py-2 rounded-md"
              onClick={() => setOpenMenu(!openMenu)}
            >
              ☰
            </button>

            <div className="hidden lg:flex gap-5">
              <div className="flex gap-2 items-center relative cursor-pointer">
                <img src="/src/assets/icon/compare.svg" />
                <p className="text-gray-500">Compare</p>
                <p className="text-white bg-green-700 rounded-full w-5 h-5 flex items-center justify-center text-[10px] absolute left-3 bottom-3">3</p>
              </div>

              <div className="flex gap-2 items-center relative cursor-pointer">
                <img src="/src/assets/icon/heart.svg" />
                <p className="text-gray-500">Wishlist</p>
                <p className="text-white bg-green-700 rounded-full w-5 h-5 flex items-center justify-center text-[10px] absolute left-4 bottom-3">6</p>
              </div>

              <div className="flex gap-2 items-center relative cursor-pointer">
                <img src="/src/assets/icon/cart.svg" />
                <p className="text-gray-500">Cart</p>
                <p className="text-white bg-green-700 rounded-full w-5 h-5 flex items-center justify-center text-[10px] absolute left-3 bottom-3">2</p>
              </div>

              <div className="flex gap-2 items-center cursor-pointer">
                <img src="/src/assets/icon/user.svg" />
                <p className="text-gray-500">Account</p>
              </div>
            </div>

          </div>

          {openMenu && (
            <div className="flex flex-col gap-3 mt-4 lg:hidden">
              <p>Compare</p>
              <p>Wishlist</p>
              <p>Cart</p>
              <p>Account</p>

              <div className="p-2 border rounded-md">
                <input type="text" className="outline-none w-full py-1" placeholder="Search..." />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* LOWER NAV */}
      <section>
        <div className="px-4 lg:px-10 py-3 flex-col lg:flex-row flex justify-between items-start lg:items-center border-b border-gray-200 gap-4">

          <div className="flex items-center gap-6 flex-wrap">

            <div className="bg-[#3bb77e] flex items-center px-3 py-2 gap-2 rounded-lg text-white cursor-pointer">
              Browse All Categories
              <i className="fa-solid fa-angle-down"></i>
            </div>

            <div className="flex gap-4 flex-wrap text-sm">

              <div className="flex gap-1 items-center">
                <img src="/src/assets/icon/hot.svg" className="w-5" />
                <p className="font-semibold cursor-pointer hover:text-[#3bb77e]">Deals</p>
              </div>

              <p className='font-semibold cursor-pointer hover:text-[#3bb77e] duration-1000'><NavLink to={"/"}>Home <i class="fa-solid fa-angle-down"></i></NavLink></p> 
              <p className='font-semibold cursor-pointer hover:text-[#3bb77e] duration-1000'><NavLink to={"/about"}>About</NavLink></p> 
              <p className='font-semibold cursor-pointer hover:text-[#3bb77e] duration-1000'><NavLink to={"/shop"}>Shop <i class="fa-solid fa-angle-down"></i></NavLink></p> 
              <p className='font-semibold cursor-pointer hover:text-[#3bb77e] duration-1000'><NavLink to={"/vendors"}>Vendors <i class="fa-solid fa-angle-down"></i></NavLink></p> 
              <p className='font-semibold cursor-pointer hover:text-[#3bb77e] duration-1000'><NavLink to={"/megamenu"}>Mega Menu <i class="fa-solid fa-angle-down"></i></NavLink></p> 
              <p className='font-semibold cursor-pointer hover:text-[#3bb77e] duration-1000'><NavLink to={"/blog"}>Blog <i class="fa-solid fa-angle-down"></i></NavLink></p> 
              <p className='font-semibold cursor-pointer hover:text-[#3bb77e] duration-1000'><NavLink to={"/pages"}>Pages <i class="fa-solid fa-angle-down"></i></NavLink></p> 
              <p className='font-semibold cursor-pointer hover:text-[#3bb77e] duration-1000'><NavLink to={"/contacts"}>Contacts</NavLink></p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <img src="/src/assets/icon/headpone.svg" className="w-10" />
            <div>
              <p className="text-2xl font-bold text-[#3bb77e]">1900 - 888</p>
              <p className="text-sm">24/7 Support Center</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Header
