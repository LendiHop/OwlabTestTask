import React from 'react';
import s from './Header.module.scss';
import {Navbar} from "./Navbar/Navbar";

export function Header(props) {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Navbar/>
            </div>
        </header>
    );
}