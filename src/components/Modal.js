import React from 'react';

const Modal = (props) => {









    return (
        <div className={`${props.hsclose}  fixed w-fit max-w-lg my-8 `}>

            <div className={` ${props.mainBox} z-20 mx-8 container max-w-xs px-9 py-10 sm:px-10 sm:pb-10 sm:pt-5 rounded-lg shadow-lg  w-full lg:max-w-2xl transition ease-in-out duration-500 `}>

                <div className='flex justify-end'>
                    <button onClick={props.handleClose} className='hover:fill-slate-500 fill-slate-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.000000pt"
                            height="20.000000pt" viewBox="0 0 200 512">
                            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>
                    </button>
                </div>
                <form>
                    <div id="titlediv" className="form-group mb-6">
                        <label className={`text-2xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Title</label>

                        <input id="title" type="text"  name="title"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Title Name" />
                    </div>


                    <div className="form-group mb-6">
                        <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Description</label>

                        <textarea id="description" name="description" 
                            className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-700   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${props.textArea}`}
                            rows="4" placeholder="Enter Description here"></textarea>
                    </div>
                    <div className="form-group mb-6">
                        <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Add Tag</label>

                        <input id="tag" name="tag"
                            className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-700   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${props.textArea}`}
                            rows="1" placeholder="Optional"></input>
                    </div>







                    {/* Button */}
                    <div className="flex">

                        <button type="submit" 
                            className=" w-full mx-2 px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out">
                            Add to list
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal