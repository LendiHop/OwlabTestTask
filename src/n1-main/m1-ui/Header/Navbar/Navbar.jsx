import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.scss';

export function Navbar() {
    return (
        <nav className={s.nav}>
            <NavLink exact to='/' className={s.item} activeClassName={s.active}>Main</NavLink>
            <NavLink to='/news' className={s.item} activeClassName={s.active}>News</NavLink>
            <NavLink to='/profile' className={s.item} activeClassName={s.active}>Profile</NavLink>
        </nav>
    );
}