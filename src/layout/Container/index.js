import React from "react";

const ContainerColumn = ({ children, style }) => {
    return (
        <div className="flex flex-col" style={{ ...style }}>
            {children}
        </div>
    );
};

const ContainerRow = ({ children, style }) => {
    return (
        <div className="flex flex-row" style={{ ...style }}>
            {children}
        </div>
    );
};

export { ContainerColumn, ContainerRow };
