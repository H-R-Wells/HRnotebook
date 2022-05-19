import { useState } from "react";
import "./App.css";
// import About from "./components/about";
import Navbar from "./components/navbar";
import Alert from "./components/alert";





function App() {

  // useStates for Navbar
  const [mode, setMode] = useState("bg-gray-800 text-gray-300");
  const [about, setAbout] = useState("md:hover:bg-gray-700 hover:text-white");
  const [home, setHome] = useState("bg-gray-900 text-white md:border-0 border-2 border-white");
  const [navBtn, setNavBtn] = useState("hidden");
  const [navBtn2, setNavBtn2] = useState("block");
  const [navMenu, setNavMenu] = useState("hidden");
  const [profile, setProfile] = useState("hidden");

 

  // useStates for alert
  const [alertHide, setAlertHide] = useState("block");
  const [alert, setAlert] = useState();

  // function to display msg in alert (not nessecery)
  const showAlert = (msg1) => {
    setAlert({
      msg: msg1,
    })
  }




  // function to change mode (dark/light)
  const toggleMode = () => {
    // set dark mode
    if (mode === "bg-gray-300 text-black") {
      setMode('bg-gray-800 text-gray-300')
      setAbout('md:hover:bg-gray-700 hover:text-white')
      setHome('bg-gray-900 text-white md:border-0 border-2 border-white')
      showAlert(" Dark mode is enabled")
      setAlertHide('block')
      setTimeout(() => {
        setAlertHide('hidden');
      }, 1500);
    }
    // set light mode
    else {
      setMode("bg-gray-300 text-black")
      setAbout('md:hover:bg-gray-200')
      setHome('bg-white text-black md:border-0 border-2 border-black')
      showAlert(" Dark mode is disabled")
      setAlertHide('block')
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
          <Navbar  profile={profile} toggleProfile={toggleProfile} navBtn={navBtn} navBtn2={navBtn2} navMenu={navMenu} toggleNavMenu={toggleNavMenu} showAlert={showAlert} mode={mode} toggleMode={toggleMode} about={about} home={home} />

          <Alert alertHide={alertHide} toggleAlert={toggleAlert} alert={alert} />

    </>
  );
}

export default App;
