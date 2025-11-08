import React from 'react'

const HeadingSubheading = ({ index, headline, desc }) => {
  return (
    <div>
        <div key={index}>
            <p className='text-3xl font-semibold pb-5'>{headline}</p>
            <p className='text-gray-600 text-sm'>{desc}</p>
        </div>
    </div>
  )
}

export default HeadingSubheading