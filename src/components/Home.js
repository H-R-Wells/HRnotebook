import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";



function Home(props) {


    const context = useContext(noteContext);
    const { addNote } = context;



    const [note, setNote] = useState({ title: "", description: "", tag: "default" })



    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e) => {
        setNote({...note,[e.target.name]:e.target.value})
    }





    return (
        <>
            {/* <!-- main  --> */}
            <div className={`flex ${props.backG} transition  ease-in-out duration-500 justify-center py-12`}>

                <div className="flex w-full max-w-lg  justify-center py-12">

                    <div className={`mx-8 block container max-w-xs px-9 py-10 md:px-12 lg:py-12 rounded-lg shadow-lg  w-full lg:max-w-2xl transition  ease-in-out duration-500 ${props.mainBox} `}>
                        <form>
                            <div id="titlediv" className="form-group mb-6">
                                <label className={`text-2xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Title</label>

                                <input id="title" type="text" onChange={onChange} name="title"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Title Name" />
                            </div>


                            <div className="form-group mb-6">
                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Description</label>

                                <textarea id="description" name="description" onChange={onChange}
                                    className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-700   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${props.textArea}`}
                                    rows="4" placeholder="Enter Description here"></textarea>
                            </div>
                            <div className="form-group mb-6">
                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Add Tag</label>

                                <textarea id="tag" name="tag" onChange={onChange}
                                    className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-700   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${props.textArea}`}
                                    rows="1" placeholder="Optional"></textarea>
                            </div>








                            <div className="flex">
                                
                                <button type="button" onClick={handleClick}
                                    className=" w-full mx-2 px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out">
                                    Add to list
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Home
