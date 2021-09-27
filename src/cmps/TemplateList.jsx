import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from '@mui/material/ImageList';

import { TemplatePreview } from './TemplatePreview';

export function TemplateList({ templates }) {

    const GetColsByScreenSize = () => {
        let cols
        if (useMediaQuery('(max-width:570px)')) cols = 1
        if (useMediaQuery('(min-width:571px)')) cols = 2
        if (useMediaQuery('(min-width:800px)')) cols = 3
        return cols
    }
    const cols = GetColsByScreenSize()
    return (
        <div id="templates" className="template-list main-layout">
            <h2>Choose a template and start building now!</h2>
            <ImageList sx={{}} cols={cols} >
                {templates.map((item, idx) => (
                    <TemplatePreview key={item.json} template={item} idx={idx} cols={cols} />
                ))}
            </ImageList>
        </div>
    )
}