import React from "react";
import { Col } from "reactstrap";
import { Navbar } from "../components/Navbar";
import Home from "../screens/Home";
import MainContainer from "./Container/MainContainer";

export const HomeLayout = () => {
    return (
        <MainContainer>
            <Col className="w-100">
                <Navbar />
                <Home />
            </Col>
        </MainContainer>
    );
};
