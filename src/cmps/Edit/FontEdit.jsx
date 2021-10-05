import { PrettoSlider } from "../PrettoSlider";
import { FontEditTextAlign } from "../FontEditTextAlign";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { MenuItem, Select } from "@mui/material";


export function FontEdit({ fontSize, textAlign, color, fontFamily, onChange }) {
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
            {textAlign && <div className="font-align">
                <div className="label">
                    <label htmlFor="textAlign">Align:</label>
                </div>
                <div className="input">
                    <FontEditTextAlign name="textAlign" value={textAlign, 'left'} onChange={onChange} />
                </div>
            </div>}
            <div className="font-color">
                <div className="label">
                    <label htmlFor="color">Color:</label>
                </div>
                <div className="input">
                    <input type="color" name="color" id="color" defaultValue={color} onChange={onChange} />
                </div>
            </div>
            <div className="font-family">
                <div className="input">
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="font-family">Familiy</InputLabel>
                            <Select
                                labelId="font-family"
                                id="font-family"
                                value={fontFamily}
                                label="Familiy"
                                name="fontFamily"
                                onChange={onChange}
                                size="small"
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
                        </FormControl>
                    </Box>
                </div>
            </div>
        </div>
    )
}

