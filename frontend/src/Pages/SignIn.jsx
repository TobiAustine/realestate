import { Link,useNavigate } from "react-router-dom" 
import { useDispatch} from "react-redux"
import { useState } from "react"
import axios from "axios"
import { signIn,signInError,signInSuccess } from "../redux/user/userSlice"
import Oauth from "../Components/Oauth"



const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //const url = 'http://localhost:8000'
  //const url = process.env.REACT_APP_base_URL
  const url = import.meta.env.VITE_REACT_APP_base_URL
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)

  const [formData, setformData] = useState({
   // username: '',
    email:'',
    password:'' 
  })

  const handleChange = (e) =>{
      setformData(
        {...formData,
        [e.target.id] : e.target.value
  })
  } 

  const Login = async(e) =>{
        e.preventDefault()
    try {  
     
    //setIsLoading(true)
    dispatch(signIn())
 const response =  await axios.post(`${url}/auth/login`, formData)
 setIsLoading(false)
 dispatch(signInSuccess(response))
    alert(`Login Successful`)
    navigate('/')
    console.log(response.data);
 
    } catch (error) {
      if (error.response && error.response.status === 404) {
       // setError(error.response.data.message);
       // setIsLoading(false)
       dispatch(signInError(error.response.data.message))
      } else {
        setError(error.response.data.message);
        dispatch(signInError(error.response.data.message))
      }



      setIsLoading(false)
    }
   } 


  return (
    <div>
        <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
        <form className="flex flex-col gap-4 w-[90%] sm:w-[50%]  mx-auto" onSubmit={Login}>
          {/* <input type="text"  id="username"   value={formData.username} onChange = {handleChange} placeholder="Username" className="border p-3 rounded-lg" required/> */}
          <input type="email"  id="email" value={formData.email} onChange = {handleChange} placeholder="email" className="border p-3 rounded-lg" required/>
          <input type="password"  id="password" value={formData.password} onChange = {handleChange} placeholder="Password" className="border p-3 rounded-lg" required/>
          <button disabled={isLoading} className="bg-tertiary text-white rounded-lg p-3 hover:bg-red">
            {isLoading ? 'LOADING...' : 'SIGN IN'}
           </button>
            <Oauth/>
        </form>
        <div className="text-center mt-5 flex flex-col w-[90%] sm:w-[50%]  mx-auto">
      
         <p> Do not have an account? <span className="text-red font-bold underline"><Link to='/signup'>Sign Up</Link> </span></p>
        </div>
        {error && <p className="text-red text-center font-bold">{error}</p> }
    </div>
  )
}

export default SignIn