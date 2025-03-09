import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProduct, fetchProducts } from "./ProductsService";

const ProductsSlice = createSlice({
    name : "Products",
    initialState : {
        All_Products : [],
        Product : {},
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : ""
    },
    reducers : {},
     extraReducers : (builder) =>{
        builder
        .addCase(GetProducts.pending , (state , action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = ""
        })
        .addCase(GetProducts.fulfilled , (state , action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.All_Products = action.payload
            state.isError = false
            state.message = ""
        })
        .addCase(GetProducts.rejected , (state , action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })

        .addCase(GetProduct.pending , (state , action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = ""
        })
        .addCase(GetProduct.fulfilled , (state , action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.Product = action.payload
            state.isError = false
            state.message = ""
        })
        .addCase(GetProduct.rejected , (state , action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
     }
})

export default ProductsSlice.reducer

// All Products Thunk
export const GetProducts = createAsyncThunk("FETCH/PRODUCTS", async (_, thunkAPI) =>{
    try {
        return await fetchProducts()
    } catch {
        const message = err.response.data.message
        thunkAPI.rejectWithValue(message)
    }
})


// Single Product Thunk
export const GetProduct = createAsyncThunk("FETCH/PRODUCT", async (id, thunkAPI) =>{
try {
    return await fetchProduct(id)
} catch (error) {
    const message = err.response.data.message
    thunkAPI.rejectWithValue(message)
}
})