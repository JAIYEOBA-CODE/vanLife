import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'




const HostLayout = () => {
    const activeLinkStyle = {
        textDecoration: "overline",
        fontWeight: "bold",
        textDecorationColor: "yellow",

    };
    return (
        <div>
            <ul className='navbar'>
                <li>
                    <NavLink to="." style={({ isActive }) => isActive ? activeLinkStyle : undefined} end>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="income" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Income</NavLink>
                </li>
                <li>
                    <NavLink to="reviews" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Reviews</NavLink>
                </li>
                <li>
                    <NavLink to="vans" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Vans</NavLink>
                </li>
            </ul >
            <Outlet />
        </div >
    )
}

export default HostLayout