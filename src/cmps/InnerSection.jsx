import React, { useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { INNERSECTION, COLUMN, SIDEBAR_COLUMN } from "../constants.js";
import { DropZone } from "./DropZone";
import Column from "./Column";
import { Actions } from "./Actions.jsx";
import { translateStyle } from "../helpers.js";

export function InnerSection({ data, components, handleDrop, path, updateComponent, onSelect, selected }) {
    const ref = useRef(null);

    const [actionsVisible, setActionsVisible] = useState(false);

    const [{ isDragging }, drag] = useDrag({
        type: INNERSECTION,
        item: {
            type: INNERSECTION,
            id: data.id,
            cmps: data.cmps,
            style: data.style,
            path
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });


    const opacity = isDragging ? 0 : 1;
    drag(ref);

    const renderColumn = (column, currentPath) => {
        return (
            <Column
                key={column.id}
                data={column}
                components={components}
                handleDrop={handleDrop}
                path={currentPath}
                updateComponent={updateComponent}
                onSelect={onSelect}
                selected={selected}
                onClick={() => onSelect('column', column)}
            />
        );
    };

    const style = translateStyle({ ...data.style });

    return (
        <div
            ref={ref}
            style={{ ...style, opacity }}
            className="base draggable innersection"
            onMouseEnter={() => setActionsVisible(true)}
            onMouseLeave={() => setActionsVisible(false)}>
            {/* {data.id} */}
            <div className="columns">
                {data.cmps.map((column, index) => {
                    const currentPath = `${path}-${index}`;

                    return (
                        <React.Fragment key={column.id}>
                            <DropZone
                                data={{
                                    path: currentPath,
                                    childrenCount: data.cmps.length,
                                }}
                                accept={[COLUMN, SIDEBAR_COLUMN]}
                                onDrop={handleDrop}
                                className="horizontalDrag"
                            />
                            {renderColumn(column, currentPath)}
                        </React.Fragment>
                    );
                })}
                <DropZone
                    data={{
                        path: `${path}-${data.cmps.length}`,
                        childrenCount: data.cmps.length
                    }}
                    accept={[COLUMN, SIDEBAR_COLUMN]}
                    onDrop={handleDrop}
                    className="horizontalDrag"
                    isLast
                />
                {actionsVisible && <Actions path={path} />}
            </div>
        </div>
    );
};

