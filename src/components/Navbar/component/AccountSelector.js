import React from "react";
import { profileIcon, arrowBottomIcon } from "../../../assets/icons/index";

const profile = {
    profileImg: profileIcon,
    name: "Johndoe.near",
};

export const AccountSelector = () => {
    return (
        <div className="flex w-60 h-full px-2 justify-center items-center">
            <div className="w-full bg-white rounded-large py-3 ">
                <div className="flex justify-evenly items-center">
                    <img
                        src={profile.profileImg}
                        style={{
                            width: 25,
                            height: 25,
                        }}
                        alt={profile.name}
                    />
                    <span className="text-[text-black] bg-red font-semibold text-xs">
                        {profile.name}
                    </span>
                    <img
                        src={arrowBottomIcon}
                        alt="arrow-icon"
                        style={{ width: 10, height: 10 }}
                    />
                </div>
            </div>
        </div>
    );
};
