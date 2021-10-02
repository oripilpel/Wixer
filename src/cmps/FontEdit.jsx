import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, Select } from "@mui/material";
import { FontEditTextAlign } from "./FontEditTextAlign";
import { PrettoSlider } from "./PrettoSlider";
import { useCallback } from 'react';
import debounce from 'lodash.debounce';

export function FontEdit({ fontSize, color, fontFamily, textAlign, onChange }) {
    const debouncedChangeHandler = useCallback(
        debounce(onChange, 20)
        , []);
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
                    <input type="color" name="color" id="color" defaultValue={color} onChange={debouncedChangeHandler} />
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