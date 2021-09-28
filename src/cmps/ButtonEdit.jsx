import { FontEdit } from "./FontEdit";

export function ButtonEdit({ style, onUpdate }) {
    const { fontSize, color, fontFamily, textAlign, backgroundColor } = style
    function onChange({ target }) {
        const { name, value } = target;
        const newStyle = { ...style, [name]: value };
        onUpdate('style', newStyle);
    }
    return (
        <div className="button-edit">
            <FontEdit fontSize={fontSize} color={color} fontFamily={fontFamily} textAlign={textAlign} onChange={onChange}/>
            <label htmlFor="background-color">Background color</label>
            <input type="color" name="backgroundColor" id="background-color" value={backgroundColor} onChange={onChange} />
        </div>
    )
}