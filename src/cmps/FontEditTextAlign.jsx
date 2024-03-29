import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export function FontEditTextAlign({ name, value, onChange }) {

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            const res = { target: { name, value: newAlignment } }
            onChange(res)
        }
    };

    return (
        <Stack direction="row" spacing={4} className='font-edit-text-align'>
            <ToggleButtonGroup
                value={value}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton value="left" aria-label="left aligned">
                    <FormatAlignLeftIcon fontSize="small" />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    <FormatAlignCenterIcon fontSize="small" />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                    <FormatAlignRightIcon fontSize="small" />
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    );
}
