import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IArticle } from '../types'

interface IPropType{
  article:IArticle
}
const BlogCard = ({article}:IPropType) => {
  return (
    <div>
      <Link href={`article/${article.attributes.Slug}`}>
        <div className="flex justify-start mr-4">
          {/* <Image alt="profilePic" src={article.attributes.Image.data.attributes.url}/> */}
          <h1 className="text-xl text-gray-600  font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
            {article.attributes.Title}
          </h1>
        </div>
      </Link>

    </div>
  )
}

export default BlogCard