import React from 'react';
import { uploadImg } from '../services/cloudinary-service';
import { MarginEdit } from "./MarginEdit";
import { PaddingEdit } from "./PaddingEdit";
import { ImageUpload } from "./ImageUpload";
import { WidthEdit } from "./WidthEdit";
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';

export function ColumnSectionEdit({ style, onUpdate }) {
    const [expanded, setExpanded] = React.useState('background')
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const onChange = ({ target }) => {
        const { name, value } = target;
        const newStyle = { ...style };
        newStyle[name] = value;
        onUpdate('style', newStyle);
    }
    const onUploadImage = (url) => {
        const newStyle = { ...style };
        newStyle['backgroundImage'] = `url(${url})`;
        onUpdate('style', newStyle);
    }
    const {
        flexGrow,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        backgroundColor,
        justifyContent,
        alignItem
    } = style;
    return (
        <div className="column-section-edit">
            <Accordion expanded={expanded === 'background'} onChange={handleChange('background')}>
                <AccordionSummary aria-controls="backgroundd-content" id="backgroundd-header">
                    Background
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <label htmlFor="background-color">Background color</label>
                        <input type="color" name="backgroundColor" id="background-color" value={backgroundColor || '#ffffff'} onChange={onChange} />
                    </div>
                    <ImageUpload label="Upload background image" onUpload={(ev) => uploadImg(ev).then(url => onUploadImage(url))} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'width'} onChange={handleChange('width')}>
                <AccordionSummary aria-controls="widthd-content" id="widthd-header">
                    Width
                </AccordionSummary>
                <AccordionDetails>
                    <WidthEdit name="flexGrow" value={flexGrow} onChange={onChange} min={0} max={12} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'flex'} onChange={handleChange('flex')}>
                <AccordionSummary aria-controls="flexd-content" id="flexd-header">
                    Flex options
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <label htmlFor="justify-content">Justify content</label>
                        <select name="justifyContent" id="justify-content" value={justifyContent} onChange={onChange}>
                            <option value="center">Center</option>
                            <option value="flexStart">Flex start</option>
                            <option value="flexEnd">Flex end</option>
                            <option value="spaceBetween">Space between</option>
                            <option value="spaceAround">Space Around</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="align-items">Align items</label>
                        <select name="alignItems" id="align-items" value={justifyContent} onChange={onChange}>
                            <option value="center">Center</option>
                            <option value="flexStart">Flex start</option>
                            <option value="flexEnd">Flex end</option>
                        </select>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'spacing'} onChange={handleChange('spacing')}>
                <AccordionSummary aria-controls="spacingd-content" id="spacingd-header">
                    Spacing
                </AccordionSummary>
                <AccordionDetails>
                    <PaddingEdit
                        paddingTop={paddingTop}
                        paddingRight={paddingRight}
                        paddingBottom={paddingBottom}
                        paddingLeft={paddingLeft}
                        onChange={onChange} />
                    <MarginEdit
                        marginTop={marginTop}
                        marginRight={marginRight}
                        marginBottom={marginBottom}
                        marginLeft={marginLeft}
                        onChange={onChange} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}