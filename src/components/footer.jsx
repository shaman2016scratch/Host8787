import { Message } from "./message.jsx"
import { translate } from "../lib/translations.js"
import { genLinkInService } from "../lib/genUrl.js"
import metadata from "../lib/metadata.js"

const Footer = () => {
    return (
        <footer>
            <p class='footer-text'>{translate('footer.license', 'message')}</p>
        </footer>
    )
}

export default Footer