import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar=()=>{
  return (
    <nav className="flex justify-between " >
        
        <div>
        <Link href="/" >  
        <div className="flex items-center cursor-pointer mt-5">
          <Image alt="profile icon" src="/github_image.png" width={100} height={100} />
            <h1 className="font-bold ml-2 text-primary-dark text-5xl mt-5 ml-2 font-extrabold">
              {"Chiranjeev's Blog"}
            </h1>
          </div>
        </Link>
      </div>
      
        
      </nav>
  )
}

export default NavBar