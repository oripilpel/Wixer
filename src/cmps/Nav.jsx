export function Nav({ style, data }) {
    return (
        <ul style={style} className="nav clear-list">
            {data.links.map(link => <li key={link.id}>{link.txt}</li>)}
        </ul>
    )
}