import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { MenuItem, Select } from "@mui/material";
import { PrettoSlider } from "../PrettoSlider";

export function FlexEdit({ isFlex, gap, flexGrow, justifyContent, alignItems, onChange }) {
    return (
        <div className="flex-edit flex direction-column">
            <div>
            </div>
            <div className="align-items-edit">
                <div className="input">
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="align-items">Align Items</InputLabel>
                            <Select
                                labelId="align-items"
                                id="align-items"
                                value={alignItems}
                                label="Justify"
                                name="alignItems"
                                onChange={onChange}
                                size="small"
                            >
                                <MenuItem value="center">Center</MenuItem>
                                <MenuItem value="flex-start">Flex start</MenuItem>
                                <MenuItem value="flex-end">Flex end</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            <div className="justify-content-edit">
                <div className="input">
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="justify-content">Justify Content</InputLabel>
                            <Select
                                labelId="justify-content"
                                id="justify-content"
                                value={justifyContent}
                                label="Justify"
                                name="justifyContent"
                                onChange={onChange}
                                size="small"
                            >
                                <MenuItem value="center">Center</MenuItem>
                                <MenuItem value="flex-start">Flex start</MenuItem>
                                <MenuItem value="flex-end">Flex end</MenuItem>
                                <MenuItem value="space-between">Space between</MenuItem>
                                <MenuItem value="space-around">Space Around</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            {gap && <div className="space-between-edit">
                <label htmlFor="gap">Space Between:</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={+gap}
                    min={16}
                    max={100}
                    name="gap"
                    onChange={onChange}
                    id="gap"
                />
            </div>}
            {flexGrow && <div className="space-between-edit">
                <label htmlFor="flexGrow">Flex Grow:</label>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={+flexGrow}
                    min={16}
                    max={100}
                    name="flexGrow"
                    onChange={onChange}
                    id="flexGrow"
                />
            </div>}

        </div>
    )
}