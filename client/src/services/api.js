import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Auth endpoints
export const register = (userData) => API.post('/auth/register', userData);
export const login = (userData) => API.post('/auth/login', userData);

// Posts endpoints
export const getPosts = () => API.get('/posts');
export const createPost = (postData) => API.post('/posts', postData);

// Categories endpoints
export const getCategories = () => API.get('/categories');
export const createCategory = (categoryData) => API.post('/categories', categoryData);
