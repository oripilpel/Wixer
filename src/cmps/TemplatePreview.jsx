import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export function TemplatePreview({ template, idx, cols }) {
    return (
        <ImageListItem className={`template-preview ${template.json ? "" : "plus"}`}>
            < img
                src={`${template.img}${template.json ? "?w=164&h=164&fit=crop&auto=format" : ""}`
                }
                srcSet={`${template.img}${template.json ? "?w=164&h=164&fit=crop&auto=format&dpr=2 2x" : ""}`}
                alt={template.title}
                loading="lazy"
            />
            <div className="cover">
                <div className="actions">
                    {!template.json &&
                        <a className="create" href={`/editor/${template.json}`}>Create new</a>
                    }
                    {template.json &&
                        (<>
                            <a href={`/preview/${template.json}`} target='blank'>Preview</a>
                            <a href={`/editor/${template.json}`}>Edit</a>
                        </>)
                    }
                </div>
            </div>
            <ImageListItemBar
                className="title"
                title={template.title}
            />
        </ImageListItem >
    )
}