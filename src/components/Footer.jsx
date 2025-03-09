import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/inodre.png"

const Footer = () => {
const navigate = useNavigate()
  const {Users} = useSelector((state) => state.Auth)

  useEffect(() =>{
    if(!Users){
     navigate("/login")
        }
  },[Users])

  return (

    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Website Logo & Name */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo}   alt="Indore_Bazar Logo" className="w-32 bg-white rounded-full mb-2 " />
          <h2 className="text-xl font-bold">Indore_Bazar</h2>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm text-gray-400">
            Indore_Bazar is your one-stop destination for all your shopping needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Shop</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} Indore_Bazar. All rights reserved.
      </div>
    </footer>


  )
}

export default Footer