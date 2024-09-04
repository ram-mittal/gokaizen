import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const socials = () => {
  return (
    <div>
      <div className='flex flex-col p-20'>
        <FontAwesomeIcon color='white' icon={faPen}/>
        <FontAwesomeIcon color="white" icon={faEnvelope}/>
      </div>
    </div>
  )
}

export default socials
