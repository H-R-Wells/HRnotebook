import React, { useContext, useEffect, useState } from 'react';
import noteContext from "../context/notes/noteContext";
import Modal from './Modal';
import NoteItem from './NoteItem';

const Notes = (props) => {


    const context = useContext(noteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])


    const [hsclose, setHsclose] = useState("hidden")
    const handleClose = () => setHsclose("hidden")
    const showModal = () => setHsclose("block")



    const updateNote=(id)=>{

    }



    return (
        <div>


            {/* <!-- Your notes  --> */}
            <div className={`container min-w-full ${props.backG} transition  ease-in-out duration-500 pb-12 flex flex-wrap justify-center min-h-screen`}>





                <div className="flex min-w-full justify-center container">
                    <h1 id="list" className=" font-serif font-extrabold text-2xl md:text-3xl py-10">Your Notes</h1>
                </div>

                <Modal  mainBox2={props.mainBox2} textMain={props.textMain} tagColor={props.tagColor} mainBox={props.mainBox} textArea={props.textArea} hsclose={hsclose} handleClose={handleClose} />


                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote} textMain={props.textMain} mainBox2={props.mainBox2} tagColor={props.tagColor} showModal={showModal} />;
                })}




            </div>


        </div>
    )
}

export default Notes