
import { useState } from 'react';
import { Switch } from '@mui/material';
import { uploadImg } from '../services/cloudinary-service';
import { ImageUpload } from "./ImageUpload";
import { MarginEdit } from './MarginEdit';
import { PaddingEdit } from './PaddingEdit';
import { WidthEdit } from './WidthEdit';
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import { ImageSearch } from './ImageSearch';

export function ImageEdit({ data, style, onUpdate }) {
    const [expanded, setExpanded] = useState('image');
    const [isWidthAuto, setIsWidthAuto] = useState(false);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }
    const { paddingTop, paddingRight, paddingBottom, paddingLeft, marginTop, marginRight, marginBottom, marginLeft, width, height } = style;
    const onUploadImage = (url) => {
        onUpdate('data', { url })
    }
    const onChange = ({ target }) => {
        const { name, value } = target
        const newStyle = { ...style }
        newStyle[name] = value
        onUpdate('style', newStyle)
    }
    const onAutoWidthChange = ({ target }) => {
        setIsWidthAuto(target.checked)
        if (target.checked) {
            const newStyle = { ...style }
            newStyle.width = 'auto'
            onUpdate('style', newStyle)
        }
    }
    return (
        <div className="image-edit">
            <Accordion expanded={expanded === 'image'} onChange={handleChange('image')}>
                <AccordionSummary aria-controls="imaged-content" id="imaged-header">
                    Image
                </AccordionSummary>
                <AccordionDetails>
                    <ImageUpload label="Upload image" onUpload={(ev) => uploadImg(ev).then(url => onUploadImage(url))} />
                    <ImageSearch onSelect={onUploadImage} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'width'} onChange={handleChange('width')}>
                <AccordionSummary aria-controls="widthd-content" id="widthd-header">
                    Sizing
                </AccordionSummary>
                <AccordionDetails>
                    <label htmlFor="auto-width">Auto width:</label>
                    <Switch id="auto-width" checked={isWidthAuto} onChange={onAutoWidthChange} />
                    {!isWidthAuto && <WidthEdit name="width" value={width || 100} onChange={onChange} />}
                    {<WidthEdit name="height" value={height || 100} onChange={onChange} />}
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