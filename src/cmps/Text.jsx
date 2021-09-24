import { translateStyle } from "../helpers";

export function Text({ data, style, update }) {
    function onBodyChange({ target }) {
        update('data', { txt: target.innerText });
    }
    return (
        <div className="text" contentEditable="true" onKeyUp={onBodyChange} suppressContentEditableWarning={true} style={style}>
            {data.txt}
        </div>
    )
}