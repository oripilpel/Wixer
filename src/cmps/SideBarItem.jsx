import React from "react";
import { useDrag } from "react-dnd";

import AddBoxIcon from '@mui/icons-material/AddBox';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

export function SideBarItem({ data, type }) {
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
    <div className="side-bar-item" ref={drag} style={{ opacity }}>
      {icon()}
      {data.name || data.component.type}
    </div>
  );
};

