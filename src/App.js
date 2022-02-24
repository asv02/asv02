// import logo from "./logo.svg";
import "./App.css";
import Na from "./components/Navbar"
import Q from "./components/TextForm"
import {useState} from 'react'
import Alert from './components/alert'//Set the alert.
// import About from "./components/about";

function App() {
  const[mystyle,setStyle]=useState({
    backgroundColor:'white',
    color:'black'
  })
const[aert,newA]=useState(null)
const[girl,setGirl]=useState("Dark")
let showAlert=(message)=>{
  newA(message)
}
const toggle=(event)=>{
    if(mystyle.color==='black'){
      setGirl("dark")
     setStyle({backgroundColor:'#05323f',
     color:'wheat'})
     newA("Dark mode")
    //  setBtn("light Mode")
    }
    else{
      setGirl("light")
      setStyle({   
       backgroundColor:'white',
      color:'black'})
      newA("Light mode")
      // setBtn(" Dark Mode")
    }
  }
//To disappear the alert automatically.
setTimeout(() => {
  newA(null)
}, 1500);

  return (<>

<div style={mystyle}>
    <Na heading={"Helping_Buddy"} mode={girl} onClick={toggle}/>
    {aert && <Alert alert={`${aert}`}/>}
    <div className="Analyse"><h2>Text To Analyse Below:</h2>
    <div className="form-check form-switch">
       <input className="form-check-input" onClick={toggle} type="checkbox" id="flexSwitchCheckDefault"/>
       <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
   </div>
    </div>
    <div className="container my-5">
       {/* Q is textForm imported */}
       <Q/>
       </div>
    </div>
    </>
  ); 
}

export default App;
  