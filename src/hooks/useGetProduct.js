import { useEffect, useState } from "react"
import productServices from "../../../material-ui/src/services/products.services"

export const useGetAllProduct = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoading(true)
        setError(null)
        const getAllProduct = async () => {
            try {
                const getData = await productServices.getAllProducts()
                setProducts(getData.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        getAllProduct()
    }, [])
    return { products, error, loading }
}