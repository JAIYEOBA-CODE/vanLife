
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline'
import { Home, About, Vans, VanDetails, Dashboard, Income, Reviews, HostVanDetails, HostVans, HostVanDetailsImg, HostVanDetailsDescription, HostVanDetailsPrice } from "./pages"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Layout from "./Components/Layout"
import HostLayout from "./Components/HostLayout"
const queryClient = new QueryClient();



function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Router>
          <Routes>

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />} />
              <Route path="/vans/:id" element={<VanDetails />} />

              <Route path="/host" element={<HostLayout />} >
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVans />} />


                <Route path="vans/:id" element={<HostVanDetails />} >
                  <Route index element={<HostVanDetailsDescription />} />
                  <Route path="description" element={<HostVanDetailsDescription />} />
                  <Route path="price" element={<HostVanDetailsPrice />} />
                  <Route path="image" element={<HostVanDetailsImg />} />
                </Route>

              </Route>

            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>


    </>
  )
}

export default App
