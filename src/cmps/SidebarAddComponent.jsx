import React from "react";
import { SideBarItem } from "./SideBarItem";
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import { SIDEBAR_ITEMS_BASIC, SIDEBAR_ITEMS_FOOTER, SIDEBAR_ITEMS_NAV, SIDEBAR_ITEMS_SECTIONS, SIDEBAT_ITEMS_HEADER } from "../constants";

export function SidebarAddComponent() {
    const [expanded, setExpanded] = React.useState('basics')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
            <Accordion expanded={expanded === 'basics'} onChange={handleChange('basics')}>
                <AccordionSummary aria-controls="basicsd-content" id="basicsd-header">
                    Basics
                </AccordionSummary>
                <AccordionDetails>
                    {Object.values(SIDEBAR_ITEMS_BASIC).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id} data={sideBarItem} type={sideBarItem.type} />
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'nav'} onChange={handleChange('nav')}>
                <AccordionSummary aria-controls="navd-content" id="navd-header">
                    Nav
                </AccordionSummary>
                <AccordionDetails>
                    {Object.values(SIDEBAR_ITEMS_NAV).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id} data={sideBarItem} type={sideBarItem.type} />
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'header'} onChange={handleChange('header')}>
                <AccordionSummary aria-controls="headerd-content" id="headerd-header">
                    Header
                </AccordionSummary>
                <AccordionDetails>
                    {Object.values(SIDEBAT_ITEMS_HEADER).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id} data={sideBarItem} type={sideBarItem.type} />
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'section'} onChange={handleChange('section')}>
                <AccordionSummary aria-controls="sectiond-content" id="sectiond-header">
                    Section
                </AccordionSummary>
                <AccordionDetails>
                    {Object.values(SIDEBAR_ITEMS_SECTIONS).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id} data={sideBarItem} type={sideBarItem.type} />
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'footer'} onChange={handleChange('footer')}>
                <AccordionSummary aria-controls="footerd-content" id="footerd-header">
                    Footer
                </AccordionSummary>
                <AccordionDetails>
                    {Object.values(SIDEBAR_ITEMS_FOOTER).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id} data={sideBarItem} type={sideBarItem.type} />
                    ))}
                </AccordionDetails>
            </Accordion>
        </>
    );
}