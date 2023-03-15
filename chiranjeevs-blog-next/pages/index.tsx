import { AxiosResponse } from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import qs from 'qs';
import { fetchArticles, fetchCategories } from '../api';
import ArticleList from '../components/ArticleList';
import Pagination from '../components/Pagination';
import Tabs from '../components/Tabs';

import {
    IArticle,
    ICategory,
    ICollectionResponse,
    IPagination,
    IQueryOptions
} from '../types';
import { debounce } from '../utils';

interface IPropTypes {
    categories: {
        items: ICategory[];
    };
    articles: {
        items: IArticle[];
        pagination: IPagination;
    };
}

const Home: NextPage<IPropTypes> = ({ categories, articles }) => {
    const router = useRouter();

    const { page, pageCount } = articles.pagination;
    //      ^?  

    const handleSearch = (query: string) => {
        router.push(`/?search=${query}`);
                           
    };

    return (
        <div>
            <Head>
                <title>Chiranjeev's Blog Homepage</title>
                <meta
                    name="description"
                    content="Chiranjeev's Blog"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Tabs
                categories={categories.items}   
                handleOnSearch={debounce(handleSearch, 500)}
            />
            <ArticleList articles={articles.items} />            
            <Pagination page={page} pageCount={pageCount} />
        </div>             
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    
    // Articles
    const options: Partial<IQueryOptions> = {
        populate: ['author.avatar'],
        sort: ['id:desc'],
        pagination: {
            page: query.page ? +query.page : 1,
            pageSize:4
        },
    };

    if (query.search) {
        options.filters = {
            Title: {
                $containsi: query.search,
            },
        };
    }

    const queryString = qs.stringify(options);

    const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);                      

    // categories
    const {data: categories}:AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
    
    return {
        props: {
            categories: {
                items: categories.data,
            },
            articles: {
                items: articles.data,
                                //^?
                pagination: articles.meta.pagination,
                                         //^?
            },
        },
    };
};

export default Home;