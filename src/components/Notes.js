import React, { useContext, useEffect, useState } from 'react';
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {






    // if user isn't logged in then this state will work
    const [yourNote, setYourNote] = useState("Your notes")

    let navigate = useNavigate();




    // For printing notes
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else {
            setYourNote("Please log in to see and add notes")
            setTimeout(() => {
                navigate('/login')
            }, 5000);
        }
        // eslint-disable-next-line
    }, [])





    // For close and cancel modal
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)


    // To populate modal
    const [note, setNote] = useState({ id: "", title: "", description: "", tag: "" })

    const updateNote = (currentNote) => {
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
        setOpen(true)
    }

    const handleClick = (e) => {
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag)
        setOpen(false)
    }




    // on change
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }





    return (
        <div>




            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen} >
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">


                                <Dialog.Panel className="">
                                    {/* Apna code */}
                                    <div className={` ${props.mainBox} mt-8 relative mx-8 container max-w-xs px-9 py-10 sm:px-10 sm:pb-10 sm:pt-5 rounded-lg shadow-xl w-full sm:max-w-4xl transform transition-all text-left `}>

                                        <div className='flex justify-end'>
                                            <button onClick={() => setOpen(false)} ref={cancelButtonRef} className='hover:fill-slate-500 fill-slate-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20.000000pt"
                                                    height="20.000000pt" viewBox="0 0 200 512">
                                                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                                                </svg>
                                            </button>
                                        </div>





                                        <form onSubmit={handleClick}>



                                            {/* Title */}
                                            <div id="titlediv" className="form-group mb-6">
                                                <label className={`text-2xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Title</label>

                                                <input id="etitle" onChange={onChange} value={note.etitle} minLength={3} required type="text" name="etitle"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-medium text-gray-900 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    placeholder="Title" autoComplete="off" />
                                            </div>

                                            {/* Description */}
                                            <div className="form-group mb-6">
                                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Description</label>

                                                <textarea onChange={onChange} value={note.edescription} id="edescription" name="edescription" minLength={3}
                                                    className={`form-control block w-full  px-3  py-1.5  text-base  font-normal text-gray-900   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${props.textArea}`}
                                                    rows="3" placeholder="Enter Description"></textarea>
                                            </div>


                                            {/* Tag */}
                                            <div className="form-group mb-6">
                                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Tag</label>

                                                <input onChange={onChange} value={note.etag} id="etag" name="etag"
                                                    className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-900   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${props.textArea}`}
                                                    rows="1" autoComplete="off" placeholder="Tag"></input>
                                            </div>







                                            {/* Button */}
                                            <div className="flex justify-center">

                                                <button type="submit"
                                                    className=" w-full px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out disabled:bg-blue-500 disabled:md:hover:bg-blue-500 disabled:focus:bg-blue-500 disabled:text-gray-400 disabled:cursor-not-allowed">
                                                    Update Note
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                </Dialog.Panel>

                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>









            {/* <!-- Your notes  --> */}
            <div className={`container min-w-full ${props.backG} transition  ease-in-out duration-500 flex flex-wrap justify-center min-h-screen`}>





                <div className={`${notes.length < 3 && "sticky top-16 "} flex min-w-full justify-center container`}>
                    <h1 className=" font-serif font-extrabold text-3xl md:text-4xl mt-8">{yourNote}</h1>
                </div>

                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote} textMain={props.textMain} mainBox2={props.mainBox2} tagColor={props.tagColor} open={open} setOpen={setOpen} />;
                })}

                <div className="flex max-h-0 font-mono container justify-center text-xl md:text-2xl">
                    {notes.length === 0 && "You don't have any notes ????????"}
                </div>






            </div>


        </div>
    )
}

export default Notes