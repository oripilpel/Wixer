import { useEffect, useState } from "react";

export function Button({ style, data, update }) {
    useEffect(() => { setColor(style.backgroundColor) }, [style, data])
    const [color, setColor] = useState(style.backgroundColor)
    function onBodyChange({ target }) {
        update('data', { ...data, txt: target.innerText });
    }
    return ( 
        <div
            className="btn flex "
            onMouseEnter={() => { setColor(data.hoverColor) }}
            onMouseLeave={() => { setColor(style.backgroundColor) }}
            style={{ ...style, backgroundColor: color, display: 'inline-block' }}
            contentEditable="true"
            onBlur={onBodyChange}
            suppressContentEditableWarning={true}>
            {data.txt}
        </div>
    )
}