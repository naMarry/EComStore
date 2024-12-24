import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';
 
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);

        return response.data;
    } catch (error) {
        console.error('Errors fetching products: ', error);
        throw error;
    }
}

export const fetchProductsByID = async (productID) => {
    try {
        const response = await axios.get(`${API_URL}/products/${productID}`);
        return response.data;
    } catch (error) {
        console.error('Errors fetching products: ', error);
        throw error;
    }
}

export const getProductsCategory = async () => {
    try {
        const response = await axios.get(`${API_URL}/products/categories`);
        return response.data;
    } catch (error) {
        console.error('Errors fetching products: ', error);
        throw error;
    }
}
