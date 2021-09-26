import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export function TemplatePreview({ template, idx, cols }) {

    return (
        <ImageListItem className="template-preview" sx={{ my: 3, mr: ((idx + 1) % cols) ? 3 : 0 }}>
            <img
                src={`${template.img}${template.json ? "?w=164&h=164&fit=crop&auto=format" : ""}`}
                srcSet={`${template.img}${template.json ? "?w=164&h=164&fit=crop&auto=format&dpr=2 2x" : ""}`}
                alt={template.title}
                loading="lazy"
            />
            <div className="cover">
                <div className="actions">
                    {template.json &&
                        <a href={`/${template.json}`}>Preview</a>
                    }
                    <a href={`/editor/${template.json}`}>Edit</a>
                </div>
            </div>
            <ImageListItemBar
                title={template.title}
            />
        </ImageListItem>
    )
}