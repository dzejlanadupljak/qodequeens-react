import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate, Link } from "react-router-dom";

const Home=()=>{
    return(
        <div>
            <h1>pocetna</h1>
                <nav>
                    <Link to="about">o nama</Link>
                    <Link to="constact">kontakt</Link>
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>
            <hr />
            <Outlet/>
            
        </div>
    )
}

const About=()=><p>o nama</p>
const Contact=()=><p>kontakt</p>

const ProtectedRoute=()=>{
    const isAuthenticated=localStorage.getItem("isAuthenticated")
    return isAuthenticated ? <Outlet/> : <p>nema pristipa</p>
}

const Dashboard=()=><p>(zasticeno)</p>

export default function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

<Route path="/home" element={<Home/>}>

<Route index element={<p>Dobrodošli na početnu stranu!</p>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
</Route>
<Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
        </Route>

        </Routes>
        </BrowserRouter>
    )
}