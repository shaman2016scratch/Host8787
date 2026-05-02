import { useEffect, useState } from "react";
import MainPage from './pages/main/main.jsx'

const App = () => {
	const page = window.location.pathname.split("/blogs")[1]
	if (page === "/" || page === "/index.html" || page === "/index") {
	    return (
            <MainPage />
	    );
	}
};

export default App;