import React from 'react'
import { Link } from 'react-router-dom'

const signup = (props) => {
    return (
        <div className={`${props.backG} transition ease-in-out duration-500  min-h-screen`}>
            <div className='flex justify-center'>
                <div className={`flex  justify-center w-full max-w-lg mt-10 `}>

                    <div className={`${props.mainBox}  z-20 mx-8 container max-w-xs px-9 py-10 sm:px-10 sm:pb-10 sm:pt-5 rounded-lg shadow-lg  w-full lg:max-w-2xl transition ease-in-out duration-500 `}>

                        {/* <div className='flex justify-end'>
                        <button className='hover:fill-slate-500 fill-slate-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.000000pt"
                                height="20.000000pt" viewBox="0 0 200 512">
                                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                            </svg>
                        </button>
                    </div> */}
                        <h1 className={`${props.textMain} text-3xl font-mono form-label transition  ease-in-out duration-500 inline-block mb-4 font-bold `}>Sign up</h1>
                        <form>
                            {/* <div className=" mb-6">
                            <div className='flex justify-between'>
                                <label htmlhtmlFor='email' className={`text-xl form-label transition ease-in-out duration-500 inline-block mb-2 font-semibold`}>Email ID</label>
                                <p className='mt-2 text-sm'>Already had an account?  <Link to={'/login'} className="font-medium text-blue-700 mr-2" >Log in</Link></p>
                            </div>

                            <input id="email" type="email" name="email"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Enter Email ID" required />
                        </div> */}


                            {/* Email id */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="floating_email" className={` block py-2 mt-3 px-0 w-full text-base ${props.textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${props.bordInp} peer`} placeholder=" " required />
                                <label htmlFor="floating_email" className={`peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0  ${props.labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Email address</label>
                                <p className={`${props.textMain} transition ease-in-out duration-500 mt-2 text-sm`}>Already have an account?  
                                <Link to={'/login'} className={`${props.logsign} transition ease-in-out duration-500 font-medium mr-2`} >Log in</Link></p>
                            </div>

                            {/* Password */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="password" name="floating_password" id="floating_password" className={`block py-2.5 px-0 w-full text-base ${props.textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${props.bordInp} peer`} placeholder=" " required />
                                <label htmlFor="floating_password" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${props.labelInp} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Password</label>
                            </div>

                            {/* Confirm password */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="password" name="repeat_password" id="floating_repeat_password" className={`block py-2.5 px-0 w-full text-base ${props.textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${props.bordInp} peer`} placeholder=" " required />
                                <label htmlFor="floating_repeat_password" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  ${props.labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Confirm password</label>
                            </div>

                            {/* Name */}
                            <div className="grid xl:grid-cols-2 xl:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_first_name" id="floating_first_name" className={`block py-2.5 px-0 w-full text-base ${props.textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  ${props.bordInp} peer`} placeholder=" " required />
                                    <label htmlFor="floating_first_name" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0  ${props.labelInp} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>First name</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" className={`block py-2.5 px-0 w-full text-base ${props.textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  ${props.bordInp} peer`} placeholder=" " required />
                                    <label htmlFor="floating_last_name" className={`peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0  ${props.labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Last name</label>
                                </div>
                            </div>







                            {/* Button */}
                            <div className="flex justify-center">

                                <button type='submit'
                                    className=" w-full px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight  rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 transition  duration-150 ease-in-out">
                                    Sign up for free
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup