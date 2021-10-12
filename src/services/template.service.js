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
        json: '6164652f381d1f42015a3aaf',
        img: Construction,
        title: 'Construction',
    },
    {
        json: '6164819e8947b38deef91914',
        img: Restaurant,
        title: 'Restaurant',
    },
    {
        json: '615726b67ee46d2a8f34a89d',
        img: Mercedes,
        title: 'Mercedes',
    },
    {
        json: '6164c2478947b38deef91936',
        img: Denatal,
        title: 'Dental Clinic',
    },
    {
        json: '6162fdf3d98455014b006966',
        img: Fylo,
        title: 'Fylo',
    },
    {
        json: '61628879223761233d27e194',
        img: Remodeling,
        title: 'Remodeling',
    },
    {
        json: '00000',
        img: Beautycare,
        title: 'Beauty Care',
    },
    {
        json: '000010',
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


