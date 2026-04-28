import React from 'react'

const Hoc = ({Wraaper, user = null}) => {

    if(user) {
        return <Wraaper/>
    }
    
  return (
    <div className='my-30'>
      <h1 className='text-3xl p-2.5'>This is Higher Order Components</h1>
    </div>
  )
}

export default Hoc
