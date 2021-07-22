import React from "react";
import s from './FormsControls.module.css';

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <input {...input} {...restProps} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}