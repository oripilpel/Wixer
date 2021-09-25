import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export function TemplateList() {

    const getColsByScreenSize = () => {
        let cols
        if (useMediaQuery('(max-width:570px)')) cols = 1
        if (useMediaQuery('(min-width:571px)')) cols = 2
        if (useMediaQuery('(min-width:800px)')) cols = 3
        return cols
    }

    return (
        <ImageList sx={{}} cols={getColsByScreenSize()} >
            {templates.map((item, idx) => (
                <ImageListItem key={item.img} sx={{my: 3, mr: ((idx + 1) % getColsByScreenSize()) ? 3 : 0 }}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <div className="cover">
                        <div className="actions">
                            <a href={`/${item.id}`}>Preview</a>
                            <a href={`/editor/${item.id}`}>Edit</a>
                        </div>
                    </div>
                    <ImageListItemBar
                        title={item.title}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const templates = [
    {
        id: '00000',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        id: '23232',
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        id: '12345',
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        id: '55555',
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        id: '45346',
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        id: '678765',
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
];