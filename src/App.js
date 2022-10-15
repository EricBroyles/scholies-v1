import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import { app } from './config/firebaseConfig';
import {getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';


import './assests/App.css'
import Home from './pages/home/Home';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Explore from './pages/explore/Explore';



function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/explore" element={<Explore/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;





//import './assests/test.css'

// document.getElementById("cards").onmousemove = e => {
  //   for(const card of document.getElementsByClassName("card")) {
  //     const rect = card.getBoundingClientRect(),
  //           x = e.clientX - rect.left,
  //           y = e.clientY - rect.top;
  
  //     card.style.setProperty("--mouse-x", `${x}px`);
  //     card.style.setProperty("--mouse-y", `${y}px`);
  //   };
  // }
  // const handleOnMouseMove = e => {
  //   const {currentTarget : target} = e;

  //   const rect = target.getBoundingClientRect(),
  //     x = e.clientX -rect.left,
  //     y = e.clientY - rect.top;
  //   target.style.setProperty("--mouse-x", `${x}px`);
  //   target.style.setProperty("--mouse-y", `${y}px`)

  // }

  // for(const card of document.querySelectorAll(".card")){
  //   card.onmouseover = e => handleOnMouseMove(e);
  // }


/* <div id="cards">
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-apartment"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-apartment"></i>
                <div className="card-info-title">
                  <h3>Apartments</h3>  
                  <h4>Places to be apart. Wait, what?</h4>
                </div>    
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-unicorn"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-unicorn"></i>
                <div className="card-info-title">
                  <h3>Unicorns</h3>  
                  <h4>A single corn. Er, I mean horn.</h4>
                </div>    
              </div>  
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-blender-phone"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-blender-phone"></i>
                <div className="card-info-title">
                  <h3>Blender Phones</h3>  
                  <h4>These absolutely deserve to exist.</h4>
                </div>    
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-person-to-portal"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-person-to-portal"></i>
                <div className="card-info-title">
                  <h3>Adios</h3>  
                  <h4>See you...</h4>
                </div>    
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-person-from-portal"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-person-from-portal"></i>
                <div className="card-info-title">
                  <h3>I mean hello</h3>  
                  <h4>...over here.</h4>
                </div>    
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-otter"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-otter"></i>
                <div className="card-info-title">
                  <h3>Otters</h3>  
                  <h4>Look at me, imma cute lil fella.</h4>
                </div>    
              </div>
            </div>
          </div>
        </div>
      </div> */








//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


 // const auth = getAuth();
  // const [data, setData] = useState({email: '', password: ''})
  // const handleInputs = (event) => {
  //   let inputs = { [event.target.name]: event.target.value }
  //   setData({ ...data, ...inputs })
  // }

  // const addData = () => {
  //   signInWithEmailAndPassword(auth, data.email, data.password)
  // }

  // const handlelogout = () => {
  //   signOut(auth);
  // }

  // useEffect(() => {
  //   onAuthStateChanged(auth, (data) => {
  //     if(data){
  //       alert("Logged In")
  //     }
  //     else {
  //       alert('Not Logged In')
  //     }
  //   })
  // }, [])

  // return (
  //   <div classNameName="App-header">
  //     <input
  //       placeholder="Email"
  //       name="email"
  //       type="email"
  //       className="input-fields"
  //       onChange={event => handleInputs(event)}
  //     />
  //     <input
  //       placeholder="Password"
  //       name="password"
  //       type="password"
  //       className="input-fields"
  //       onChange={event => handleInputs(event)}
  //     />

  //     <button onClick={addData}>Log In</button>
  //     <button onClick={handlelogout}>Log out</button>
  //   </div>
  // );
