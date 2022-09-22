import axios from 'axios';

const PRODUCT_API = "http://localhost:8080/api/v1/products";

class ProductService{
    getProducts(){
        return axios.get(PRODUCT_API)
    }

    createProduct(product){
        return axios.post(PRODUCT_API, product)
    }

    getProductById(productId){
        return axios.get(PRODUCT_API + '/' + productId)
    }

    updateProduct(product, productId){
        return axios.put(PRODUCT_API + '/' + productId, product)

    }
}

export default new ProductService()