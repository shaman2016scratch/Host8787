import metadata from "./metadata.js";

const genLinkInService = (path) => {
    return `${metadata.path}${path}`
}

const genLink= (url, path) => {
    return `${url}${path}`
}

export { genLinkInService, genLink }