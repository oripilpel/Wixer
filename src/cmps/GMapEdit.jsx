import React, { useCallback } from 'react';
import { TextField } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import { HeightEdit } from './HeightEdit';
import { geocodeService } from '../services/geocode.service';
import debounce from 'lodash.debounce';

export function GMapEdit({ style, data, onUpdate }) {
    const [expanded, setExpanded] = React.useState('map')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    }
    const onChange = ({ target }) => {
        const { name, value } = target;
        onUpdate('data', { ...data, [name]: value });
        if (name === 'location') debouncedChangeHandler(value);
    }
    const onStyleChange = ({ target }) => {
        const { name, value } = target;
        const newStyle = { ...style };
        newStyle[name] = value;
        onUpdate('style', newStyle);
    }
    const onLocationChange = async (loc) => {
        const location = await geocodeService.getGeoLocation(loc);
        if (location) onUpdate('data', { ...data, lat: location.lat, lng: location.lng, location: loc });
    }
    const debouncedChangeHandler = useCallback(
        debounce(onLocationChange, 300)
        , []);
    const {markerName, height, location } = data;
    return (
        <div className="gmap-edit">
            <Accordion expanded={expanded === 'map'} onChange={handleChange('map')}>
                <AccordionSummary aria-controls="mapd-content" id="mapd-header">
                    Map
                </AccordionSummary>
                <AccordionDetails>
                    <div className="field">
                        <TextField type="text" label="Location" name="location" variant="outlined" defaultValue={location} onChange={onChange} />
                    </div>
                    <div className="field">
                        <TextField id="marker-name" label="Marker name" variant="outlined" name="markerName" fullWidth defaultValue={markerName} onChange={onChange} />
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