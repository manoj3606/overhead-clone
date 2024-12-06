import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({image,title,description,path}) => {
  return (
    <div>
    
        <div >
            <img src={image} alt="image" className=' object-contain border-4 border-[#e89350] mb-4' />
            <h2 className='text-xl font-base'>{title}</h2>
            <p>{description}</p>
        </div>
        <div className='mt-4'>
            <Link to={path} className='px-3 py-1 text-white bg-[#e89350] rounded-sm'>Read more..</Link>
        </div>
    </div>
  )
}

export default Card