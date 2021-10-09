import { useState, useEffect } from "react";
import { Switch } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';

export function FormEdit({ data, onUpdate }) {
    const [isDark, setIsDark] = useState(data.isDark)
    function onChange({ target }) {
        setIsDark(target.checked)
        onUpdate('data', { ...data, isDark: target.checked });
    }
    const [expanded, setExpanded] = useState('theme')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    }


    useEffect(() => {
        setIsDark(data.isDark)
    }, [data.isDark])



    return (
        <>
            <Accordion expanded={expanded === 'theme'} onChange={handleChange('theme')}>
                <AccordionSummary aria-controls="mapd-content" id="mapd-header">
                    Theme
                </AccordionSummary>
                <AccordionDetails>
                    <div className="form-edit flex justify-between align-center">
                        <label htmlFor="dark-switch">Dark Mode </label>
                        <Switch id="dark-switch" checked={isDark} onChange={onChange} />
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'fields'} onChange={handleChange('fields')}>
                <AccordionSummary aria-controls="mapd-content" id="mapd-header">
                    Fields
                </AccordionSummary>
                <AccordionDetails>
                    <div className="form-edit flex justify-between align-center">
                        <label htmlFor="dark-switch">Dark Mode </label>
                        <Switch id="dark-switch" checked={isDark} onChange={onChange} />
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    )
}