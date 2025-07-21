import React from 'react'
import "./navbar.css"
import { Link, NavLink } from 'react-router'

const NavBar = () => {
    return (
        <nav>
            <h1>Task Manager</h1>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/add"}>Add Task</NavLink>
                </li>
                <li>
                    <NavLink to={"/view-task"}>View Task</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
