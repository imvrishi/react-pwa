import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <div className="navbar">
        <h3>Task Manager</h3>
        <Link to="/">Current Tasks</Link>
        <Link to="/completed">Completed Tasks</Link>
    </div>
);

export default NavBar
