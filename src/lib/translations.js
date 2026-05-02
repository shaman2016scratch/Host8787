import { messages, warns } from "./messages.js"

let translations = {
    messages: {
        en: {}
    },
    warns: {
        en: {}
    },
    config: {
        default: 'ru'
    }
}

function translate(id, type) {
    let lang = localStorage.getItem('Host8787-language')
    if (type === 'message') {
        if (lang !== translations.config.default) {
            if (!translations.messages[lang][id]) {
                return messages[id]
            } else {
                return translations.messages[lang][id]
            }
        } else {
            return messages[id]
        }
    } else if (type === 'warn') {
        if (lang !== translations.config.default) {
            if (!translations.messages[lang][id]) {
                return messages[id]
            } else {
                return translations.messages[lang][id]
            }
        } else {
            return messages[id]
        }
    }
}

export { translations, translate }