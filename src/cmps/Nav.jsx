export function Nav({ style, data, update }) {

    return (
        <nav style={style} className="nav clear-list">
            {data.links.map((link, idx) => {
                return (
                    <p
                        onMouseEnter={(ev) => { console.log(ev, ev.target) }}
                        key={idx}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        onBlur={(ev) => { update(idx, ev.target.innerText) }}
                        style={{ padding: '0 20px' }}>
                        {link.txt}
                    </p>
                )
            }
            )}
        </nav>
    )
}