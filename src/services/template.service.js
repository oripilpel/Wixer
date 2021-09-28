import Plus from '../assets/img/plus.png'
import Restaurant from '../assets/img/restaurant.jpeg'
export const templateService = {
    getAmountOfTemplates
}
const gTemplates = [
    {
        json: '',
        img: Plus,
        title: 'Start from scratch',
    },
    {
        json: 'O0QHg',
        img: Restaurant,
        title: 'Restaurant',
    },
    {
        json: '23232',
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        json: '12345',
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        json: '55555',
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        json: '45346',
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        json: '678765',
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
]

function getAmountOfTemplates(amount = 0) {
    if (!amount) return gTemplates
    const templates = gTemplates.slice(0, amount)
    return templates;
}


