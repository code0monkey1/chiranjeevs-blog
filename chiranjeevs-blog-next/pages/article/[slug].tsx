import { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import qs from 'qs';
import React from 'react';
import { fetchArticleBySlug } from '../../api/index';
import Author from '../../components/Author';
import { IArticle, ICollectionResponse } from '../../types';
import { serializeMarkdown } from '../../utils';

 type TPropTypes={
  article:IArticle
  notFound?:boolean
}

const  Slug=({article,notFound=false}:TPropTypes) =>{

  const router= useRouter()
  
   if(notFound){
    setTimeout(()=>{
           router.back()
    },1000)

    return<>
     <h1 className="text-2xl my-12 text-center ">Blank Page , Redirecting Back to Home Page</h1>
    </>
   }
  
  return (<>
    <Head>
      <title>{article.attributes.Title}</title>
    
    </Head>
    <div className='grid lg:grid-cols-3 gap-12 my-12 '>
      <div className="col-span-2">
      <h1 className="text-3xl font-bold py-2 px-4">{article.attributes.Title}</h1>
      <Author article={article} />
      <div className="text-lg text-gray-600 leading-8 px-4 single-article">

            <Image  
            unoptimized={true}
            height={100}
            width={100} 
            className='w-full my-12 mb-6 h-auto rounded-lg ' alt={article.attributes.Title} src={`http://localhost:1337${article.attributes.Image.data[0].attributes.url}`}
             />
          
           <MDXRemote {...(article.attributes.Body as MDXRemoteSerializeResult)} />
      </div>
  
      </div>

      <div className=" col-span-1">
        Right
        </div>
        
     </div>
     </>
  )
}

export const getServerSideProps:GetServerSideProps = async ({query})=>{
  
    const queryString =qs.stringify({
     populate:['Image','author.avatar'],
     filters:{
      Slug:{
        $eq:query.slug
      }
     }
  })
  

  const {data:articles}: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticleBySlug(queryString)
  

  if(articles.data.length===0){
    return {
      props:{
       notFound:true
    }
    }
  }

  return {
    props:{
       article:await serializeMarkdown(articles.data[0])
    }
  }

}

export default Slug