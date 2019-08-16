import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, Portfolio, Profile, W3CCheck } from './index';

const Router = () => (
    <div className="container">
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/w3ccheck" component={W3CCheck}/>
        </Switch>
    </div>
    
)

export default Router;