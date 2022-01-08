import React from "react";

export const Buttons = (props) => {
    const { label, icon, size } = props;
    return (
        <>
            <button
                className="flex w-20 justify-center items-center"
                {...props}
            >
                <img
                    src={icon}
                    style={{
                        width: size,
                        height: size,
                    }}
                    alt={`${label}-img`}
                />
            </button>
        </>
    );
};
