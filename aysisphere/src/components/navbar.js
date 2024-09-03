import React from 'react'
import Logo from '../Assets/FULL-LOGO.png'

const navbar = () => {
  return (
    <div className='flex bg-black w-full items-center justify-between absolute p-[50px] pr-[70px] pl-[70px]'>
      <img className="bg-black w-52" src={Logo} alt="" />
    </div>
  )
}
export default navbar
