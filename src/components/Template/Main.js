import React from 'react'
import NavBar from '../Header/NavBar'

const Template = (props) => (
    <div>
        <NavBar />
        <p className="page-info">
        {props.title}:
        </p>
        <ul className={props.status}>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
        </ul>
    </div>
);

export default Template
