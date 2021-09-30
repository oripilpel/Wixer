import { FontEdit } from "./FontEdit";

export function TextEdit({ style, onUpdate }) {
    const { fontSize, color, fontFamily, textAlign } = style
    function onChange({ target }) {
        const { name, value } = target;
        const newStyle = { ...style, [name]: value };
        onUpdate('style', newStyle);
    }
    return (
        <div className="text-edit">
            <FontEdit fontSize={fontSize} color={color} fontFamily={fontFamily} textAlign={textAlign} onChange={onChange}/>
        </div>
    )
}