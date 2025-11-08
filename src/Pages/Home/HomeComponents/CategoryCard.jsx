import React from 'react'

const CategoryCard = ({img, title, item, id, color}) => {
  return (
    <div>
        <div key={id} className={`${color} p-2 rounded-lg border border-gray-100 hover:scale-101 hover:shadow-md duration-500` }>
            <img src={img} className='mx-auto' />
            <p className='font-semibold text-center'>{title}</p>
            <p className='text-sm text-gray-600 text-center'>{item} items</p>
        </div>
    </div>
  )
}

export default CategoryCard