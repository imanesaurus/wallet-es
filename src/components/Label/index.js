import React from "react";

export const Label = ({ title, style }) => {
    return (
        <div
            className="text-lg font-semibold text-[secondary] pt-4 pb-2"
            style={{ ...style }}
        >
            {title}
        </div>
    );
};

export const SubLabel = ({ title, style }) => {
    return (
        <div
            className="text-sm font-normal text-[text-gray]"
            style={{ ...style }}
        >
            {title}
        </div>
    );
};
