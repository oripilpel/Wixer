import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { SECTION, SIDEBAR_ITEM, COMPONENT, SIDEBAR_ITEM_COLUMN, SIDEBAR_ITEM_INNERSECTION, INNERSECTION, COLUMN } from "../constants.js";
import { DropZone } from "./DropZone";
import Column from "./Column";
import { InnerSection } from "./InnerSection.jsx";

const style = {};
export function Section({ data, cmps, handleDrop, path, updateComponent, onSelect, selected }) {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: SECTION,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    }
  });
  const [{ isDragging }, drag] = useDrag({
    type: SECTION,
    item: {
      type: SECTION,
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
  const hasOnlyColumns = (data.cmps.every(cmp => cmp.type === COLUMN))


  return (
    <div ref={ref} style={{ ...style, opacity }} className={`base draggable section`}>
      {data.id}
      <div className={(hasOnlyColumns) ? 'columns' : 'innersections flex direction-column'}>
        {data.cmps.map((child, index) => {
          const currentPath = `${path}-${index}`;
          return (
            <React.Fragment key={child.id}>
              <DropZone
                data={{
                  path: currentPath,
                  childrenCount: data.cmps.length,
                }}
                accept={(hasOnlyColumns) ? [SIDEBAR_ITEM, COMPONENT, COLUMN, SIDEBAR_ITEM_COLUMN] : [ INNERSECTION, SIDEBAR_ITEM_INNERSECTION]}
                onDrop={handleDrop}
                className={(hasOnlyColumns) ? 'horizontalDrag' : ''}
              />
              {(child.type === COLUMN) && renderColumn(child, currentPath) || renderInnerSection(child, currentPath)}
            </React.Fragment>
          );


        })}
        <DropZone
          data={{
            path: `${path}-${data.cmps.length}`,
            childrenCount: data.cmps.length
          }}
          accept={(hasOnlyColumns) ? [SIDEBAR_ITEM, COMPONENT, COLUMN, SIDEBAR_ITEM_COLUMN] : [ INNERSECTION, SIDEBAR_ITEM_INNERSECTION]}
          onDrop={handleDrop}
          className={(hasOnlyColumns) ? 'horizontalDrag' : ''}
          isLast
        />
      </div>
    </div>
  );
};

