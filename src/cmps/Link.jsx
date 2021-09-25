export function Link({ data, style }) {
    return <a className="clean-href" href={data.href} style={style}>{data.label}</a>
}