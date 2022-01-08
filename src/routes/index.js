import { Redirect } from "react-router-dom";
import Experience from "../screens/Expoerience";
import Home from "../screens/Home";

const routes = [
    { path: "/home", exact: true, component: Home },
    { path: "/experience/:id", component: Experience },
    { path: "/", exact: true, component: () => <Redirect to="/home" /> },
];

export { routes };
