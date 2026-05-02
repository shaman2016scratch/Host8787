import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RenderUI } from "./playground/render-ui.jsx";

if (!localStorage.getItem('Host8787-language')) {
	localStorage.setItem('Host8787-language', 'ru')
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
        <RenderUI />
	</StrictMode>
);