export function Nav({ style, data }) {
    return (
        <nav style={style} className="nav clear-list">
            {data.links.map((link, idx) => <a key={`navlink${idx}`} className="clean-href" href={`#${link.txt}`} style={{ padding: '0 20px', color: (style.color) ? style.color : 'black' }}>{link.txt}</a>)}
        </nav>
    )
}
