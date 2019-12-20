import React from 'react';
import './dropdown-menu.styles.scss';
import {Link} from 'react-router-dom';


const DropdownMenu = ({ className, borderLine, newUser }) => (
    <div className={className}>
        <Link className={`${newUser ? 'custom-height' : ''} dropdown-item`} to="/">Action</Link>
        <Link className={`${newUser ? 'custom-height' : ''} dropdown-item`} to="/">Another action</Link>
        {borderLine ? (
            <div className={`${borderLine ? 'dropdown-divider': 'lg-none'}`}></div>
        ): null}
        <Link className={`${newUser ? 'custom-height' : ''} dropdown-item`} to="/">Something else here</Link>
    </div>
)

export default DropdownMenu;
