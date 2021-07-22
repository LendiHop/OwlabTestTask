import React from "react";
import s from './Button.module.scss';

export function Button(props) {
    return (
        <button className={s.btn} onClick={props.onClick}>{props.text}</button>
    );
}