import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Add } from '../features/Card/CardSlice'
import { toast } from 'react-toastify'

const ProductCard = ({Products}) => {

  const dispatch = useDispatch()

    const handleAddToCard = (Products) =>{
      toast.success("Item Added!!")
      dispatch(Add(Products))
    }

  return (
    <>
     <div className="flex border items-center justify-ceter flex-col space-y-4 p-5 rounded-md bg-white border-[#722F37] shadow-md">
    <img src={Products?.image} alt="" className='h-52 hover:scale-110 duration-200' />
    <h1 className=' my-1 text-xl font-bold text-[#722F37]' >{Products?.title}</h1>
    <h2 className='my-1 text-xl font-bold' >Price : <span className=' my-1 text-xl font-bold text-[#722F37]' >{(Products?.price*10).toFixed(2)}</span></h2>
    <h3 className='font-semibold my-1' >
    <p className='flex items-center gap-2' >Rating :  <svg
              className="h-3 fill-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg> <span className='font-bold text-[#722F37]' >{Products?.rating?.rate}</span></p>
    </h3>
   <span className='flex flex-col space-y-5 w-full' >
   <button onClick={() => handleAddToCard(Products)} className="px-6 py-3 w-full bg-[#722F37] text-white rounded-lg shadow-md hover:bg-[#5b242d] transition">Add To Card</button>
   <Link to={`product/${Products?.id}`} >
    <button className="px-6 py-3 bg-[#722F37] w-full text-white rounded-lg shadow-md hover:bg-[#5b242d] transition">View Product</button>
    </Link>
   </span>
    </div> 
    </>
  )
}

export default ProductCard
