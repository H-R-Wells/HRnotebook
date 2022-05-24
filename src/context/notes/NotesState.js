import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {


  const notesInitial = [
    {
      "_id": "628ab1884c1d323bsadb43674",
      "user": "628ab0614asc1d323badb43662",
      "title": "Trial 2",
      "description": "With vijay",
      "tag": "multiple",
      "date": "2022-05-22T21:56:24.430Z",
      "__v": 0
    },
    {
      "_id": "628bf4ad5267s2215e9ca505b",
      "user": "628ab0614asc1d323badb43662",
      "title": "Trial 1",
      "description": "With Vijay",
      "tag": "multiple",
      "date": "2022-05-23T20:55:09.464Z",
      "__v": 1
    },
    {
      "_id": "628d3d4f84251badb2a2d63888",
      "user": "6ds28ab0614c1d323badb43662",
      "title": "Trial 1",
      "description": "With Vijay",
      "tag": "multiple",
      "date": "2022-05-24T20:17:19.460Z",
      "__v": 2
    },
    {
      "_id": "628d3d5584251ad bb2a2d6388a",
      "user": "628ab0614c1d323baasdb43662",
      "title": "Tsl 1",
      "description": "With Vijay",
      "tag": "multiple",
      "date": "2022-05-24T20:17:25.926Z",
      "__v": 3
    }
  ]
  const [notes, setNotes] = useState(notesInitial)


  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}


export default NoteState;