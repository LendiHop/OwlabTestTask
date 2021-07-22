import React from 'react';
import s from './Profile.module.scss';
import {Button} from "../common/components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {setLoggedOut} from "../../n1-main/m2-bll/reducers/auth-reducer";

export const Profile = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(setLoggedOut());
    }

    if(!isAuth) {
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={s.profile}>
            <div className={s.container}>
                <div className={s.photo}>
                    {isAuth && <Button text="Logout" onClick={onClickHandler}/>}
                </div>
                <div className={s.info}>
                    <h1 className={s.name}>Danyl <span>Mishyn</span></h1>
                    <p className={s.status}>Creative Frontend Developer based in Kyiv and passionate about building
                        beautiful user interfaces.</p>
                </div>
            </div>
        </div>
    );
}
