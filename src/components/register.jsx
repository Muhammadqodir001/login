import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
import {FaPerson} from 'react-icons/fa6'
import GoogleButton from 'react-google-button'
import background1 from '/src/assets/background1.jpg'

const Register = (props) => {
  return (
    <main className=' flex justify-center items-center w-full h-screen' style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover' }}>
        <div className='container w-72 h-[530px] flex items-center flex-col rounded-3xl p-4'>
            <div className='space-y-2 text-sky-400'>
             <BsPersonCircle className='text-8xl cursor-pointer ' />
                  <h1 className=' text-center'>Register</h1>
             </div>
                
                <FaPerson className="absolute text-xl  mt-[135px] ml-[-200px] text-white" />
                <HiOutlineMail  className='absolute text-xl  mt-[200px] ml-[-200px] text-white '/>
                <RiLockPasswordFill  className='absolute text-xl mt-[260px] ml-[-200px] text-white '/>

              <form  className='mt-1 text-white space-y-7 text-center '>
                 <input className='input border-b outline-none py-1 bg-transparent'  
                    type='text' placeholder='username'/>
                 <input className='input outline-none py-1 bg-transparent border-b '
                    type='email' placeholder='email' />
                 <input className='input outline-none py-1 bg-transparent border-b '
                    type='password' placeholder='**********' />
                 <button variant="primary" type="Submit" className='px-20 rounded-full py-2 text-white bg-[#2432cf] shadow-md hover:shadow-slate-500'>Sign in</button>
              </form>
               
          <GoogleButton className='absolute mt-[400px]' />
          <p className='absolute ml-[-40px] mt-[470px] text-white'>you have an account? </p>
          <button className='absolute mt-[470px] ml-[170px] text-white underline md:no-underline md:hover:underline' onClick={() => props.onFormSwitch('login')}>
                 Login
         </button>
               

         </div>
    </main>
  )
}

export default Register