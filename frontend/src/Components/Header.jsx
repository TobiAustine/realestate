 import { IoSearchSharp } from "react-icons/io5";
 import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-secondary">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-2">
         <h1 className="font-bold text-sm sm:text-xl flex  flex-wrap"> 
                <span className='text-lightPurple'>Div</span>
                <span className='text-darkPurple'>Estate</span>
        </h1>


        <form className="bg-tertiary p-2 rounded-md flex justify-between items-center">
              <input type="text" placeholder="Search..." className="bg-transparent text-white placeholder:text-white placeholder:italic focus:outline-none w-24 sm:w-64 " />

              <IoSearchSharp size='1.2rem' className="text-white"/>
        </form>

  
        <ul className="flex items-center gap-3 font-bold ">
            <li className="hover:underline hidden sm:block"> <Link to='/'>Home</Link> </li>
            <li className="hover:underline hidden sm:block"> <Link to='/about'>About</Link> </li>
            <li className="hover:underline"> <Link to='/signin'>Sign In</Link> </li>
        </ul >
      </div>
       
    </header>
  )
}
 
export default Header