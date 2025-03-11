import axios from "axios"

const API_URL = "https://authentication-api-qtax.onrender.com/api/user";

export const Login = async (formData) =>{
    try {
      const response = await axios.post(API_URL + "/login", formData);
      // const response = await axios.post("/api/user/login", formData);
    localStorage.setItem("Auth", JSON.stringify(response.data))
    return response.data
    } catch (error) {
        console.log(error);
    }
}

export const Register = async (formData) =>{
  try {
    const response = await axios.post(API_URL + "/register", formData);
    // const response = await axios.post("/api/user/register", formData);
    localStorage.setItem("Auth", JSON.stringify(response.data))
    return response.data
  } catch (error) {
    console.log(error);
  }
}