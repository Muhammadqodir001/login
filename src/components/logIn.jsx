import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { FaPerson } from "react-icons/fa6";
import background2 from "/src/assets/background2.jpg"


const LogIn = (props) => {
  
  return (
    <main className=' flex justify-center items-center w-full h-screen' style={{backgroundImage: `url(${background2})`, backgroundSize: 'cover'}}>
      <div className='container flex flex-col items-center  justify-center h-[500px] w-72 rounded-3xl p-4 '>
        <div className=' space-y-2  mt-[-50px]  text-sky-400'>
             <BsPersonCircle className='text-8xl cursor-pointer ' />
              <h1 className=' text-center'>Sign in</h1>
         </div>
          
                <FaPerson  className='absolute text-xl  mt-[-75px] ml-[-200px] text-white '/>
                <HiOutlineMail  className='absolute text-xl  mt-[40px] ml-[-200px] text-white '/>
                <RiLockPasswordFill  className='absolute text-xl  mt-[150px] ml-[-200px] text-white '/>

         <form className='mt-10 text-center space-y-8 text-white '>
               <input className='input bg-transparent outline-none border-b' placeholder='username '></input>
               <input className='input bg-transparent outline-none border-b' placeholder='email '></input>
               <input className='input bg-transparent outline-none border-b ' placeholder='**********'></input>
               <button className='  rounded-full px-20 py-2 text-white bg-[#2432cf] shadow-md hover:shadow-slate-500 '> Log In</button>
         </form>
                 
            <p className='absolute ml-[-60px] mt-[430px] text-white'>you have no an account? </p>
           <button className='absolute mt-[430px] ml-[180px] text-white underline md:hover:underline' onClick={() => props.onFormSwitch("register")}>
                  Register
          </button>
                
       </div>
    </main>
  )
}

export default LogIn