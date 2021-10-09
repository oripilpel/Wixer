import { PrettoSlider } from "./PrettoSlider";
import { MenuItem, Select } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import React from "react";
import { FlexEdit } from "./Edit/FlexEdit";


export function NavEdit({ style, onUpdate, data }) {
    const { hoverColor } = data
    const { fontSize, color, gap, fontFamily, alignItems, justifyContent } = style
    function onChange({ target }) {
        const { name, value } = target;
        const newStyle = { ...style, [name]: value };
        onUpdate('style', newStyle);
    }

    const [expanded, setExpanded] = React.useState('font')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    function updateData({ target }, linkTxt) {
        let newData;
        if (!linkTxt) newData = { ...data, hoverColor: target.value }
        else {
            newData = { ...data }
            const currIdx = newData.links.findIndex(link => link.txt === linkTxt)
            newData.links[currIdx].url = target.value
        }
        onUpdate('data', newData)
    }


    return (
        <div className="nav-edit">
            <Accordion expanded={expanded === 'font'} onChange={handleChange('font')}>
                <AccordionSummary aria-controls="fontd-content" id="fontd-header">
                    Font
                </AccordionSummary>
                <AccordionDetails>
                    <div className="font-size">
                        <label htmlFor="font-size">Font Size:</label>
                        <PrettoSlider
                            valueLabelDisplay="auto"
                            aria-label="pretto slider"
                            value={+fontSize}
                            min={16}
                            max={100}
                            name="fontSize"
                            onChange={onChange}
                            id="font-size"
                        />
                    </div>
                    <div className="gap">
                        <label htmlFor="gap">Gap</label>
                        <PrettoSlider
                            valueLabelDisplay="auto"
                            aria-label="pretto slider"
                            value={+gap}
                            min={10}
                            max={80}
                            name="gap"
                            onChange={onChange}
                            id="gap"
                        />
                    </div>
                    <div className="font-family">
                        <div className="label">
                            <label htmlFor="font-family">Font:</label>
                        </div>
                        <div className="input">
                            <Select
                                labelId="font-family"
                                id="font-family"
                                value={fontFamily}
                                label="Font family"
                                name="fontFamily"
                                onChange={onChange}
                            >
                                <MenuItem value="Arial">Arial</MenuItem>
                                <MenuItem value="caveat">Caveat</MenuItem>
                                <MenuItem value="montserrat">Montserrat</MenuItem>
                                <MenuItem value="forum">Forum</MenuItem>
                                <MenuItem value="roboto">Roboto</MenuItem>
                                <MenuItem value="raleway">Raleway</MenuItem>
                                <MenuItem value="courgette">Courgette</MenuItem>
                                <MenuItem value="lobster">Lobster</MenuItem>
                            </Select>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'color'} onChange={handleChange('color')}>
                <AccordionSummary aria-controls="fontd-content" id="fontd-header">
                    Color
                </AccordionSummary>
                <AccordionDetails>
                    <div className="font-color">
                        <div className="label">
                            <label htmlFor="color">Color:</label>
                        </div>
                        <div className="input">
                            <input type="color" name="color" id="color" value={color} onChange={onChange} />
                        </div>
                    </div>
                    <div className="hoverColor">
                        <div className="label">
                            <label htmlFor="hoverColor">Hover Color:</label>
                        </div>
                        <div className="input">
                            <input type="color" name="hoverColor" id="hoverColor" value={hoverColor} onChange={updateData} />
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'links'} onChange={handleChange('links')}>
                <AccordionSummary aria-controls="fontd-content" id="fontd-header">
                    Links
                </AccordionSummary>
                <AccordionDetails>
                    {data.links.map((link, idx) => <div key={'NAV Item'+ idx}>
                        <label htmlFor={link.txt + idx}>{link.txt}</label>
                        <input placeholder="Link to Section number:" id={link.txt + idx} type="number" name="url" key={link.txt + idx} value={link.url} onChange={(ev) => { updateData(ev, link.txt) }} />
                    </div>)}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'flex'} onChange={handleChange('flex')}>
                <AccordionSummary aria-controls="flexd-content" id="flexd-header">
                    Flex options
                </AccordionSummary>
                <AccordionDetails>
                    <FlexEdit onChange={onChange} justifyContent={justifyContent} alignItems={alignItems} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}