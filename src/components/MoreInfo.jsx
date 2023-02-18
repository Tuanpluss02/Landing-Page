import React from 'react'
// import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { portfolio } from '../constants'
const MoreInfo = () => {
  return (
    // button click to open portfolio link
    <div>
        <button type="button" className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none">
          More Info
        </button>
      {/* </Link> */}
    </div>
  )
}

export default MoreInfo