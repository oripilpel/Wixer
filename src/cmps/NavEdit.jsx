import { PrettoSlider } from "./PrettoSlider";
import { MenuItem, Select } from "@mui/material";


export function NavEdit({ style, onUpdate, data }) {
    const { hoverColor } = data
    const { fontSize, color, gap,fontFamily } = style
    function onChange({ target }) {
        const { name, value } = target;
        const newStyle = { ...style, [name]: value };
        onUpdate('style', newStyle);
    }
    function updateHover({ target }) {
        const newData = { ...data, hoverColor: target.value }
        onUpdate('data', newData)
    }

    return (
        <div className="text-edit">
            <div className="font-size">
                <label htmlFor="font-size">Font Size:</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={+fontSize}
                    min={16}
                    max={100}
                    name="fontSize"
                    onChange={onChange}
                    id="font-size"
                />
            </div>
            <div className="gap">
                <label htmlFor="gap">Gap</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={+gap}
                    min={10}
                    max={80}
                    name="gap"
                    onChange={onChange}
                    id="gap"
                />
            </div>
            <div className="font-color">
                <div className="label">
                    <label htmlFor="color">Color:</label>
                </div>
                <div className="input">
                    <input type="color" name="color" id="color" value={color} onChange={onChange} />
                </div>
            </div>
            <div className="hoverColor">
                <div className="label">
                    <label htmlFor="hoverColor">Hover Color:</label>
                </div>
                <div className="input">
                    <input type="color" name="hoverColor" id="hoverColor" value={hoverColor} onChange={updateHover} />
                </div>
            </div>
            <div className="font-family">
                <div className="label">
                    <label htmlFor="font-family">Font:</label>
                </div>
                <div className="input">
                    <Select
                        labelId="font-family"
                        id="font-family"
                        value={fontFamily}
                        label="Font family"
                        name="fontFamily"
                        onChange={onChange}
                    >
                        <MenuItem value="Arial">Arial</MenuItem>
                        <MenuItem value="caveat">Caveat</MenuItem>
                        <MenuItem value="montserrat">Montserrat</MenuItem>
                        <MenuItem value="forum">Forum</MenuItem>
                        <MenuItem value="roboto">Roboto</MenuItem>
                        <MenuItem value="raleway">Raleway</MenuItem>
                        <MenuItem value="courgette">Courgette</MenuItem>
                        <MenuItem value="lobster">Lobster</MenuItem>
                    </Select>
                </div>
            </div>
        </div>
    )
}