import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, Portfolio, Profile, Test, Form } from './index';

const Router = () => (
    <div className="container">
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/portfolio/form" component={Form}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/test" component={Test}/>
        </Switch>
    </div>
    
)

export default Router;