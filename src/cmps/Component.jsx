import React, { useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { COMPONENT } from "../constants";
import { translateStyle } from "../helpers";
import { Image } from "./Image";
import { Text } from "./Text";
import { Video } from "./Video";
import { Link } from "./Link";
import { Nav } from "./Nav";
import { Button } from "./Button";
import { Actions } from "./Actions";

const Component = ({ data, path, updateComponent, select, selected }) => {
  const ref = useRef(null);

  const [actionsVisible, setActionsVisible] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    type: COMPONENT,
    item: { type: COMPONENT, id: data.id, path, component: data.component, style: data.style},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const component = data.component;
  console.log('data:',data)

  const KeysToComponentMap = {
    text: Text,
    image: Image,
    video: Video,
    link: Link,
    nav: Nav,
    button: Button,
  };

  const onSelect = (ev) => {
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
          style: translateStyle({ ...component.style }),
          update
        },
      );
    }
  }

  return (
    <div
      ref={ref}
      style={{ opacity, width: 'fit-content' }}
      className="component draggable"
      onClick={onSelect}
      onMouseEnter={() => setActionsVisible(true)}
      onMouseLeave={() => setActionsVisible(false)}
    >
      {renderer(component)}
      {actionsVisible && <Actions path={path} />}
    </div>
  );
};
export default Component;
