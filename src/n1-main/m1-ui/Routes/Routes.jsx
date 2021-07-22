import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Error404} from "../../../n2-features/f0-404/Error404";
import {Profile} from "../../../n2-features/f2-profile/Profile";
import {News} from "../../../n2-features/f3-news/News";
import {Main} from "../Main/Main";
import {Login} from "../../../n2-features/f1-auth/a1-login/Login";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Main/>}/>
            <Route path="/news" render={() => <News/>}/>
            <Route path="/login" render={() => <Login/>}/>
            <Route path="/profile" render={() => <Profile/>}/>
            <Route path={"/404"} render={() => <Error404/>}/>
            <Redirect from="*" to="/404"/>
        </Switch>
    );
}
