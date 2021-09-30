import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { translateStyle } from "../services/util.service";

import { COLUMN, COMPONENT, SIDEBAR_ITEM } from "../constants";
import { DropZone } from "./DropZone";
import Component from "./Component";
import { Actions } from "./Actions";

export function Column({ data, handleDrop, path, updateComponent, onSelect, selected, moveColumns }) {
  const ref = useRef(null);


  const [actionsVisible, setActionsVisible] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    type: COLUMN,
    item: {
      type: COLUMN,
      id: data.id,
      cmps: data.cmps,
      style: data.style,
      path
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });


  const [, drop] = useDrop({
    accept: COLUMN,
    // hover: (item, monitor) => {
    //   if (!ref.current) return
    //   let dragIdx = +path[path.length - 1];

    //   let hoverIdx = +item.path[path.length - 1];
    //   if (dragIdx === hoverIdx || path.slice(0, path.length - 1) !== item.path.slice(0, item.path.length - 1)) return
    //   const hoverBoundingRect = ref.current?.getBoundingClientRect()
    //   const hoverWidth = hoverBoundingRect.right - hoverBoundingRect.left;
    //   const hoverMiddleX = 3 * (hoverBoundingRect.right - hoverBoundingRect.left) / 4;
    //   const hoverClientX = monitor.getClientOffset().x - hoverBoundingRect.left;
    //   if (monitor.getDifferenceFromInitialOffset().x >= hoverMiddleX) return
    //   console.log('client', hoverClientX, 'hoverMiddleX', hoverMiddleX);
    //   if (dragIdx < hoverIdx && hoverClientX < hoverMiddleX) return
    //   if (dragIdx > hoverIdx && hoverClientX > hoverMiddleX) return
    //   moveColumns([dragIdx], [hoverIdx], path)
    //   dragIdx = hoverIdx
    //   return
    // }
  })


  const renderComponent = (component, currentPath) => {
    return (
      <Component
        key={component.id}
        data={component}
        path={currentPath}
        updateComponent={updateComponent}
        select={onSelect}
        selected={selected}
      />
    );
  };

  const opacity = isDragging ? 0 : 1;
  drop(drag(ref));

  const select = (ev) => {
    ev.stopPropagation();
    onSelect('column', path.split('-'));
  }

  const style = translateStyle({ ...data.style });
  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className={`base draggable column flex direction-column ${selected && selected.id === data.id ? 'selected' : ''}`}
      onClick={select}
      onMouseEnter={() => setActionsVisible(true)}
      onMouseLeave={() => setActionsVisible(false)}
    >
      {data.cmps.map((component, index) => {
        const currentPath = `${path}-${index}`;

        return (
          <React.Fragment key={component.id}>
            <DropZone
              data={{
                path: currentPath,
                childrenCount: data.cmps.length
              }}
              onDrop={handleDrop}
              accept={[COMPONENT, SIDEBAR_ITEM]}
            />
            {renderComponent(component, currentPath)}
          </React.Fragment>
        );
      })}
      <DropZone
        data={{
          path: `${path}-${data.cmps.length}`,
          childrenCount: data.cmps.length
        }}
        onDrop={handleDrop}
        isLast
        accept={[COMPONENT, SIDEBAR_ITEM]}

      />
      {actionsVisible && <Actions path={path} type={COLUMN} />}
    </div>
  );
}