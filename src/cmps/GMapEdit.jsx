import React from 'react';
import { styled } from '@mui/system';
import { TextField } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';

export function GMapEdit({ data, onUpdate }) {
    const [expanded, setExpanded] = React.useState('map')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const onChange = ({ target }) => {
        const { name, value } = target;
        onUpdate('data', { ...data, [name]: value });
    }
    const CssTextField = styled(TextField)({
        'label + &': {
          borderBottom: 10
        },
      });
    const { lat, lng, markerName } = data;
    return (
        <Accordion expanded={expanded === 'map'} onChange={handleChange('map')}>
            <AccordionSummary aria-controls="mapd-content" id="mapd-header">
                Map
            </AccordionSummary>
            <AccordionDetails>
                <CssTextField type="number" id="latitude" label="latitude" name="lat" variant="outlined" fullWidth defaultValue={lat} onChange={onChange} />
                <CssTextField type="number" id="longitude" label="longitude" name="lng" variant="outlined" fullWidth defaultValue={lng} onChange={onChange} />
                <CssTextField id="marker-name" label="Name" variant="outlined" name="markerName" fullWidth value={markerName} onChange={onChange} />
            </AccordionDetails>
        </Accordion>

    )
}