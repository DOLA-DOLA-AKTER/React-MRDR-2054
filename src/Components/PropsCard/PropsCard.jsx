import React from 'react'
import Btn1 from '../Button/Btn1'

const PropsCard = ({ img, titleName, descText }) => {

  return (
    <div className="p-5 shadow-lg rounded hover:bg-gray-200 transition duration-300">
      <div className='w-55 h-55 m-5'>
        <img src={img} alt={titleName} className='w-full h-full'/>
      </div>
      <h2 className="text-xl font-semibold mt-2">{titleName}</h2>
      <p className="text-gray-500">{descText}</p>
      <Btn1>Book :</Btn1>
    </div>
  )
}

export default PropsCard