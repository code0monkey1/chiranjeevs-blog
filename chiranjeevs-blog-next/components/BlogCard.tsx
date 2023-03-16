import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IArticle } from '../types'
import { formatDate } from '../utils'
interface IPropType{
  article:IArticle
}
const BlogCard = ({article}:IPropType) => {

   console.log("attributes",JSON.stringify(article.attributes,null,2))
   
  return (
    <div>
      <Link href="#"  > 
         
          <h1 className="mx-4 my-4 text-xl text-gray-600  font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
            {article.attributes.Title}
          </h1>
        
      </Link>

       <div className="flex items-center">
         
          <div className="mx-4 rounded-lg overflow-hidden flex items-center justify-center">

              <Image
              alt="profile_image"
              // unoptimized={true}
              // loader={
              //   ()=>`${process.env.API_BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`
              // }
                        src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                        height={40}
                        width={40}
                    />
          </div>

          <div className="text-sm  font-bold text-gray-600 mx-4">
                {
                  article.attributes.author.data.attributes.firstname
                }
                {" "}
                {
                  article.attributes.author.data.attributes.lastname
                } 
            
            
          </div>
          
          <div className="text-sm  font-bold text-gray-400">
             
               {
                formatDate(article.attributes.createdAt)
               }
          </div>


       </div>
       <div className="text-gray-500  flex items-center mx-4 my-4 ">
          {article.attributes.shortDescription.slice(0,250)}{article.attributes.shortDescription.length>250?"...":''}
       
       </div>
    </div>
  )
}

export default BlogCard