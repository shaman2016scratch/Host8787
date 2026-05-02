import App from "../App.jsx";
import Footer from "../components/footer.jsx"
import TopPanel from "../components/tp/tp.jsx";

const RenderUI = () => {
    return (
        <div>
            <TopPanel />
            <App />
            <Footer />
        </div>
    )
}

export { RenderUI }