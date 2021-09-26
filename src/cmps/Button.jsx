export function Button({ style, data }) {
    return (
        <button className="btn" style={style}>{data.txt}</button>
    )
}