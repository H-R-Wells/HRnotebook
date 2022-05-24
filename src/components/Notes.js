import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';


const Notes = (props) => {


    const context = useContext(noteContext);
    const { notes } = context;




    return (
        <div>
        

            {/* <!-- Ypur notes  --> */}
            <div className="container min-w-full bg-cyan-100 pb-12 flex flex-wrap justify-center">





                <div className=" flex min-w-full justify-center container">
                    <h1 id="list" className="font-serif font-extrabold text-2xl md:text-3xl py-10">Your Notes</h1>
                </div>



                {notes.map((note) => {
                return <NoteItem key={note._id} note={note}  />;
            })}

            </div>


        </div>
    )
}

export default Notes