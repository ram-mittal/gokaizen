import React from 'react'
import Logo from '../Assets/FULL-LOGO.png'
// import Button from '../components/button'

const navbar = () => {
  return (
    <div className='flex bg-transparent w-full items-center justify-between absolute p-[50px] pr-[70px] pl-[70px] ml-200px'>
      <img className="bg-transparent w-52" src={Logo} alt="" />

      {/* <form className='flex border border-gray-500 gap-3 rounded-md p-2'>
        <input type='text' placeholder='Enter your Email'className='bg-transparent' ></input>
        <Button text="Get Notify"/>
      </form> */}
    </div>
  )
}
export default navbar
