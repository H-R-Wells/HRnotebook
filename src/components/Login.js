import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex justify-center'>
            <div className={`flex justify-center w-full max-w-lg my-8 `}>

                <div className={`  z-20 mx-8 container max-w-xs px-9 py-10 sm:px-10 sm:pb-10 sm:pt-5 rounded-lg shadow-lg  w-full lg:max-w-2xl transition ease-in-out duration-500 `}>

                    {/* <div className='flex justify-end'>
                        <button className='hover:fill-slate-500 fill-slate-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.000000pt"
                                height="20.000000pt" viewBox="0 0 200 512">
                                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                            </svg>
                        </button>
                    </div> */}
                    <h1 className='text-3xl font-mono form-label transition  ease-in-out duration-500 inline-block mb-4 font-bold '>Log in</h1>
                    <form>
                        <div className=" mb-6">
                            <div className='flex justify-between'>
                            <label htmlFor='email' className={`text-xl form-label transition ease-in-out duration-500 inline-block mb-2 font-semibold`}>Email ID</label>
                            <p className='mt-2 text-sm'>Need an account?  <Link to={'/signup'} className="font-medium text-blue-700 mr-2" >sign up</Link></p>
                            </div>

                            <input id="email" type="email" name="email"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Enter Email ID" required />
                        </div>


                        <div className=" mb-6">
                            <label htmlFor='password' className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold`}>Password</label>

                            <input id="password" type="password" name="password"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Enter Password" required />
                        </div>
                        <div className="flex  mb-6">
                            <div className="flex h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                        </div>







                        {/* Button */}
                        <div className="flex justify-center">

                            <button type='submit'
                                className=" w-full px-2 py-3 md:py-2.5 bg-blue-600 text-white font-semibold text-lg leading-tight  rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 transition  duration-150 ease-in-out">
                                Log in
                            </button>
                        </div>
                        <p className='text-sm cursor-pointer text-center mt-3'>Forgot password?</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login