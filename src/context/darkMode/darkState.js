import React, { useState } from "react";
import darkContext from "./darkContext";


const darkState = (props) => {



    
  // useStates for Card
  const [mainCard, setMainCard] = useState("bg-gray-700");
  const [mainBox2, setMainBox2] = useState("bg-gray-600");
  const [textMain, settextMain] = useState('text-white');
  const [textArea, setTextArea] = useState('bg-slate-300 placeholder-slate-600');




  return (
      <darkContext.Provider value={mainCard}>
          {props.children}
      </darkContext.Provider>
  )
}

export default darkState