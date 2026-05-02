import { translate } from "../lib/translations.js";

const Message = ({id}) => {
    return (
        <div>{translate(id, 'message')}</div>
    )
}

export { Message }