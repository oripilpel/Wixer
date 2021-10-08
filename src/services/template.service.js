import Plus from '../assets/img/plus.svg';
import Restaurant from '../assets/img/restaurant.jpeg';
import Mercedes from '../assets/img/mercedes.jpg';
import Remodeling from '../assets/img/remodeling.jpg';
import Denatal from '../assets/img/dental.jpg';

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
        json: '615d688b306793fbf629e6b4',
        img: Remodeling,
        title: 'Remodeling',
    },
    {
        json: '616066c63dc4068a630a4269',
        img: Restaurant,
        title: 'Restaurant',
    },
    {
        json: '615726b67ee46d2a8f34a89d',
        img: Mercedes,
        title: 'Mercedes',
    },
    {
        json: '616067203dc4068a630a426b',
        img: Denatal,
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


