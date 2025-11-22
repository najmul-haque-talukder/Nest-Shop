import React, { useEffect, useState } from 'react'
import ServicesCard from './AboutComponents/ServicesCard'
import HeadingSubheading from '../About/AboutComponents/HeadingSubheading'
import SectionCard from '../../Components/Shared/SectionCard'
import Banner from '../../Components/Shared/Banner'
import BannerImage from "/img/full-img-2.jpg"

const About = () => {

  const [sectionData, setSectionData] = useState([])
  const [heading, setHeading] = useState([])
  

  useEffect(()=>{
      fetch("aboutData.json")
      .then(res => res.json())
      .then(data => setSectionData(data))
  },[])

  useEffect(()=>{
      fetch("aboutHeading.json")
      .then(res => res.json())
      .then(data => setHeading(data))
  },[])

  

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="w-[90%] lg:w-[85%] mx-auto py-10 lg:py-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* LEFT IMAGE */}
    <div className="flex justify-center">
      <img 
        src="/img/about-1.png" 
        className="w-full max-w-[520px] rounded-xl object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="max-w-[600px]">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Welcome to Nest
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
      </p>

      <p className="text-gray-600 leading-relaxed mb-10">
        Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
      </p>

      {/* Bottom Slider images */}
      <div className="flex gap-4 overflow-auto">
        <img src="/img/about-2.png" className="w-32 h-32 object-cover rounded-xl" />
        <img src="/img/about-3.png" className="w-32 h-32 object-cover rounded-xl" />
        <img src="/img/about-4.png" className="w-32 h-32 object-cover rounded-xl" />
        <img src="/img/about-6.png" className="w-32 h-32 object-cover rounded-xl" />
      </div>

    </div>
  </div>
</section>


      {/* SECTION 2 */}
      <section className="pb-10">
        
        <div className="py-10 md:py-20 flex flex-col items-center">
          <p className="text-3xl md:text-4xl font-semibold">What We Provide?</p>
          <img src="/icon/imgi_55_wave.png" />
        </div>

        <div className="flex flex-wrap px-5 md:px-20 gap-5 md:gap-10 items-center justify-center">
          {sectionData.map((item, index)=>(
            <ServicesCard title={item.title} desc={item.desc} image={item.image} index={index} />
          ))}
        </div>

      </section>


      {/* SECTION 3 */}
      <section className="py-10 px-5 lg:px-30">
        
        <div className="flex flex-col lg:flex-row gap-10 pb-20">
          <img src="/img/about-5.png" className="w-full lg:w-150 rounded-lg" />

          <div className="px-2 lg:px-10 flex flex-col justify-between">
            <p className="text-xl md:text-2xl text-gray-500 font-semibold">Our performance</p>
            <p className="text-4xl md:text-5xl font-semibold leading-tight">
              Your Partner for E-commerce grocery solution
            </p>
            <p className="text-sm md:text-base text-gray-600">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              <br />
              <br />
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          {heading.map((item, index)=>(
            <HeadingSubheading index={index} headline={item.title} desc={item.desc} />
          ))}
        </div>

      </section>



      {/* SECTION 4 */}
      <section className="relative w-full my-10">
        <img className="absolute inset-0 w-full h-full object-cover rounded-md" src="/img/full-img.jpg"/>

        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-5 md:px-20 py-10 text-white text-center">
          
          <div>
            <p className="text-4xl md:text-6xl font-semibold">10+</p>
            <p className="text-lg md:text-2xl font-semibold">Glorious years</p>
          </div>

          <div>
            <p className="text-4xl md:text-6xl font-semibold">200+</p>
            <p className="text-lg md:text-2xl font-semibold">Happy clients</p>
          </div>

          <div>
            <p className="text-4xl md:text-6xl font-semibold">100+</p>
            <p className="text-lg md:text-2xl font-semibold">Projects complete</p>
          </div>

          <div className="hidden lg:block">
            <p className="text-6xl font-semibold">10+</p>
            <p className="text-2xl font-semibold">Team Advisor</p>
          </div>

          <div className="hidden lg:block">
            <p className="text-6xl font-semibold">100+</p>
            <p className="text-2xl font-semibold">Products Sale</p>
          </div>

        </div>
      </section>



      {/* SECTION 5 */}
      <section className="px-5 lg:px-30">
        
        <div className="py-10">
          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-4xl font-semibold">Our Team</p>
            <img src="/icon/imgi_55_wave.png" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 justify-between">

          <div className="lg:w-1/2">
            <p className="font-semibold text-xl md:text-2xl text-[#3bb77e]">Our Team</p>
            <p className="text-4xl md:text-6xl py-3 font-semibold">Meet Our Expert Team</p>
            <p className="text-sm text-gray-500 pb-10 leading-relaxed">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
              <br /><br />
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.


            </p>
            <p className="btn btn-accent w-max">View All Members</p>
          </div>

          <div className="flex flex-col md:flex-row gap-10">

            <div>
              <img src="/img/about-8.png" className="rounded-lg w-full md:w-220" />
              <div className="px-4 py-10 shadow-lg bg-white w-60 m-auto -translate-y-20 rounded-lg hover:shadow-xl duration-500 hover:scale-105 text-center">
                <p className="font-semibold text-2xl">H. Merinda</p>
                <p className="text-gray-500">CEO & Co-Founder</p>
                <div className="flex justify-center gap-3 pt-2">
                  <img className="w-5" src="/icon/facebook.svg" />
                  <img className="w-5" src="/icon/twitter.svg" />
                </div>
              </div>
            </div>

            <div>
              <img src="/img/about-6.png" className="rounded-lg w-full md:w-220" />
              <div className="px-4 py-10 shadow-lg bg-white w-60 m-auto -translate-y-20 rounded-lg hover:shadow-xl duration-500 hover:scale-105 text-center">
                <p className="font-semibold text-2xl">Dilan Specter</p>
                <p className="text-gray-500">Head Engineer</p>
                <div className="flex justify-center gap-3 pt-2">
                  <img className="w-5" src="/icon/facebook.svg" />
                  <img className="w-5" src="/icon/twitter.svg" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>



      {/* SECTION 6 */}
      <Banner />



      {/* Section Card */}
      <SectionCard />


    </div>
  )
}

export default About
