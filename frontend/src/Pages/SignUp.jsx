import { Link,useNavigate } from "react-router-dom" 

import { useState } from "react"
import axios from "axios"
import Oauth from "../Components/Oauth"



const SignUp = () => {
  const navigate = useNavigate()

  //const url = 'http://localhost:8000'
  //const url = process.env.REACT_APP_base_URL
  const url = import.meta.env.VITE_REACT_APP_base_URL
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)

  const [formData, setformData] = useState({
    username: '',
    email:'',
    password:'' 
  })

  const handleChange = (e) =>{
      setformData(
        {...formData,
        [e.target.id] : e.target.value
  })
  } 

  const register = async(e) =>{

    try {
       e.preventDefault()
    setIsLoading(true)
 const response =  await axios.post(`${url}/auth/signup`, formData)
 setIsLoading(false)
 setError(null)
    alert(`Registration Successful`)
    navigate('/')
    console.log(response.data);
 
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(error.response.data.message);
        setIsLoading(false)
      } else {
        setError('An unexpected error occurred.');
      }
      setIsLoading(false)
    }
   } 


  return (
    <div>
        <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
        <form className="flex flex-col gap-4 w-[90%] sm:w-[50%]  mx-auto" onSubmit={register}>
          <input type="text"  id="username"   value={formData.username} onChange = {handleChange} placeholder="Username" className="border p-3 rounded-lg" required/>
          <input type="email"  id="email" value={formData.email} onChange = {handleChange} placeholder="email" className="border p-3 rounded-lg" required/>
          <input type="password"  id="password" value={formData.password} onChange = {handleChange} placeholder="Password" className="border p-3 rounded-lg" required/>
          <button disabled={isLoading} className="bg-tertiary text-white rounded-lg p-3 hover:bg-red">
            {isLoading ? 'LOADING...' : 'SIGN UP'}
           </button>
           <Oauth/>
        </form> 
        <div className="text-center mt-5 flex flex-col w-[90%] sm:w-[50%]  mx-auto">
       
         <p> Have an account? <span className="text-red font-bold underline"><Link to='/signin'>Sign in</Link> </span></p>
        </div>
        {error && <p className="text-red text-center font-bold">{error}</p> }
    </div>
  )
}

export default SignUp