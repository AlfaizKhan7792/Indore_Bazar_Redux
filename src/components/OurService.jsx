import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { GetProducts } from '../features/Products/ProductsSlice'
import { useNavigate } from 'react-router-dom'
import LoadingPage from './LoadingPage'

const OurService = () => {

  const {Users} = useSelector(state => state.Auth)
  const {All_Products , isLoading , isError , isSuccess , message} = useSelector((state) => state.Products)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() =>{

    if(!Users){
      navigate("/login")
    }

    if(isError || message){
      console.log("Some Thing Went Wrong!!");
    }

dispatch(GetProducts())
  },[Users])

  if(isLoading){
  return <LoadingPage />
  }


  return (
    <>
     <h1 className='text-center text-3xl my-4 text-[#722F37] font-bold' >All Products</h1> 
     <div className="p-5 grid gap-4 lg:grid-cols-3 md:grid-cols-2 ">
{
  All_Products.map((Products) =>{
 return <ProductCard key={Products.id} Products={Products} />
  })
}

     </div>
    </>
  )
}

export default OurService
