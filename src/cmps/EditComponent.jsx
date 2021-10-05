import { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import { FontEdit } from './Edit/FontEdit'
import { BackgroundEdit } from './Edit/BackgroundEdit';

export function EditComponent({ fontSize, color, fontFamily, textAlign, flexGrow, paddingInline, paddingBlock, backgroundColor, justifyContent, alignItems, gap, onChange }) {
    const [expanded, setExpanded] = useState('background')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    const debouncedChangeHandler = useCallback(
        debounce(onChange, 20)
        , []);

    return (
        <>

            {(fontSize || textAlign || color || fontFamily) && <Accordion expanded={expanded === 'font'} onChange={handleChange('font')}>
                <AccordionSummary aria-controls="fontd-content" id="fontd-header">
                    Font
                </AccordionSummary>
                <AccordionDetails>
                    <FontEdit fontSize={fontSize} textAlign={textAlign} color={color} fontFamily={fontFamily} onChange={debouncedChangeHandler} />
                </AccordionDetails>
            </Accordion>}
            {backgroundColor && <Accordion expanded={expanded === 'background'} onChange={handleChange('background')}>
                <AccordionSummary aria-controls="backgroundd-content" id="backgroundd-header">
                    Background
                </AccordionSummary>
                <AccordionDetails>
                    <BackgroundEdit backgroundColor={backgroundColor} />
                </AccordionDetails>
            </Accordion>}
            {(paddingInline || paddingBlock || gap) && (<Accordion expanded={expanded === 'spacing'} onChange={handleChange('spacing')}>
                <AccordionSummary aria-controls="spacingd-content" id="spacingd-header">
                    Size
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>)}
            {(justifyContent || alignItems || gap) && <Accordion expanded={expanded === 'flex'} onChange={handleChange('flex')}>
                <AccordionSummary aria-controls="flexd-content" id="flexd-header">
                    Flex options
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>}
        </>

    )
}