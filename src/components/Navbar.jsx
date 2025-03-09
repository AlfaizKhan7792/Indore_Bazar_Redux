import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiMenu, FiX } from "react-icons/fi";
import { LogoutUser } from '../features/Auth/AuthSlice';
import { Link } from 'react-router-dom';
import logo from "../assets/inodre.png"

const Navbar = () => {
  const { Users } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleExit = () => {
    dispatch(LogoutUser());
  };

  return (
    <nav className="bg-[#722F37] text-[#EFDFBB] shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Side - Brand Name */}
          <div className="text-2xl font-bold"><Link to="/">
          <div className=' flex items-center justify-center ' >
          <img src={logo} 
          className='w-28 rounded-lg' alt="" />
<span className='text-[#ecdab0]'>Indore_Bazar</span>
          </div>
        </Link></div>

          {/* Right Side - User Info & Logout */}
          <div className="hidden md:flex space-x-6 items-center">
            <span className="text-lg">{Users ? `Hello _${Users?.name}` : " "}</span>
            {!Users ? (
              <>
                <Link
                  to="/login"
                  className="bg-[#EFDFBB] text-[#722F37] px-4 py-2 rounded-md font-semibold hover:bg-[#E5C89D]"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-[#EFDFBB] text-[#722F37] px-4 py-2 rounded-md font-semibold hover:bg-[#E5C89D]"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                type="submit"
                onClick={handleExit}
                className="bg-[#EFDFBB] text-[#722F37] px-4 py-2 rounded-md font-semibold hover:bg-[#E5C89D]"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col items-center space-y-4 bg-[#722F37] py-4">
            <span className="text-lg">{Users ? `Hello _${Users?.name}` : " "}</span>
            {!Users ? (
              <>
                <Link
                  to="/login"
                  className="bg-[#EFDFBB] text-[#722F37] px-4 py-2 rounded-md font-semibold hover:bg-[#E5C89D]"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-[#EFDFBB] text-[#722F37] px-4 py-2 rounded-md font-semibold hover:bg-[#E5C89D]"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                type="submit"
                onClick={handleExit}
                className="bg-[#EFDFBB] text-[#722F37] px-4 py-2 rounded-md font-semibold hover:bg-[#E5C89D]"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
