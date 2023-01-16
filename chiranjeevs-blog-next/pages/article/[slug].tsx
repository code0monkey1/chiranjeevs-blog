import { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import qs from 'qs';
import React from 'react';
import { fetchArticleBySlug } from '../../api/index';
import { IArticle, ICollectionResponse } from '../../types';

function slug() {
  return (
    <div>slug</div>
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
  
}

export default slug