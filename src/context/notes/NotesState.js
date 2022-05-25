import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {

  const host = "http://localhost:5000"

  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  // Try temp const by pushing value in text






  
// Fetch notes
const getNotes = async (title, description, tag) =>{
  // To-Do API call
  // API call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4YWIwNjE0YzFkMzIzYmFkYjQzNjYyIn0sImlhdCI6MTY1MzI1NjM2Mn0.FFhpyqjqEDLTuqzjui7HhFuCFPxll8s2e79JK6ESVsQ"
      },
    });
    const json = await response.json()
    console.log(json);
    setNotes(json)
}












// Add note
const addNote = async (title, description, tag) =>{
  // To-Do API call

  // API call
  const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4YWIwNjE0YzFkMzIzYmFkYjQzNjYyIn0sImlhdCI6MTY1MzI1NjM2Mn0.FFhpyqjqEDLTuqzjui7HhFuCFPxll8s2e79JK6ESVsQ"
      },
      body: JSON.stringify({title, description, tag})
    });
}

// Delete note
const deleteNote = (id) =>{
  // To-Do API call
  console.log("Deleting Note "+ id);
  const newNotes = notes.filter((note)=>{return note._id !== id})
  setNotes(newNotes)
}

// Edit note
const editNote = async (id, title, description, tag) =>{
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];



    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4YWIwNjE0YzFkMzIzYmFkYjQzNjYyIn0sImlhdCI6MTY1MzI1NjM2Mn0.FFhpyqjqEDLTuqzjui7HhFuCFPxll8s2e79JK6ESVsQ"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();




    // Logic to edit client
    if (element._id === id){
      element.title = title;
      element.description = description;
      element.tag = tag;
    }
    
  }
}








  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote , getNotes}}>
      {props.children}
    </noteContext.Provider>
  )
}


export default NoteState;