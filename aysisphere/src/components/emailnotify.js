import React from 'react'

function emailnotify() {
  return (
    <div>
      <div className='relative flex bottom-[200px] items-center justify-center text-center'>
        <form>
          <p className="text-white tracking-[2px]"> Subscribe Us To Get Instant Notification</p>
          <div className='flex w-fit p-2 m-4 sm:gap-[50px] gap-[20px] rounded-md'>          
            <input type="text" placeholder='Email' className='border-1 rounded-md bg-transparent text-white sm:w-[350px] w-[250px] text-[20px] p-2 focus:outline-none focus:border-none' >
            </input>
            <button className='sm:w-[150px] w-[100px] h-fit p-2 rounded-[10px] bg-[#a94ffd] text-[20px]'>
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default emailnotify
