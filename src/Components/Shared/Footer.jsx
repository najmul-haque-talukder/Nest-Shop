import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="px-5 md:px-10">

        {/* TOP GRID */}
        <div className="border-b border-gray-300 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

          <div>
            <img src="/icon/logo.svg" className="pb-5" />
            <p className="pb-5">Awesome grocery store website template</p>
            <ul className="space-y-1 text-sm">
              <li><span className="font-semibold">Address:</span> 5171 W Campbell Ave undefined Kent,<br /> Utah 53127 United States</li>
              <li><span className="font-semibold">Call Us:</span> (+91) - 540-025-124553</li>
              <li><span className="font-semibold">Email:</span> sale@Nest.com</li>
              <li><span className="font-semibold">Hours:</span> 10:00 - 18:00, Mon - Sat</li>
            </ul>
          </div>

          <div>
            <p className="text-2xl py-3 font-semibold">Company</p>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Delivery information</li>
              <li>Privecy Policy</li>
              <li>Terms & Condition</li>
              <li>Contact Us</li>
              <li>Soupport Center</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <p className="text-2xl py-3 font-semibold">Account</p>
            <ul className="space-y-1 text-sm">
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Track my Order</li>
              <li>Helo Ticket</li>
              <li>Shipping Details</li>
              <li>Compare Product</li>
            </ul>
          </div>

          <div>
            <p className="text-2xl py-3 font-semibold">Corporate</p>
            <ul className="space-y-1 text-sm">
              <li>Become a Vendor</li>
              <li>Affiliate Progrrame</li>
              <li>Farm Busisness</li>
              <li>Farm Careers</li>
              <li>Our Suppliers</li>
              <li>Accessibility</li>
              <li>Promotions</li>
            </ul>
          </div>

          <div>
            <p className="text-2xl py-3 font-semibold">Popular</p>
            <ul className="space-y-1 text-sm">
              <li>Milk & Flevoured Milk</li>
              <li>Butter & Margine</li>
              <li>Egg Sustitute</li>
              <li>Marmalides</li>
              <li>Sour Creame & Deeps</li>
              <li>Tea & Kombucha</li>
              <li>Cheese</li>
            </ul>
          </div>

          <div>
            <p className="text-2xl py-3 font-semibold">Install App</p>
            <p className="text-sm">From App Store or Google Play</p>

            <div className="flex gap-2 py-5">
              <img className="w-24" src="/img/apple-store.jpg" />
              <img className="w-24" src="/img/play-store.jpg" />
            </div>

            <p className="text-sm">Secured Payment Gateways</p>
            <img className="py-5" src="/img/payment.png" />
          </div>

        </div>
      </div>

      {/* BOTTOM AREA */}
      <div className="px-5 md:px-10 py-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

        <div>
          <p className="text-gray-500 text-sm">© 2024, Nest - HTML Ecommerce Template</p>
          <p className="text-gray-500 text-sm">All rights reserved</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5">

          <div className="flex gap-3 items-center">
            <img src="/icon/call.svg" className="w-10" />
            <div>
              <p className="text-[#3BB77E] text-2xl font-bold">1900 - 6666</p>
              <p className="text-sm text-gray-500">Working 8:00 - 22:00</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <img src="/icon/call.svg" className="w-10" />
            <div>
              <p className="text-[#3BB77E] text-2xl font-bold">1900 - 8888</p>
              <p className="text-sm text-gray-500">24/7 Support Center</p>
            </div>
          </div>
        </div>

        <div>
          <ul className="flex gap-2 items-center">
            <li className="font-semibold text-sm">Follow Us:</li>
            <li><img src="/icon/facebook-white.svg" className="w-8 hover:-translate-y-2 duration-700 bg-[#3BB77E] rounded-full p-2" /></li>
            <li><img src="/icon/instragram-white.svg" className="w-8 hover:-translate-y-2 duration-700 bg-[#3BB77E] rounded-full p-2" /></li>
            <li><img src="/icon/twieeter-white.svg" className="w-8 hover:-translate-y-2 duration-700 bg-[#3BB77E] rounded-full p-2" /></li>
            <li><img src="/icon/youtube-white.svg" className="w-8 hover:-translate-y-2 duration-700 bg-[#3BB77E] rounded-full p-2" /></li>
            <li><img src="/icon/pinterest-white.svg" className="w-8 hover:-translate-y-2 duration-700 bg-[#3BB77E] rounded-full p-2" /></li>
          </ul>

          <p className="text-sm text-gray-500 text-center mt-2">
            Up to 15% discount on your first subscribe
          </p>
        </div>

      </div>
    </div>
  )
}

export default Footer
