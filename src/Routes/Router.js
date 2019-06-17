import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, Portfolio, Profile } from './index';

const Router = () => (
    <Switch>
        <div className="container">
            <Route exact path="/" component={Main}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/profile" component={Profile}/>
        </div>
    </Switch>
)

export default Router;