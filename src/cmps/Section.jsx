import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { SECTION, SIDEBAR_ITEM, COMPONENT, SIDEBAR_COLUMN, SIDEBAR_INNERSECTION, INNERSECTION, COLUMN } from "../constants.js";
import { DropZone } from "./DropZone";
import { Column } from "./Column";
import { InnerSection } from "./InnerSection.jsx";
import { Actions } from "./Actions.jsx";

export function Section({ data, cmps, handleDrop, path, updateComponent, onSelect, selected }) {
  const ref = useRef(null);

  const [actionsVisible, setActionsVisible] = useState(false);

  const [, drop] = useDrop({
    accept: SECTION,
  });
  const [{ isDragging }, drag] = useDrag({
    type: SECTION,
    item: {
      type: SECTION,
      style: data.style,
      id: data.id,
      children: data.children,
      path
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });


  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const renderColumn = (column, currentPath) => {
    return (
      <Column
        key={column.id}
        data={column}
        cmps={column.cmps}
        handleDrop={handleDrop}
        path={currentPath}
        updateComponent={updateComponent}
        onSelect={onSelect}
        selected={selected}
        onClick={() => onSelect('column', column)}
      />
    );
  };

  const renderInnerSection = (innerSection, currentPath) => {

    return (
      <InnerSection
        key={innerSection.id}
        data={innerSection}
        components={cmps}
        handleDrop={handleDrop}
        path={currentPath}
        updateComponent={updateComponent}
        onSelect={onSelect}
        selected={selected}
        onClick={() => onSelect('innersection', innerSection)}
      />
    );
  };

  const hasOnlyInnersections = (data.cmps.some(cmp => cmp.type === INNERSECTION));

  const select = (ev) => {
    ev.stopPropagation();
    onSelect('section', path.split('-'));
  }

  return (
    <div
      ref={ref}
      style={{ ...data.style, opacity }}
      className={`section draggable ${(hasOnlyInnersections) ? ' flex direction-column' : ' flex'} ${actionsVisible ? 'element-hover' : ''}`}
      onClick={select}
      onMouseEnter={() => {
        setActionsVisible(true)
      }}
      onMouseLeave={() => {
        setActionsVisible(false)
      }}>
      {data.cmps.map((child, index) => {
        const currentPath = `${path}-${index}`;
        return (
          <React.Fragment key={child.id}>
            <DropZone
              data={{
                path: currentPath,
                childrenCount: data.cmps.length,
              }}
              accept={(hasOnlyInnersections) ? [INNERSECTION, SIDEBAR_INNERSECTION] : (data.cmps.length >= 4) ? [COLUMN] : [SIDEBAR_ITEM, COMPONENT, SIDEBAR_COLUMN, COLUMN]}
              onDrop={handleDrop}
              horizontalDrag={(hasOnlyInnersections) ? false : true}
            />
            {((child.type === COLUMN) && renderColumn(child, currentPath)) || renderInnerSection(child, currentPath)}
          </React.Fragment>
        );


      })}
      <DropZone
        data={{
          path: `${path}-${data.cmps.length}`,
          childrenCount: data.cmps.length
        }}
        accept={(hasOnlyInnersections) ? [INNERSECTION, SIDEBAR_INNERSECTION] : (cmps.length >= 4) ? [COLUMN] : [SIDEBAR_ITEM, COMPONENT, SIDEBAR_COLUMN, COLUMN]}
        onDrop={handleDrop}
        horizontalDrag={(hasOnlyInnersections) ? false : true}
        isLast
      />
      {actionsVisible && <Actions path={path} type={SECTION} />}
    </div>
  );
};

