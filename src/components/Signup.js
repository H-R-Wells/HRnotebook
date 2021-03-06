import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Signup = (props) => {




    const [credentials, setCredetials] = useState({ name: "", email: "", password: ""})
    let navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authToken)
            navigate('/')
        }
        else {
            alert(json.error)
        }
    }

    // on change
    const onChange = (e) => {
        setCredetials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div className={`${props.backG} transition ease-in-out duration-500  min-h-screen`}>
            <div className='flex justify-center'>
                <div className={`flex  justify-center w-full max-w-lg mt-10 `}>

                    <div className={`${props.mainBox}  z-20 mx-8 container max-w-xs px-9 py-10 sm:px-10 sm:pb-10 sm:pt-5 rounded-lg shadow-lg  w-full lg:max-w-2xl transition ease-in-out duration-500 `}>

                        <h1 className={`${props.textMain} text-3xl font-mono form-label transition  ease-in-out duration-500 inline-block mb-4 font-bold `}>Sign up</h1>
                        <form onSubmit={handleSubmit}>
                            {/* Email id */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={onChange} type="email" name="email" id='email' className={` block py-2 mt-3 px-0 w-full text-base ${props.textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${props.bordInp} peer`} placeholder=" " required />
                                <label htmlFor="email" className={`peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0  ${props.labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Email address</label>
                                <p className={`${props.textMain} transition ease-in-out duration-500 mt-2 text-sm`}>Already have an account?
                                    <Link to={'/login'} className={`${props.logsign} transition ease-in-out duration-500 font-medium mr-2`} >Log in</Link></p>
                            </div>

                            {/* Password */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={onChange} minLength={5} type="password" name="password" id="password" className={`block py-2.5 px-0 w-full text-base ${props.textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${props.bordInp} peer`} placeholder=" " required />
                                <label htmlFor="password" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${props.labelInp} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Password</label>
                            </div>

                            {/* Confirm password */}
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={onChange} type="password" name="cpassword" id="cpassword" className={`block py-2.5 px-0 w-full text-base ${props.textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${props.bordInp} peer`} placeholder=" " required />
                                <label htmlFor="cpassword" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  ${props.labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Confirm password</label>
                            </div>

                            {/* Name */}
                            <div className="grid xl:grid-cols-2 xl:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input onChange={onChange} type="text" name="name" id="first_name" className={`block py-2.5 px-0 w-full text-base ${props.textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  ${props.bordInp} peer`} placeholder=" " required />
                                    <label htmlFor="first_name" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0  ${props.labelInp} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>First name</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input onChange={onChange} type="text" name="last_name" id="last_name" className={`block py-2.5 px-0 w-full text-base ${props.textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  ${props.bordInp} peer`} placeholder=" " />
                                    <label htmlFor="last_name" className={`peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0  ${props.labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Last name</label>
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

export default Signup