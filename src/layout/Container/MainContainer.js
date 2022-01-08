import React from "react";
import "../layout.css";

const MainContainer = ({ children }) => {
    return (
        <div className="flex flex-1 justify-center">
            <div className="main-container max-w-screen-sm">{children}</div>
        </div>
    );
};

export default MainContainer;
