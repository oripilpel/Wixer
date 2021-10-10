import React, { useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { translateStyle } from "../services/util.service";

import { COLUMN, COMPONENT, SIDEBAR_ITEM } from "../constants";
import { DropZone } from "./DropZone";
import { Component } from "./Component";
import { Actions } from "./Actions";

export function Column({ data, handleDrop, path, updateComponent, onSelect, selected }) {
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

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const select = (ev) => {
    ev.stopPropagation();
    onSelect('column', path.split('-'));
  }

  const style = translateStyle({ ...data.style });
  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className={`base draggable column flex direction-column ${selected && selected.id === data.id ? 'selected' : ''} ${actionsVisible ? 'element-hover' : ''}`}
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
            <Component
              key={component.id}
              data={component}
              path={currentPath}
              updateComponent={updateComponent}
              select={onSelect}
              selected={selected}
            />
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