import React from 'react'
import Login from './login'
import Browse from './Browse'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

const Body = () => {


  

  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/Browse' element={<Browse/>}/>
            </Routes>
        </Router>

    </div>
  )
}

export default Body