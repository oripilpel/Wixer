import { useState } from "react";
import { COMPONENT } from "../constants";
import { Actions } from "./Actions";


function Paragraph({ idx, link, update, path, color, hoverColor }) {
    const [actionsVisible, setActionsVisible] = useState(false);
    const [c, setColor] = useState((color) ? color : 'black');
    return <p
        onMouseEnter={() => {
            setActionsVisible(true)
            setColor(hoverColor ? hoverColor : 'black')
        }}
        onMouseLeave={() => {
            setActionsVisible(false)
            setColor(color ? color : 'black')
        }}
        className="link"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={(ev) => { update(idx, ev.target.innerText) }}
        style={{ padding: '0 20px', position: 'relative', color: c,margin:0 }}>
        {link.txt}
        {actionsVisible && <Actions path={path} type={COMPONENT} />}
    </p>
}

export function Nav({ style, data, update, path }) {

    return (
        <nav style={style} className="nav clear-list">
            {data.links.map((link, idx) => {
                return (
                    <Paragraph link={link} idx={idx} key={`nav${Date.now() * idx}`} update={update} path={`${path}-${idx}`} color={data.color} hoverColor={data.hoverColor} />
                )
            }
            )}
        </nav>
    )
}