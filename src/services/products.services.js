// 2 step
import axios from "axios"

class ProductServices {
    constructor() {
        this.baseUrl = 'https://dummyjson.com'
        this.api = axios.create({
            baseURL: this.baseUrl,
            headers: {
                "Content-type": "application/json",
                "Accept": 'application/json'
            }
        })
    }

    async request(url, method = 'GET', body = null) {
        try {
            const response = await this.api({
                baseURL: url,
                method,
                data: body
            })
            return response
        } catch (error) {
            // console.log(error)
            throw new Error(error)
        }
    }

    // get-all-products

    async getAllProducts() {
        return this.request(`${this.baseUrl}/products`, 'GET')
    }
}

const productServices = new ProductServices()
export default productServices