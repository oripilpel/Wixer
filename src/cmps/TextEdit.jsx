export function TextEdit({ style, onUpdate }) {
    const { fontSize, color, fontFamily } = style
    function onChange({ target }) {
        const { name, value } = target;
        const newStyle = { ...style, [name]: value };
        onUpdate('style', newStyle);
    }
    return (
        <div className="text-edit">
            <label htmlFor="font-size">Font Size:</label>
            <input type="range" name="fontSize" id="font-size" value={fontSize} min="16" max="100" onChange={onChange} />
            <label htmlFor="color">Color:</label>
            <input type="color" name="color" id="color" value={color} onChange={onChange} />
            <label htmlFor="font-family">Font:</label>
            <select name="fontFamily" id="font-family" value={fontFamily} onChange={onChange}>
                <option value="Arial">Arial</option>
                <option value="caveat">Caveat</option>
                <option value="montserrat">montserrat</option>
            </select>
        </div>
    )
}