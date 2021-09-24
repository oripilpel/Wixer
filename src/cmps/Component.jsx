import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { COMPONENT } from "../constants";
import { translateStyle } from "../helpers";
import { Image } from "./Image";
import { Text } from "./Text";
import { Video } from "./Video";

const Component = ({ data, path, updateComponent, select, selected }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: COMPONENT,
    item: { type: COMPONENT, id: data.id, path, component: data.component },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const component = data.component;

  const KeysToComponentMap = {
    text: Text,
    image: Image,
    video: Video
  };

  const onSelect = (ev) => {
    console.log('component', path.split('-'));
    ev.stopPropagation();
    select('component', path.split('-'));
  }

  const update = (field, value) => {
    updateComponent(selected, field, value);
  }

  const renderer = (component) => {
    if (typeof KeysToComponentMap[component.type] !== "undefined") {
      return React.createElement(
        KeysToComponentMap[component.type],
        {
          id: component.id,
          key: component.id,
          data: component.data,
          style: translateStyle({...component.style}),
          update
        },
      );
    }
  }

  return (
    <div
      ref={ref}
      style={{ opacity }}
      className="component draggable"
      onClick={onSelect}
    >
      {/* <div>{data.id}</div> */}
      {/* <div>{component.type}</div> */}
      {/* <div>{component.content}</div> */}
      {renderer(component)}
    </div>
  );
};
export default Component;
