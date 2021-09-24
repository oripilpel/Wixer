import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { translateStyle } from '../helpers';
import { COLUMN, COMPONENT, SIDEBAR_ITEM } from "../constants";
import { DropZone } from "./DropZone";
import Component from "./Component";

const Column = ({ data, cmps, handleDrop, path, updateComponent, onSelect, selected }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: COLUMN,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: COLUMN,
    item: {
      type: COLUMN,
      id: data.id,
      cmps: data.cmps,
      path
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const renderComponent = (component, currentPath) => {
    const compPath = currentPath.split('-');
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
  drag(drop(ref));

  const style = translateStyle({ ...data.style });
  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className={`base draggable column ${selected && selected.id === data.id ? 'selected' : ''}`}
      onClick={() => onSelect('column', path.split('-'))}
    >
      {data.id}
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
    </div>
  );
};
export default Column;
