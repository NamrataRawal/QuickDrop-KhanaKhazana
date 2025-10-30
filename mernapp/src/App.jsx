import './App.css'
import Home from './screens/Home'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
         <Routes>
          <Route exact path="/" element={<Home/>}/>
         </Routes>
      </div>
    </Router>
  )
}

export default App
