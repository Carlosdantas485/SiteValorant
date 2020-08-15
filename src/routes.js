import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from './pages/Register';
import Home from './pages/Home';
import Avatars from './pages/Avatars';
import Ranking from './pages/Ranking';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/avatars" component={Avatars} />
                <Route path="/ranking" component={Ranking} />
            </Switch>
        </BrowserRouter>
    );
}
