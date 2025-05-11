import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from '../components/LoadingPage'
import { GetProduct } from '../features/Products/ProductsSlice'
import { useParams } from 'react-router-dom'
import { Add } from '../features/Card/CardSlice'
import { toast } from 'react-toastify'

const ProductPage = () => {

    const {Product , isLoading , isError , message} = useSelector(state => state.Products)
    const dispatch = useDispatch()
    const {id} = useParams()

    const handleAddToCard = (Product) =>{ 
      toast.success("Item Addedd!!")
      dispatch(Add(Product))
    }

    useEffect(() =>{
if(isError || message){
    console.log("Product Not Found", message);
}

dispatch(GetProduct(id))
    },[])

    if(isLoading){
        <LoadingPage />
    }

  return (
    <div>
      <div className="flex items-center justify-center min-h-scree">
      <div className="flex items-center justify-center flex-col p-6 m-3 space-y-10 md:flex-row md:space-y-0 md:space-x-40 md:m-0 md:p-16">
      <img src={Product?.image} alt="" className='mx-auto duration-200 w-60 hover:scale-105' />
        <div className="flex flex-col space-y-6">
<div>
    <div className=" inline-block rounded-full bg-black text-[#EFDFBB] px-3 py-1 ">Free Shipping</div>
    </div>
<h1 className="text-2xl max-w-sm font-bold text-[#722F37] ">{Product.title}</h1>
<del className='text-[#722F37]' >${Product.price + 100}</del>
<h1 className="text-5xl font-bold text-[#722F37]">${Product.price}</h1>
<p className='text-gray-500 max-w-sm text-sm font-light' >{Product.description}</p>
<button onClick={() => handleAddToCard(Product)} className="px-6 py-3 w-full bg-[#722F37] text-white rounded-lg shadow-md hover:bg-[#5b242d] transition">Add To Cart</button>
<div className="flex items-center justify-between">
    <div className="flex items-center space-x-3 group">
        <div className="rounded-full bg-[#EFDFBB] w-5 h-5 group-hover:animate-ping "></div>
            <div className="text-sm">{Product?.rating?.count} pcs. in stock </div>
    </div>
    <div className="flex items-center space-x-2">
    <p>Rating : </p>
                  <svg
                    className="h-3 fill-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <p>{Product?.rating?.rate}</p>
    </div>
</div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default ProductPage
