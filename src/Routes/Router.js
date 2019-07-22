import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, Portfolio, Profile, PortfolioView } from './index';

const Router = () => (
    <div className="container">
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/portfolio/:id" component={PortfolioView}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
    </div>
    
)

export default Router;