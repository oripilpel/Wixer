import React from 'react';
import { Link } from 'react-router-dom';

import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from '@mui/material/ImageList';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { TemplatePreview } from './TemplatePreview';
import { templateService } from '../services/template.service';

export function TemplateList({ numberOfTemplates, moreTemplates }) {

    numberOfTemplates = (numberOfTemplates) ? numberOfTemplates : 0
    const templates = templateService.getAmountOfTemplates(numberOfTemplates)

    let cols
    if (useMediaQuery('(max-width:570px)')) cols = 1
    if (useMediaQuery('(min-width:571px)')) cols = 2
    if (useMediaQuery('(min-width:800px)')) cols = 3

    return (
        <div id="templates" className="template-list main-layout">
            <h2>Pick the website template you love and customize it</h2>
            <ImageList gap={24} sx={{}} cols={cols} >
                {templates.map((item, idx) => (
                    <TemplatePreview key={item.json} template={item} idx={idx} cols={cols} />
                ))}
            </ImageList>
            {moreTemplates &&
                (
                    <div className="show-all">
                        <Link to="/templates">
                        See all website templates <ArrowRightIcon />
                        </Link>

                    </div>
                )}
        </div>
    )
}