import React, { useCallback } from 'react';
import { uploadImg } from '../services/cloudinary-service';
import { MarginEdit } from "./MarginEdit";
import { PaddingEdit } from "./PaddingEdit";
import { ImageUpload } from "./ImageUpload";
import { WidthEdit } from "./WidthEdit";
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import { BorderEdit } from './BorderEdit';
import { HeightEdit } from './HeightEdit';
import debounce from 'lodash.debounce';

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
    // const debouncedChangeHandler = useCallback(
    //     debounce(onUpdate, 20)
    //     , [onUpdate]);
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
        alignItems,
        height
    } = style;
    return (
        <div className="column-section-edit">
            <Accordion expanded={expanded === 'background'} onChange={handleChange('background')}>
                <AccordionSummary aria-controls="backgroundd-content" id="backgroundd-header">
                    Background
                </AccordionSummary>
                <AccordionDetails>
                    <div className="bg-color-input">
                        <div className="label">
                            <label htmlFor="background-color">
                                Color
                            </label>
                        </div>
                        <div className="item">
                            <input type="color" name="backgroundColor" id="background-color" value={backgroundColor || '#ffffff'} onChange={onChange} />
                        </div>
                    </div>
                    <ImageUpload label="Upload image" onUpload={(ev) => uploadImg(ev).then(url => onUploadImage(url))} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'size'} onChange={handleChange('size')}>
                <AccordionSummary aria-controls="widthd-content" id="widthd-header">
                    Size
                </AccordionSummary>
                <AccordionDetails>
                    <WidthEdit name="flexGrow" value={flexGrow} onChange={onChange} min={0} max={12} />
                    <HeightEdit value={height || 0} onChange={onChange} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'flex'} onChange={handleChange('flex')}>
                <AccordionSummary aria-controls="flexd-content" id="flexd-header">
                    Flex options
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex">
                        <div className="label">
                            <label htmlFor="justify-content">Justify content</label>
                        </div>
                        <div className="input">
                            <select name="justifyContent" id="justify-content" value={justifyContent} onChange={onChange}>
                                <option value="center">Center</option>
                                <option value="flex-start">Flex start</option>
                                <option value="flex-end">Flex end</option>
                                <option value="space-between">Space between</option>
                                <option value="space-around">Space Around</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="align-items">Align items</label>
                        <select name="alignItems" id="align-items" value={alignItems} onChange={onChange}>
                            <option value="center">Center</option>
                            <option value="flex-start">Flex start</option>
                            <option value="flex-end">Flex end</option>
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
            <Accordion expanded={expanded === 'border'} onChange={handleChange('border')}>
                <AccordionSummary aria-controls="borderd-content" id="borderd-header">
                    Border
                </AccordionSummary>
                <AccordionDetails>
                    <BorderEdit style={style} onChange={onChange} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}