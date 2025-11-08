import React, {useState, useEffect} from 'react'

const SectionCard = () => {

  const [section, setSection] = useState([])


  useEffect(()=>{
      fetch("aboutSection.json")
      .then(res => res.json())
      .then(data => setSection(data))
  },[])

  return (

    <div className='pb-20'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 px-5 md:px-10 items-center justify-center'>
        {
          section.map((item, index)=>(
            <div className='bg-gray-100 p-5 rounded-lg'>
              <div className='flex items-center gap-3' key={index}>
                  <img src={item.img} />

                  <div>
                      <p className='font-semibold text-lg'>{item.title}</p>
                      <p>{item.desc}</p>
                  </div>
              </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default SectionCard