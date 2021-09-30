import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import { FontEdit } from "./FontEdit";

export function TextEdit({ style, onUpdate }) {
    const [expanded, setExpanded] = React.useState('font')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const { fontSize, color, fontFamily, textAlign } = style
    function onChange({ target }) {
        const { name, value } = target;
        const newStyle = { ...style, [name]: value };
        onUpdate('style', newStyle);
    }
    return (
        <div className="text-edit">
            <Accordion expanded={expanded === 'font'} onChange={handleChange('font')}>
                <AccordionSummary aria-controls="fontd-content" id="fontd-header">
                    Font
                </AccordionSummary>
                <AccordionDetails>
                    <FontEdit fontSize={fontSize} color={color} fontFamily={fontFamily} textAlign={textAlign} onChange={onChange} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}