import Plus from '../assets/img/plus.svg';
import Restaurant from '../assets/img/restaurant.jpeg';
import Mercedes from '../assets/img/mercedes.jpg';
import Remodeling from '../assets/img/remodeling.jpg';
import Denatal from '../assets/img/dental.jpg';
import Beautycare from '../assets/img/beautycare.jpg';
import Jewelry from '../assets/img/jewelry.jpg';
import Construction from '../assets/img/Construction.PNG';
import Fylo from '../assets/img/Fylo.PNG';

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
        json: '61628879223761233d27e194',
        img: Remodeling,
        title: 'Remodeling',
    },
    {
        json: '6162a4af223761233d27e199',
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
        json: '6162eb42c326b1a2474e552b',
        img: Construction,
        title: 'Construction',
    },
    {
        json: '61636ddbd72f4399222f1735',
        img: Fylo,
        title: 'Fylo',
    },
    {
        json: '00000',
        img: Beautycare,
        title: 'Beauty Care',
    },
    {
        json: '00000',
        img: Jewelry,
        title: 'jewelry',
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


