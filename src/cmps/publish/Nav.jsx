import { useState } from "react"

export function Nav({ style, data, setLoadHamb, isMenuOpen }) {
    setLoadHamb(true)

    function Link({ link, hoverColor, color }) {
        const [c, setColor] = useState(color);
        return <a
            onMouseEnter={() => {
                setColor(hoverColor ? hoverColor : 'black')
            }}
            onMouseLeave={() => {
                setColor(color ? color : 'black')
            }}
            href={`#${link.url}`}
            style={{ padding: '5px', color: c }}
            className="link"

        >{link.txt}</a>
    }
    return (
        <div className="publish-nav">
            <nav style={style} className={`nav clear-list links flex ${isMenuOpen ? "active" : ""}`}>
                {data.links.map((link, idx) => {
                    return (
                        <Link
                            key={`navlink${idx}`}
                            className="clean-href link flex align-center"
                            link={link}
                            color={style.color}
                            hoverColor={data.hoverColor}
                            onClick={() => toggleMenu(false)}
                        />
                    )
                })}
            </nav>
        </div>
    )
}