import Experience from "../screens/Expoerience";
import Home from "../screens/Home";

const routes = [
    { path: "/home", exact: true, component: Home },
    { path: "/experience/:id", component: Experience },
];

export { routes };
