import { translateStyle } from "../helpers";

export function Image({ data, style }) {
    return (
        <img src={data.url} style={style} />
    )
}