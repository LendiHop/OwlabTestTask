import React from 'react';
import s from './Main.module.scss';

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.info}>
                    <h1 className={s.title}><span>Owlab</span> Test Task</h1>
                </div>
            </div>
        </div>
    );
}
