import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

export const AppRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                return <Component {...props} />;
            }}
        />
    );
};
