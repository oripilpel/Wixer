import { translateStyle } from "../helpers";

export function Image({ data, style }) {
    const newStyle = translateStyle({...style});
    return (
        <img src={data.url} style={newStyle} />
    )
}