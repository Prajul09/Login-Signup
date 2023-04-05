import React from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Profile from './Profile';

const Login = () => {
  return (
    <div>
        <div className='bg-zinc-200 flex justify-center items-center h-screen'>
            <div className='bg-white pl-10 h-[500px] flex flex-col pt-10 w-[350px]'>
                <form className='' action="/Profile">
                    <div>
                        <p className='font-semibold text-2xl underline pl-10 '>Login in League</p>
                    </div>
                    <div className='mr-5 pt-5'>
                        <p className='text-zinc-600 font-semibold pb-1'>Email</p>
                        <input className='h-10 px-5 border border-sm  rounded-md' type="email" required pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder='abc@example.com' />
                    </div>
                    <div className='mr-5'>
                        <p className='text-zinc-600 pt-2 font-semibold pb-1'>Password</p>
                        <input className='h-10 px-5 border border-sm  rounded-md' type="Password"  pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g" required placeholder='***********' />
                    </div>
                    <div className='flex gap-5 mt-2'>
                        <input type="checkbox" />
                        <p>Remember me?</p>
                    </div>
                    <div className='mr-5 mt-4'>
                        <button className='bg-red-400 h-10 rounded hover:bg-red-600 duration-300 w-full text-white font-semibold'><Link to="/Profile">Login</Link></button>
                        <p className='text-end mt-1'>Forget Password</p>
                    </div>
                    <p className='flex justify-center font-bold'>OR</p>
                    <div className='flex ml-14 mt-2'>
                        <ul className='flex flex-row justify-center gap-10 text-2xl'>
                            <li className='rounded-full text-blue-600'><i className="ri-facebook-circle-fill"></i></li>
                            <li className='rounded-full text-red-600' ><i className="ri-google-fill"></i></li>
                            <li className='rounded-full'><i className="ri-github-fill"></i></li>
                        </ul>
                    </div>
                    <div className='mt-3'>
                        <p className='text-zinc-500'>Need an Account? <span className='text-black font-bold underline'><Link to="/Signup">Signup</Link></span> </p>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Login