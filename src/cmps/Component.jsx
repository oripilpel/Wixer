import React, { useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { translateStyle } from "../services/util.service";
import { COMPONENT } from "../constants";
import { Image } from "./Image";
import { Text } from "./Text";
import { Video } from "./Video";
import { Nav } from "./Nav";
import { Button } from "./Button";
import { Actions } from "./Actions";
import { GMap } from "./GMap";
import { SocialIcons } from "./SocialIcons";
import { Carousel } from "./Carousel";
import { ContactForm } from "./Form";

export function Component({ data, path, updateComponent, select, selected }) {
  const ref = useRef(null);

  const [actionsVisible, setActionsVisible] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    type: COMPONENT,
    item: {
      type: COMPONENT,
      id: data.id, path,
      style: data.style,
      component: data.component
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const { gap, alignItems, justifyContent } = data.component.style

  const component = data.component;

  const onSelect = (ev) => {
    ev.stopPropagation();
    select('component', path.split('-'));
  }

  const update = (field, value) => {
    updateComponent(selected, field, value);
  }

  const renderer = (component) => {
    const { id, data, style, type } = component

    const props = {
      id,
      key: id,
      data,
      style: translateStyle({ ...style }),
      path,
      update
    }

    switch (type) {
      case 'text':
        return <Text {...props} />
      case 'image':
        return <Image {...props} />
      case 'video':
        return <Video {...props} />
      case 'nav':
        return <Nav {...props} />
      case 'button':
        return <Button {...props} />
      case 'GMap':
        return <GMap {...props} />
      case 'social':
        return <SocialIcons {...props} />
      case 'carousel':
        return <Carousel {...props} />
      case 'form':
        return <ContactForm {...props} />
    }
  }

  return (
    <div
      ref={ref}
      style={{ opacity, gap: (data.component.type === 'nav') ? '' : gap, alignItems, justifyContent }}
      className={`component draggable ${actionsVisible ? 'element-hover' : ''}`}
      onClick={onSelect}
      onMouseEnter={() => setActionsVisible(true)}
      onMouseLeave={() => setActionsVisible(false)}
    >
      {renderer(component)}
      {actionsVisible && <Actions path={path} type={COMPONENT} />}
    </div>
  )
}
