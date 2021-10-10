import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import { FontEdit } from "./FontEdit";
import { FlexEdit } from './Edit/FlexEdit';

export function TextEdit({ style, onUpdate }) {
    const [expanded, setExpanded] = useState('font')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }
    const { fontSize, color, fontFamily, textAlign, isFlex, justifyContent, alignItems } = style

    function onChange({ target }) {
        const { name, value } = target
        const newStyle = { ...style, [name]: value }
        onUpdate('style', newStyle)
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
            <Accordion expanded={expanded === 'flex'} onChange={handleChange('flex')}>
                <AccordionSummary aria-controls="fontd-content" id="fontd-header">
                    Flex
                </AccordionSummary>
                <AccordionDetails>
                    <FlexEdit onChange={onChange}  isFlex={isFlex} justifyContent={justifyContent} alignItems={alignItems} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}