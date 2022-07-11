import React from "react";
import {createRoot} from "react-dom/client";
import RoutePaths from "./RoutePaths";
import "./file.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <RoutePaths/>
    </React.StrictMode>
);