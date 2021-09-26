import { InputLabel, Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useState } from 'react';



export function Flex({ flexDirection }) {
    const [flex, setFlex] = useState('')

    const handleChange = ({ target }) => {
        console.log(target.value);
    }

    return (<div>

        <InputLabel>Fo</InputLabel>
        <Select
            onChange={handleChange}
            value={flex} >
            <MenuItem value="column">Column</MenuItem>
            <MenuItem value="row">Row</MenuItem>
        </Select>
    </div>
    )
}