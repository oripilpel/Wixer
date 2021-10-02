import React from "react";
import { useDrag } from "react-dnd";

import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import Crop75Icon from '@mui/icons-material/Crop75';
import RoomIcon from '@mui/icons-material/Room';

import header1 from '../assets/img/elements/header1.jpg';
import header2 from '../assets/img/elements/header2.jpg';
import hero1 from '../assets/img/elements/hero1.jpg';
import hero2 from '../assets/img/elements/hero2.jpg';
import hero3 from '../assets/img/elements/hero3.jpg';
import gallery from '../assets/img/elements/gallery.jpg';
import footer1 from '../assets/img/elements/footer1.jpg';
import footer2 from '../assets/img/elements/footer2.jpg';



const KeysToComponentMap = {
  'header1': header1,
  'header2': header2,
  'hero1': hero1,
  'hero2': hero2,
  'hero3': hero3,
  'gallery': gallery,
  'footer1': footer1,
  'footer2': footer2
}

const KeysToIconMap = {
  'ViewColumnIcon': <div className="icon"><ViewColumnIcon /></div>,
  'TextFieldsIcon': <div className="icon"><TextFieldsIcon /></div>,
  'VideoLibraryIcon': <div className="icon"><VideoLibraryIcon /></div>,
  'InsertPhotoIcon': <div className="icon"><InsertPhotoIcon /></div>,
  'SmartButtonIcon': <div className="icon"><SmartButtonIcon /></div>,
  'Crop75Icon': <div className="icon"><Crop75Icon /></div>,
  'RoomIcon': <div className="icon"><RoomIcon /></div>,
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

