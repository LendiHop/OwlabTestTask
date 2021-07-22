import React from 'react';
import s from '../../n1-main/m1-ui/Main/Main.module.scss';

export const Error404 = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.info}>
                    <h1 className={s.title}><span>404</span> - Page not found</h1>
                </div>
            </div>
        </div>
    );
}