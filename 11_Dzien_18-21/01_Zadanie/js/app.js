import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main";

const root = createRoot(document.getElementById("app"));
root.render(<Main />);
