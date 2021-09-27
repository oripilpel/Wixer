export function Nav({ style, data, isEditing }) {
    const changeNavText = (ev,idx) => { data.links[idx].txt=ev.target.innerText}
    return (
        <nav style={style} className="nav clear-list">
            {data.links.map((link, idx) => <p
                contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={(ev) => { changeNavText(ev,idx) }}
                style={{ padding: '10px' }} key={link.id}>{link.txt}</p>)}
        </nav>
    )
}