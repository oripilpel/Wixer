import { translateStyle } from "../helpers";

export function Text({ data, style, update }) {
    const newStyle = translateStyle({ ...style });
    function onBodyChange({ target }) {
        update('data', { txt: target.innerText });
    }
    return (
        <div className="text" contentEditable="true" onKeyUp={onBodyChange} suppressContentEditableWarning={true} style={newStyle}>
            {data.txt}
        </div>
    )
}