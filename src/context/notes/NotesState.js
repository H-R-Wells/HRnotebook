import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {

  const host = "http://localhost:5000"

  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  // Try temp const by pushing value in text







  // Get all notes notes
  const getNotes = async () => {
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
    setNotes(json)
  }











  // Add note
  const addNote = async (title, description, tag) => {
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


    const note = await response.json();
    setNotes(notes.concat(note));
  }
















  // Delete note
  const deleteNote = async (id) => {
    // To-Do API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4YWIwNjE0YzFkMzIzYmFkYjQzNjYyIn0sImlhdCI6MTY1MzI1NjM2Mn0.FFhpyqjqEDLTuqzjui7HhFuCFPxll8s2e79JK6ESVsQ"
      },
    });
    const json = response.json();
    console.log(json)


    // console.log("Deleting Note " + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)

  }









  // Edit note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4YWIwNjE0YzFkMzIzYmFkYjQzNjYyIn0sImlhdCI6MTY1MzI1NjM2Mn0.FFhpyqjqEDLTuqzjui7HhFuCFPxll8s2e79JK6ESVsQ"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();
    console.log(json);


    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      // Logic to edit in client
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
    setNotes(newNotes);
  }








  return (
    <noteContext.Provider value={{ notes, deleteNote, editNote, getNotes, addNote }}>
      {props.children}
    </noteContext.Provider>
  )
}


export default NoteState;