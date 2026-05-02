import { Message } from "../../components/message.jsx"
import { translate } from "../../lib/translations.js"
import metadata from "../../lib/metadata.js"

const MainPage = () => {
    return (
        <div>
            <h1>{metadata.name}</h1>
        </div>
    )
}

export default MainPage