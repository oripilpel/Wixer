import { Accordion, AccordionDetails, AccordionSummary } from "./Accordion";
import { FontEdit } from "./Edit/FontEdit";
import React from "react";
import { BackgroundEdit } from "./Edit/BackgroundEdit";
import { SizeEdit } from "./Edit/SizeEdit";
import { FlexEdit } from "./Edit/FlexEdit";

export function ButtonEdit({ style, onUpdate, data }) {
    const [expanded, setExpanded] = React.useState('text')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const { fontSize, color, fontFamily, backgroundColor, paddingBlock, paddingInline, justifyContent, alignItems } = style
    function onChange({ target }) {
        const { name, value } = target;
        const newStyle = { ...style, [name]: value };
        onUpdate('style', newStyle);
    }

    function updateHoverColor({ target }) {
        onUpdate('data', { ...data, hoverColor: target.value });
    }
    return (
        <div className="button-edit">
            <Accordion expanded={expanded === 'text'} onChange={handleChange('text')}>
                <AccordionSummary>
                    Text
                </AccordionSummary>
                <AccordionDetails>
                    <FontEdit fontSize={fontSize} color={color} fontFamily={fontFamily} onChange={onChange} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'color'} onChange={handleChange('color')}>
                <AccordionSummary>
                    Colors
                </AccordionSummary>
                <AccordionDetails>
                    <BackgroundEdit backgroundColor={backgroundColor} onChange={onChange} />
                    <div className="flex justify-between">
                        <label htmlFor="hoverColor">Hover</label>
                        <input type="color" name="hoverColor" id="hoverColor" value={data.hoverColor} onChange={updateHoverColor} />
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'size'} onChange={handleChange('size')}>
                <AccordionSummary>
                    Size
                </AccordionSummary>
                <AccordionDetails>
                    <SizeEdit paddingInline={paddingInline} paddingBlock={paddingBlock} onChange={onChange} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'flex'} onChange={handleChange('flex')}>
                <AccordionSummary>
                    Flex
                </AccordionSummary>
                <AccordionDetails>
                    <FlexEdit justifyContent={justifyContent} alignItems={alignItems} onChange={onChange} />
                </AccordionDetails>
            </Accordion>

        </div>
    )
}