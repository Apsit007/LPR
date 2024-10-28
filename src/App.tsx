
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './layout/nav'

function App() {

  return (
    <>
      <Routes>

        <Route path="/Login" />

      //content render
        <Route path="/*" element={
          <>
            <Nav />
          </>
        } />

      </Routes>
    </>
  )
}

export default App
