import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, Portfolio, Profile, Test, Auth } from './index';

const Router = () => (
    <div className="container">
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/test" component={Test}/>
            <Route path="/auth" component={Auth}/>
        </Switch>
    </div>
    
)

export default Router;