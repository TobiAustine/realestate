import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'
import Header from './Components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/about' element={<About></About>}/>
    <Route path='/signin' element={<SignIn></SignIn>}/>
    <Route path='/signup' element={<SignUp></SignUp>}/>
    <Route path='/profile' element={<Profile></Profile>}/>



    </Routes>
   
    </BrowserRouter>
  )
}

export default App