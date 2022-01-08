import React from "react";

const Image = ({ src, size, style, label }) => {
    return (
        <img
            src={src}
            alt={`${label}-icon`}
            className={`pr-2 object-contain`}
            style={{ width: size, height: size, ...style }}
        />
    );
};

export default Image;
