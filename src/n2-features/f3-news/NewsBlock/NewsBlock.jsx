import React from 'react';
import s from './NewsBlock.module.scss';
import {Button} from "../../common/components/Button/Button";

export const NewsBlock = (props) => {
    return (
        <div className={s.newsBlock}>
            <div className={s.image} style={{ backgroundImage: `url(${props.icon})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <Button text="Watch"/>
            </div>
            <div className={s.info}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
}
