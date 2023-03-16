import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar=()=>{
  return (
    <nav className="flex justify-between" >
        <Link href="/" className='className="flex items-center cursor-pointer mt-5' >  
        <div className='flex ' >
          <Image alt="profile icon" src="/github_image.png" width={90} height={90}
          className='md:ml-0 h-20 w-20 mt-6 md:h-32 md:w-32 md:mt-0'
          />
            <span className=" font-bold ml-2 text-primary text-5xl mt-5 ml-2 font-extrabold pb-4 ">
              {"> Existential Emptiness "}
            </span>
          </div>
         
        </Link>
      <ul className='flex items-end cursor-pointer mt-5 gap-1'>
            <li className='mr-6 font-medium text-gray-600'>
               <a href='#' className='hover:text-gray-400'>Login</a>
            </li>
            <li>
               <a href='#' className='bg-primary px-2 py-2 text-white rounded-sm hover:bg-primary-dark transition-all'>SignUp</a>
            </li>
       </ul>

      </nav>
  )
}

export default NavBar