import { Accordion, AccordionDetails, AccordionSummary } from "./Accordion";
import { FontEdit } from "./FontEdit";
import React from "react";

export function ButtonEdit({ style, onUpdate, data }) {
    const [expanded, setExpanded] = React.useState('text')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const { fontSize, color, fontFamily, textAlign, backgroundColor, height, width } = style
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
                    <FontEdit fontSize={fontSize} color={color} fontFamily={fontFamily} textAlign={textAlign} onChange={onChange} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'color'} onChange={handleChange('color')}>
                <AccordionSummary>
                    Colors
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex justify-between">
                        <label htmlFor="background-color">Background</label>
                        <input type="color" name="backgroundColor" id="background-color" value={backgroundColor} onChange={onChange} />
                    </div>
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
                    <div className="flex justify-between">
                        <label htmlFor="height">Height</label>
                        <input type="color" name="height" id="height" value={height} onChange={onChange} />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="width">Width</label>
                        <input type="color" name="width" id="width" value={width} onChange={updateHoverColor} />
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}