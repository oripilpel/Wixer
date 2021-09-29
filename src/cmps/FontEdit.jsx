import { MenuItem, Select } from "@mui/material";
import { FontEditTextAlign } from "./FontEditTextAlign";

import { PrettoSlider } from "./PrettoSlider";

export function FontEdit({ fontSize, color, fontFamily, textAlign, onChange }) {
    return (
        <div className="font-edit">
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
            <div className="font-align">
                <div className="label">
                    <label htmlFor="textAlign">Align:</label>
                </div>
                <div className="input">
                    <FontEditTextAlign name="textAlign" value={textAlign || 'left'} onChange={onChange} />
                </div>
            </div>
            <div className="font-color">
                <div className="label">
                    <label htmlFor="color">Color:</label>
                </div>
                <div className="input">
                    <input type="color" name="color" id="color" value={color} onChange={onChange} />
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
                        <MenuItem value="montserrat">montserrat</MenuItem>
                        <MenuItem value="forum">Forum</MenuItem>
                    </Select>
                </div>
            </div>
        </div>
    )
}