import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons' 

const socials = () => {
  return (
    <div>
      <div className='flex flex-col p-20 gap-10'>
        <FontAwesomeIcon color='white' icon={faFacebookF}/>
        <FontAwesomeIcon color="white" icon={faInstagram}/>
        <FontAwesomeIcon color="white" icon={faXTwitter}/>
        <FontAwesomeIcon color="white" icon={faLinkedinIn}/>
      </div>
    </div>
  )
}
export default socials
