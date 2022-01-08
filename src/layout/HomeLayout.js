import React from "react";
import { Switch } from "react-router-dom";
import { Col } from "reactstrap";
import { Navbar } from "../components/Navbar";
import { routes } from "../routes";
import { AppRoute } from "../routes/route";
import MainContainer from "./Container/MainContainer";

export const HomeLayout = () => {
    return (
        <MainContainer>
            <Col className="w-screen sm:w-full">
                <Navbar />
                <Switch>
                    {routes.map((route, id) => (
                        <AppRoute
                            key={id}
                            path={route.path}
                            component={route.component}
                            {...route}
                        />
                    ))}
                </Switch>
            </Col>
        </MainContainer>
    );
};
