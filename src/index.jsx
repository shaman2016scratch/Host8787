import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RenderUI } from "./playground/render-ui.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
        <RenderUI />
	</StrictMode>
);