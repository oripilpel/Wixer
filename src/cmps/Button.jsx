import { useState } from "react";

export function Button({ style, data, update }) {
    const [color, setColor] = useState([style.backgroundColor])
    function onBodyChange({ target }) {
        update('data', { txt: target.innerText });
    }
    return (
        <button
            className="btn"
            onMouseEnter={() => { setColor(data.hoverColor) }}
            onMouseLeave={() => { setColor(style.backgroundColor) }}
            style={{ ...style, backgroundColor: color }}
            contentEditable="true" onBlur={onBodyChange}
            suppressContentEditableWarning={true}>
            {data.txt}
        </button>
    )
}