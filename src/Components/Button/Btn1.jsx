import React, { useState } from 'react'

const Btn1 = ({children}) => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <button className='py-3 px-6 bg-blue-700 text-white text-xl font-bold rounded-sm mt-5' onClick={() => setCount((count) => count + 1)}>
          {children} {count}
        </button>
    </div>
  )
}

export default Btn1
