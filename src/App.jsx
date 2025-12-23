import Header from "./pages/Header"
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline'

function App() {


  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          {/* <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/vans" element={<h1>Vans Page</h1>} />
          <Route path="/vans/:id" element={<h1>Van Detail Page</h1>} />
          <Route path="/host" element={<h1>Host Page</h1>} />
          <Route path="/host/income" element={<h1>Income Page</h1>} />
          <Route path="/host/reviews" element={<h1>Reviews Page</h1>} />
          <Route path="/host/vans" element={<h1>Host Vans Page</h1>} />
          <Route path="/host/vans/:id" element={<h1>Host Van Detail Page</h1>} /> */}
        </Routes>
      </Router>



    </>
  )
}

export default App
