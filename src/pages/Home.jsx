import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import OurService from '../components/OurService'
import LoadingPage from '../components/LoadingPage'
import CardButton from '../components/CardButton'

const Home = () => {

  const {Users , isLoading} = useSelector((state) => state.Auth)
  const navigate = useNavigate()

  useEffect(() =>{
    if(!Users){
     navigate("/login")
    }else{
      navigate("/")
    }
  },[Users])

  if(isLoading){
    return <LoadingPage />
  }

  return (
    <>
     
    <div className='bg-[#EFDFBB] p-6' >
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center border-b-black border-b-2 shadow-lg bg-[#EFDFBB]">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left p-6">
        <h1 className="text-4xl font-bold text-[#722F37]">Welcome to Our Website</h1>
        <h2 className="text-2xl font-semibold text-[#722F37] mt-2">Your Journey Starts Here</h2>
        <p className="text-gray-700 mt-4">
          Discover amazing experiences and explore new opportunities with us. We
          are here to make your journey exciting and memorable.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#722F37] text-white rounded-lg shadow-md hover:bg-[#5b242d] transition">
          Get Started
        </button>
      </div>
      
      {/* Right Section (Image) */}
      <div className="md:w-1/2 flex justify-center p-6">
        <img
          src="https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg" 
          alt="Hero"
          className="w-full max-w-sm rounded-lg shadow-lg hover:scale-150 duration-500"
        />
      </div>
    </div>

    {/* Products Section */}
    <OurService />
    </div>

    <CardButton />

    </>
  )
}

export default Home
