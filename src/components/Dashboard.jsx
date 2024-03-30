// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import {Link} from 'react-router-dom'


export default function Dashboard () {
    return  <div className='ml-[80px] mt-[40px] h-screen'>
                <div className='font-poppins font-semibold text-[35px]'>
                Dashboard 
                </div>
              <p className='font-poppins'>this is dashboard</p><Link to="/Expenses"> </Link>
        
            </div>
    
}
 