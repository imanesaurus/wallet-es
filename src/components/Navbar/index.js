import React from "react";
import { Buttons } from "../Button";
import {
    backIcon,
    frameIcon,
    notificationIcon,
    settingsIcon,
} from "../../assets/icons/index";
import { AccountSelector } from "./component/AccountSelector";

export const Navbar = () => {
    return (
        <div className="navbar-container w-screen">
            <div className="flex h-full justify-center">
                <Buttons label="back" size={30} icon={backIcon} />
                <Buttons label="home" size={25} icon={frameIcon} />
                <AccountSelector />
                <Buttons
                    label="notification"
                    size={30}
                    icon={notificationIcon}
                />
                <Buttons label="settings" size={30} icon={settingsIcon} />
            </div>
        </div>
    );
};
