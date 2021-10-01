import { useState } from "react"

export function Nav({ style, data }) {

    function Link({ link, hoverColor, color }) {
        const [c, setColor] = useState(color);
        return <a
            onMouseEnter={() => {
                setColor(hoverColor ? hoverColor : 'black')
            }}
            onMouseLeave={() => {
                setColor(color ? color : 'black')
            }}
            href={`#${link.txt}`}
            style={{ padding:'5px',color: c }}
            className="link"

        >{link.txt}</a>
    }
    return (
        <nav style={style} className="nav clear-list">
            {data.links.map((link, idx) => <Link link={link} color={style.color} hoverColor={data.hoverColor} key={`navlink${idx}`} className="clean-href" />)}
        </nav>
    )
}
