import Plus from '../assets/img/plus.svg';
import Restaurant from '../assets/img/restaurant.jpeg';
import Mercedes from '../assets/img/mercedes.jpg';
import Remodeling from '../assets/img/remodeling.jpg';

export const templateService = {
    getAmountOfTemplates,
    gTemplatesIds
}
const gTemplates = [
    {
        json: '',
        img: Plus,
        title: 'Start from scratch',
    },
    {
        json: '615c21c9b4e843deb839b126',
        img: Remodeling,
        title: 'Remodeling',
    },
    {
        json: '615af7437ee46d2a8f34a9ae',
        img: Restaurant,
        title: 'Restaurant',
    },
    {
        json: '615726b67ee46d2a8f34a89d',
        img: Mercedes,
        title: 'Mercedes',
    },
    {
        json: '615c0ee0b4e843deb839b11d',
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Dental Clinic',
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

const temlatesIds = gTemplates.map(template => template.json)

function getAmountOfTemplates(amount = 0) {
    if (!amount) return gTemplates
    const templates = gTemplates.slice(0, amount)
    return templates;
}

function gTemplatesIds() {
    return temlatesIds
}


