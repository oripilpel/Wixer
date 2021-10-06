import React from "react";
import { useDrag } from "react-dnd";

import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import Crop75Icon from '@mui/icons-material/Crop75';
import RoomIcon from '@mui/icons-material/Room';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import EmailIcon from '@mui/icons-material/Email';

import header1 from '../assets/img/elements/header1.jpg';
import header2 from '../assets/img/elements/header2.jpg';
import hero1 from '../assets/img/elements/hero1.jpg';
import hero2 from '../assets/img/elements/hero2.jpg';
import hero3 from '../assets/img/elements/hero3.jpg';
import gallery from '../assets/img/elements/gallery.jpg';
import footer1 from '../assets/img/elements/footer1.jpg';
import footer2 from '../assets/img/elements/footer2.jpg';
import furniCarousle from '../assets/img/elements/furniCarousle.jpg';
import nav1 from '../assets/img/elements/nav1.jpg';

import dentalHero from '../assets/img/elements/dentalHero.jpg';
import dentalFooter from '../assets/img/elements/dentalFooter.jpg';
import dentalReviews from '../assets/img/elements/dentalReviews.jpg';
import dentalServices from '../assets/img/elements/dentalServices.jpg';
import testimonials from '../assets/img/elements/testimonials.jpg';
import remodelingServices from '../assets/img/elements/remodelingServices.jpg';
import headerConstruction from '../assets/img/elements/headerConstruction.jpg';
import dentist from '../assets/img/elements/dentist.jpg';
import sectionMeal from '../assets/img/elements/sectionMeal.jpg';
import dentalFotterCallNow from '../assets/img/elements/dentalFotterCallNow.jpg';
import dentalFooterUpper from '../assets/img/elements/dentalFooterUpper.jpg';
import remodeling from '../assets/img/elements/remodeling.jpg';


const KeysToComponentMap = {
  header1,
  header2,
  hero1,
  hero2,
  hero3,
  dentalHero,
  gallery,
  furniCarousle,
  footer1,
  footer2,
  furniCarousle,
  nav1,
  dentalFooter,
  dentalReviews,
  dentalServices,
  testimonials,
  remodelingServices,
  headerConstruction,
  dentist,
  sectionMeal,
  dentalFotterCallNow,
  dentalFooterUpper,
  remodeling,
}

const KeysToIconMap = {
  'ViewColumnIcon': <div className="icon"><ViewColumnIcon /></div>,
  'TextFieldsIcon': <div className="icon"><TextFieldsIcon /></div>,
  'VideoLibraryIcon': <div className="icon"><VideoLibraryIcon /></div>,
  'InsertPhotoIcon': <div className="icon"><InsertPhotoIcon /></div>,
  'SmartButtonIcon': <div className="icon"><SmartButtonIcon /></div>,
  'Crop75Icon': <div className="icon"><Crop75Icon /></div>,
  'RoomIcon': <div className="icon"><RoomIcon /></div>,
  'GroupAddIcon': <div className="icon"><GroupAddIcon /></div>,
  'ViewCarouselIcon': <div className="icon"><ViewCarouselIcon /></div>,
  'EmailIcon': <div className="icon"><EmailIcon /></div>,
}

export function SideBarItem({ data, type, isElementClicked, setHints }) {
  const [{ opacity }, drag] = useDrag({
    type,
    item: data,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  return (
    <div
      className={`side-bar-item flex direction-column justify-center ${data.name === 'Header1' && !isElementClicked ? 'anima-bg' : ''}`}
      onMouseDown={() => data.name === 'Header1' && !isElementClicked ? setHints(isElementClicked) : ''}
      ref={drag} style={{ opacity }}>
      {data.icon && KeysToIconMap[data.icon]}
      {!data.image && (data.name || data.component.type)}
      {data.image && <img src={KeysToComponentMap[data.image]}
        className={`${data.name === 'Header1' && !isElementClicked ? 'anima' : ''}`} />}
    </div >
  );
};

