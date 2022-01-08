import React from "react";
import { useHistory } from "react-router-dom";
import {
    backIcon,
    frameIcon,
    notificationIcon,
    settingsIcon,
} from "../../assets/icons/index";
import { Buttons } from "../Button";
import { AccountSelector } from "./component/AccountSelector";

export const Navbar = () => {
    const history = useHistory();
    return (
        <div className="navbar-container w-screen sm:w-full">
            <div className="flex h-full justify-center">
                <Buttons
                    onClick={() => history.goBack()}
                    label="back"
                    size={30}
                    icon={backIcon}
                />
                <Buttons
                    onClick={() => history.replace("/home")}
                    label="home"
                    size={25}
                    icon={frameIcon}
                />
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
