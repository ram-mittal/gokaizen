import React from 'react'

const button = (pros) => {
  return (
    <div>
      <button className='rounded-lg bg-blak border-white border-2 w-fit h-[35px] font-bold text-center text-white p-[5px]'>
        {pros.text}
      </button>
    </div>
  )
}

export default button
