import React from "react";
import { useDrag } from "react-dnd";

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

  return (
    <div className="side-bar-item flex align-center" ref={drag} style={{ opacity }}>
      {!data.image && (data.name || data.component.type)}
      {data.image && <img src={KeysToComponentMap[data.image]}/>}
    </div>
  );
};

