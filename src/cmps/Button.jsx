import { useState } from "react";

export function Button({ style, data }) {
    const [color, setColor] = useState([style.backgroundColor])

    return (
        <button className="btn" onMouseEnter={() => { setColor(data.hoverColor) }}
            onMouseLeave={() => { setColor(style.backgroundColor) }}
            style={{ ...style, backgroundColor: color }}>{data.txt}</button>
    )
}