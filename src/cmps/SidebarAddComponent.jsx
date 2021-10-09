import React from "react";
import { TextareaAutosize } from "@mui/material";
import { SideBarItem } from "./SideBarItem";
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import { SIDEBAR_ITEMS_BASIC, SIDEBAR_ITEMS_FOOTER, SIDEBAR_ITEMS_NAV, SIDEBAR_ITEMS_SECTIONS, SIDEBAR_ITEMS_HEADER } from "../constants";

export function SidebarAddComponent({ isElementClicked, setHints, setChatIsEnabled,chatIsEnabled, chatOpeningText, chatAnswerText, chatChange }) {
    const [expanded, setExpanded] = React.useState('header')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const onToggleChat = ({ target }) => {
        setChatIsEnabled(target.checked);
    }
    return (
        <div className="sidebar-add-component">
            <Accordion expanded={expanded === 'header'} onChange={handleChange('header')}>
                <AccordionSummary sx={{paddingBlock: 10}} aria-controls="headerd-content" id="headerd-header">
                    Header
                </AccordionSummary>
                <AccordionDetails className="header-items">
                    {Object.values(SIDEBAR_ITEMS_HEADER).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id} data={sideBarItem} type={sideBarItem.type}
                            isElementClicked={isElementClicked} setHints={setHints} />
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'nav'} onChange={handleChange('nav')}>
                <AccordionSummary sx={{paddingBlock: 10}} aria-controls="navd-content" id="navd-header">
                    Nav
                </AccordionSummary >
                <AccordionDetails className="nav-items">
                    {Object.values(SIDEBAR_ITEMS_NAV).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id} data={sideBarItem} type={sideBarItem.type} />
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'section'} onChange={handleChange('section')}>
                <AccordionSummary sx={{paddingBlock: 10}} aria-controls="sectiond-content" id="sectiond-header">
                    Section
                </AccordionSummary>
                <AccordionDetails className="section-items">
                    {Object.values(SIDEBAR_ITEMS_SECTIONS).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id} data={sideBarItem} type={sideBarItem.type} />
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'footer'} onChange={handleChange('footer')}>
                <AccordionSummary sx={{paddingBlock: 10}} aria-controls="footerd-content" id="footerd-header">
                    Footer
                </AccordionSummary>
                <AccordionDetails className="footer-items">
                    {Object.values(SIDEBAR_ITEMS_FOOTER).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id} data={sideBarItem} type={sideBarItem.type} />
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'basics'} onChange={handleChange('basics')}>
                <AccordionSummary sx={{paddingBlock: 10}} aria-controls="basicsd-content" id="basicsd-header">
                    Element
                </AccordionSummary>
                <AccordionDetails className='element-items' >
                    {Object.values(SIDEBAR_ITEMS_BASIC).map((sideBarItem, index) => (
                        <SideBarItem key={sideBarItem.id}
                            data={sideBarItem} type={sideBarItem.type} />
                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'chat'} onChange={handleChange('chat')}>
                <AccordionSummary sx={{paddingBlock: 10}} aria-controls="chatd-content" id="chatd-header">
                    Chat
                </AccordionSummary>
                <AccordionDetails className='flex direction-column align-center' >
                    <div className="side-bar-item flex justify-center">
                        <input type="checkbox" name="chat" id="chat" checked={chatIsEnabled} onChange={onToggleChat} />
                        <label htmlFor="chat">Enable chat</label>
                    </div>
                    <div className="row">
                        <div>
                            <label htmlFor="opening-text">
                                Opening text:
                            </label>
                        </div>
                        <div>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                minRows={3}
                                value={chatOpeningText}
                                id="opening-text"
                                name="openingText"
                                onChange={chatChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label htmlFor="answer-text">
                                Answer text:
                            </label>
                        </div>
                        <div>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                minRows={3}
                                value={chatAnswerText}
                                id="answer-text"
                                name="answerText"
                                onChange={chatChange}
                            />
                        </div>
                    </div>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}