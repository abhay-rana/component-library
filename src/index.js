import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.css";

import ModalProvider from "./provider/portal-provider";

import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ModalProvider>
		<App />
	</ModalProvider>
);
