export function Nav({ style, data }) {
    const changeNavText = (ev, idx) => { data.links[idx].txt = ev.target.innerText }
    return (
        <nav style={style} className="nav clear-list">
            {data.links.map((link, idx) => {
                return (
                    <p
                        key={idx}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        onBlur={(ev) => { changeNavText(ev, idx) }}
                        style={{ padding: '10px' }}>
                        {link.txt}
                    </p>
                )
            }
            )}
        </nav>
    )
}