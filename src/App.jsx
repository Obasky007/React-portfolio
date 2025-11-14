import React from 'react'
import Todo from './Pages/Todo'
import Homepage from './Pages/Homepage'
import Form from './Pages/Form'
import Shop from './Pages/Shop'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App