import React from "react";
import { SideBarItem } from "./SideBarItem";
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import { SIDEBAR_ITEMS_BASIC, SIDEBAR_ITEMS_SECTIONS } from "../constants";

export function SidebarAddComponent() {
    const [expanded, setExpanded] = React.useState('basics')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
            <Accordion className='berco' expanded={expanded === 'basics'} onChange={handleChange('basics')}>
                <AccordionSummary aria-controls="basicsd-content" id="basicsd-header">
                    Basics
                </AccordionSummary>
                <AccordionDetails>
                    {Object.values(SIDEBAR_ITEMS_BASIC).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id} data={sideBarItem} type={sideBarItem.type} />
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'sections'} onChange={handleChange('sections')}>
                <AccordionSummary aria-controls="sectionsd-content" id="sectionsd-header">
                    Sections
                </AccordionSummary>
                <AccordionDetails>
                    {Object.values(SIDEBAR_ITEMS_SECTIONS).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id} data={sideBarItem} type={sideBarItem.type} />
                    ))}
                </AccordionDetails>
            </Accordion>
        </>
    );
}