import { useEffect, useState } from "react";
import { COMPONENT } from "../constants";
import { Actions } from "./Actions";


function Paragraph({ idx, link, update, path, color, hoverColor }) {
    const [actionsVisible, setActionsVisible] = useState(false);
    const [c, setColor] = useState((color) ? color : 'black');
    useEffect(() => { setColor(color) }, [color])
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
        style={{ padding: '3px', position: 'relative', color: c, margin: 0 }}>
        {link.txt}
        {actionsVisible && <Actions path={path} type={COMPONENT} />}
    </p>
}

export function Nav({ style, data, update, path }) {
    useEffect(() => { }, [data])
    return (
        <div className="publish-nav">
            <nav style={style} className={`nav clear-list links flex`}>
            {data.links.map((link, idx) => {
                return (
                    <Paragraph link={link} idx={idx} key={`${path}-${idx}`} update={update} path={`${path}-${idx}`} color={style.color} hoverColor={data.hoverColor} />
                )
            }
            )}
        </nav>
        </div>

    )
}