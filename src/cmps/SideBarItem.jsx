import React from "react";
import { useDrag } from "react-dnd";

import AddBoxIcon from '@mui/icons-material/AddBox';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

import header1 from '../assets/img/elements/header1.jpg';
import header2 from '../assets/img/elements/header2.jpg';
import hero1 from '../assets/img/elements/hero1.jpg';
import hero2 from '../assets/img/elements/hero2.jpg';
import hero3 from '../assets/img/elements/hero3.jpg';
import footer1 from '../assets/img/elements/footer1.jpg';



const KeysToComponentMap = {
  'footer1': footer1,
  'hero1': hero1,
  'hero2': hero2,
  'hero3': hero3,
  'header1': header1,
  'header2': header2
}

export function SideBarItem({ data, type }){
  const [{ opacity }, drag] = useDrag({
    type,
    item: data,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });

  const icon = () => {
    console.log(data.component.type);
    switch (data.component.type) {
      case 'innersection':
        return (
          <div className="icon">
            <ViewColumnIcon />
          </div>
        )
      case 'column':
      case 'text':
      case 'video':
      case 'image':
      case 'button':
        return (
          <div className="icon">
            <AddBoxIcon />
          </div>
        )
      default:
        return <></>
    }

  }

  return (
    <div className="side-bar-item flex align-center" ref={drag} style={{ opacity }}>
      {icon()}
      {!data.image && (data.name || data.component.type)}
      {data.image && <img src={KeysToComponentMap[data.image]}/>}
    </div>
  );
};

