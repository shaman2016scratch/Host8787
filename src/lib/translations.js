import { messages, warns } from "./messages.js"

let translations = {
    messages: {
        en: {}
    },
    warns: {
        en: {}
    },
    config: {}
}

function translate(id, type) {
    let lang = 'ru'
    if (translations.config.default === lang) {
        lang = 'default'
    }
    if (type === 'message') {
        if (!translations.messages[lang][id]) {
            return message[id]
        } else {
            return translations.messages[lang][id]
        }
    } else if (type === 'warn') {
        if (!translations.warns[lang][id]) {
            return warn[id]
        } else {
            return translations.warns[lang][id]
        }
    }
}

export { translations, translate }