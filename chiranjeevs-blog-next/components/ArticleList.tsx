import React from 'react';
import { IArticle } from '../types';
import BlogCard from './BlogCard';

interface IPropType{
  articles: IArticle[];
}

const ArticleList = ({articles}:IPropType) => {
  return (
    <div className="grid lg:grid-cols-2 gap-16 mt-16 ">

      {
        articles.map(article =><BlogCard key={article.id} article={article}/>)
        }
      
    </div>
  )
}

export default ArticleList