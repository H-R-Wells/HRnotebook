import React from "react";
import noteContext from "./noteContext";
import  { useState } from "react";


const NoteState = (props) => {


    const notesInitial = [
        {
          "_id": "628ab1884c1d323badb43674",
          "user": "628ab0614c1d323badb43662",
          "title": "Trial 2",
          "description": "With vijay",
          "tag": "multiple",
          "date": "2022-05-22T21:56:24.430Z",
          "__v": 0
        },
        {
          "_id": "628bf4ad52672215e9ca505b",
          "user": "628ab0614c1d323badb43662",
          "title": "Trial 1",
          "description": "With Vijay",
          "tag": "multiple",
          "date": "2022-05-23T20:55:09.464Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

    return (
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}


export default NoteState;