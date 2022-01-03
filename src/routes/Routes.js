import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {routes
} from "./index";
import { ThroughProvider } from 'react-through'



function authRoutes( routes) {

    return (routes.map(({ children, path, component: Component }, index) =>

    (
        <Route
            key={index}
            path={path}
            exact
            render={props => (
                < Component {...props} />

            )}
        />

    )))

};



const Routes = () => (
    <BrowserRouter>
        <Switch>
         
            {authRoutes(routes)}
            

        </Switch>
    </BrowserRouter>
);

export default Routes;
