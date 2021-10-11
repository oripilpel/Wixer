
export function Text({ data, style }) {
    return (
        <div className={`text ${(+(style.fontSize.slice(0, style.fontSize.length - 2)) >= 45) ? 'big' : ''}`} style={style}>
            {data.txt}
        </div>
    )
}