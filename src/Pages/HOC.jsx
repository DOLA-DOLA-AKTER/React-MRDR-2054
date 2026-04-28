import React from 'react'
import Hoc from '../Components/Hoc/Hoc'
import card from '../Components/Hoc/card'

const HOC = () => {
  return (
    <div className='flex items-center justify-center'>
      <Hoc Wraaper={card} user="Dola"/>
    </div>
  )
}

export default HOC
