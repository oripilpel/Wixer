import Plus from '../assets/img/plus.svg';
import Restaurant from '../assets/img/restaurant.jpeg';
import mercedes from '../assets/img/mercedes.jpg'
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
        json: '615af7437ee46d2a8f34a9ae',
        img: Restaurant,
        title: 'Restaurant',
    },
    {
        json: '615726b67ee46d2a8f34a89d',
        img: mercedes,
        title: 'Mercedes',
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


