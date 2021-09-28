
export function Text({ data, style }) {
    return (
        <div className="text" style={style}>
            {data.txt}
        </div>
    )
}