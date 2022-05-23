import './App.css';
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import React, { useState } from "react";
import Home from './components/Home';
import Notes from './components/Notes';
import About from './components/About';
import NoteState from './context/notes/NotesState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {



  // useStates for Navbar
  const [mode, setMode] = useState("bg-gray-800 text-gray-300");
  const [about, setAbout] = useState("md:hover:bg-gray-700 text-white hover:text-white");
  const [home, setHome] = useState("bg-gray-900 text-white md:border-0 border-2 border-white");
  const [navBtn, setNavBtn] = useState("hidden");
  const [navBtn2, setNavBtn2] = useState("block");
  const [navMenu, setNavMenu] = useState("hidden");
  const [profile, setProfile] = useState("hidden");


    // useStates for TextForms
    const [mainBox, setMainBox] = useState("bg-gray-700");
    const [mainBox2, setMainBox2] = useState("bg-gray-600");
    const [textMain, settextMain] = useState('text-white');
    const [textArea, setTextArea] = useState('bg-slate-300 placeholder-slate-600');


  // useStates for alert
  const [alertHide, setAlertHide] = useState("block");
  const [alert, setAlert] = useState();

  // function to display msg in alert (not nessecery)
  const showAlert = (msg1, type1) => {
    setAlert({
      msg: msg1,
      type: type1
    })
  }





  // function to change mode (dark/light)
  const toggleMode = () => {
    // set dark mode
    if (mode === "bg-gray-300 text-black") {
      setMode('bg-gray-800 text-gray-300')
      setAbout('md:hover:bg-gray-700 text-white hover:text-white')
      setHome('bg-gray-900 text-white md:border-0 border-2 border-white')
      showAlert("Success ", " Dark mode is enabled")
      setAlertHide('block')
      setMainBox('bg-gray-700')
      setMainBox2('bg-gray-600')
      settextMain('text-white')
      setTextArea('bg-slate-300 placeholder-slate-600')
      setTimeout(() => {
        setAlertHide('hidden');
      }, 1500);
    }
    // set light mode
    else {
      setMode("bg-gray-300 text-black")
      setAbout('md:hover:bg-gray-200 text-black')
      setHome('bg-white text-black md:border-0 border-2 border-black')
      showAlert("Success ", " Dark mode is disabled")
      setAlertHide('block')
      setMainBox('bg-white')
      setMainBox2('bg-slate-200')
      settextMain('text-black')
      setTextArea('bg-white placeholder-slate-400')
      setTimeout(() => {
        setAlertHide('hidden');
      }, 1500);
    }
  }


  // function to show alert 
  const toggleAlert = () => {
    if (alertHide === "block") {
      setAlertHide('hidden');
    }
    else {
      setAlertHide('block');
    }
  }



  // function to hide and unhide mobile navbar
  const toggleNavMenu = () => {
    if (navBtn === "block") {
      setNavBtn('hidden');
      setNavBtn2('block');
      setNavMenu('hidden');
    }
    else {
      setNavBtn('block');
      setNavBtn2('hidden');
      setNavMenu('block');
    }
  }



  // function to hide and unhide profileMenu 
  const toggleProfile = () => {
    if (profile === "hidden") {
      setProfile('block opacity-0');
      setTimeout(() => {
        setProfile('opacity-100')
      }, 100);
    }
    else {
      setProfile('opacity-0');
      setTimeout(() => {
        setProfile('hidden')
      }, 500);
    }
  }


  return (
    <>
      <NoteState>
        <Router>
          <Navbar profile={profile} toggleProfile={toggleProfile} navBtn={navBtn} navBtn2={navBtn2} navMenu={navMenu} toggleNavMenu={toggleNavMenu} showAlert={showAlert} mode={mode} toggleMode={toggleMode} about={about} home={home} />
          <Alert alertHide={alertHide} toggleAlert={toggleAlert} alert={alert} />

          <Routes>
            <Route path="/" element={<Home mainBox={mainBox} mainBox2={mainBox2} textMain={textMain} textArea={textArea} />} />
            <Route path="/about" element={<About  mainBox={mainBox} mainBox2={mainBox2} textMain={textMain} textArea={textArea} />} /><Route path="/notes" element={<Notes />} />

          </Routes>

        </Router>
      </NoteState>
    </>
  );
}

export default App;