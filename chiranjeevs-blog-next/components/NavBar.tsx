import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar=()=>{
  return (
    <nav className="flex justify-between" >
        
        <div>
        <Link href="/" >  
        <div className="flex items-center cursor-pointer mt-5">
          <Image alt="profile icon" src="/logo.png" width={60} height={80} />
            <span className=" font-bold ml-2 text-primary text-5xl mt-5 ml-2 font-extrabold pb-4 ">
              {"Chiranjeev's Blog"}
            </span>
          </div>
        </Link>
      </div>
      
        
      </nav>
  )
}

export default NavBar