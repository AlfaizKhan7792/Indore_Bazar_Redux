import axios from "axios";

export const fetchProducts = async () =>{
    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        localStorage.getItem(JSON.stringify(response.data))
        return response.data
    } catch (error) {
        console.log("Products Not Yet!!", error);
    }
}


export const fetchProduct = async (id) =>{
    try {
        const response = await axios.get("https://fakestoreapi.com/products/" + id)
        // localStorage.setItem(JSON.stringify(response.data))
        return response.data
    } catch (error) {
        console.log("Product Not Yet!", error);
    }
}