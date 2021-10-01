import React from 'react';
import { styled } from '@mui/system';
import { TextField } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import { HeightEdit } from './HeightEdit';

export function GMapEdit({ style, data, onUpdate }) {
    const [expanded, setExpanded] = React.useState('map')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const onChange = ({ target }) => {
        const { name, value } = target;
        onUpdate('data', { ...data, [name]: value });
    }
    const onStyleChange = ({ target }) => {
        const { name, value } = target;
        const newStyle = { ...style };
        newStyle[name] = value;
        onUpdate('style', newStyle);
    }
    const { lat, lng, markerName, height } = data;
    return (
        <div className="gmap-edit">
            <Accordion expanded={expanded === 'map'} onChange={handleChange('map')}>
                <AccordionSummary aria-controls="mapd-content" id="mapd-header">
                    Map
                </AccordionSummary>
                <AccordionDetails>
                    <div className="field">
                        <TextField type="number" id="latitude" label="latitude" name="lat" variant="outlined" fullWidth defaultValue={lat} onChange={onChange} />
                    </div>
                    <div className="field">
                        <TextField type="number" id="longitude" label="longitude" name="lng" variant="outlined" fullWidth defaultValue={lng} onChange={onChange} />
                    </div>
                    <div className="field">
                        <TextField id="marker-name" label="Name" variant="outlined" name="markerName" fullWidth defaultValue={markerName} onChange={onChange} />
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'height'} onChange={handleChange('height')}>
                <AccordionSummary aria-controls="heightd-content" id="heightd-header">
                    Height
                </AccordionSummary>
                <AccordionDetails>
                    <HeightEdit value={height} name="height" onChange={onStyleChange} />
                </AccordionDetails>
            </Accordion>
        </div>

    )
}