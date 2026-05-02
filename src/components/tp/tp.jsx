import { genLinkInService } from "../../lib/genUrl.js"
import { translate } from "../../lib/translations.js"
import { Message } from "../message.jsx"
import metadata from "../../lib/metadata.js"

const TopPanel = () => {
    return (
        <div href='top-panel'>
            <a href={metadata.path2}>{metadata.name}</a>
        </div>
    )
}

export default TopPanel