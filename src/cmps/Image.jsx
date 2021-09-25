export function Image({ data, style }) {
    return (
        <img src={data.url} alt={data.alt || ""} style={style} />
    )
}