import React from "react";

const Card = ({ children, ...rest }) => {
    return (
        <div {...rest} className="h-30 mb-4 rounded-small p-2">
            {children}
        </div>
    );
};

export default Card;
