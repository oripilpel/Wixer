import { MenuItem, Select } from "@mui/material";
import { PrettoSlider } from "./PrettoSlider";

export function FontEdit({ fontSize, color, fontFamily, textAlign, onChange }) {
    return (
        <>
            <div>
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
            <div>
                <label htmlFor="color">Color:</label>
                <input type="color" name="color" id="color" value={color} onChange={onChange} />

            </div>
            <div>
                <label htmlFor="font-family">Font:</label>
                <Select
                    labelId="font-familyl"
                    id="font-family"
                    value={fontFamily}
                    label="Font family"
                    name="fontFamily"
                    onChange={onChange}
                >
                    <MenuItem value="Arial">Arial</MenuItem>
                    <MenuItem value="caveat">Caveat</MenuItem>
                    <MenuItem value="montserrat">montserrat</MenuItem>
                    <MenuItem value="forum">Forum</MenuItem>
                </Select>
            </div>
            <div>
                <label htmlFor="text-align">Font:</label>
                <select name="textAlign" id="text-align" value={textAlign || 'left'} onChange={onChange}>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </>
    )
}