import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import ApiCheck from './ApiCheck';




function App(){
  return (
    <>
    <div>
    <BrowserRouter>
      <h1>Eli GPT</h1>
      <div className='nav-links'>
        <NavLink to='/app'>App</NavLink>
        <NavLink to='/apiCheck'>API Check</NavLink>
      </div>
      <div className="content">
        <Routes>
          <Route path="/chatBook" element={<div><h1>App</h1></div>} />
          <Route path="/apiCheck" element={<ApiCheck />} />
        </Routes>
      </div>
    </BrowserRouter>   
    </div> 
    </>
  )
}



export default App;