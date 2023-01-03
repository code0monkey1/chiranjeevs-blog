import axios from 'axios';


const api = axios.create({
    baseURL:process.env.API_BASE_URL,
    headers: {
      Authorization: 'Bearer ' +`${process.env.TOKEN}`
    }
})


//categories

export const fetchCategories = async () =>  api.get('/api/categories')


//articles

export const fetchArticles = async () => api.get('/api/articles')