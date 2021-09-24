import { StyledEngineProvider } from "@mui/styled-engine";
import { useState } from "react";
import { ColumnSectionEdit } from "./ColumnSectionEdit";
import { ImageEdit } from "./ImageEdit";
import { SideBarItem } from "./SideBarItem";
import { TextEdit } from "./TextEdit";

export function SideBar({ sideBarItems, selected, update }) {
    const [isEdit, setIsEdit] = useState(false);
    const onAddClick = () => {
        setIsEdit(false);
    }
    const onEditClick = () => {
        setIsEdit(true);
    }
    const onUpdate = (field ,data) => {
        update(selected, field, data);
    }
    return (
        <div className="side-bar">
            <button onClick={onAddClick}>Add</button>
            <button onClick={onEditClick}>Edit</button>
            {!isEdit &&
                Object.values(sideBarItems).map((sideBarItem, index) => (
                    <SideBarItem key={sideBarItem.id} data={sideBarItem} type={sideBarItem.type} />
                ))
            }
            {isEdit && selected && (
                <>
                <StyledEngineProvider injectFirst>
                    <div>{JSON.stringify(selected)}</div>
                    {selected.type === 'column' && <ColumnSectionEdit style={selected.style} onUpdate={onUpdate}/>}
                    {selected.type === 'component' && selected.component.type === 'text' && <TextEdit style={selected.component.style} onUpdate={onUpdate}/>}
                    {selected.type === 'component' && selected.component.type === 'image' && <ImageEdit style={selected.component.style} onUpdate={onUpdate}/>}
                </StyledEngineProvider>
                </>
            )}
            {isEdit && !selected && <div>Nothing is selected</div>}
        </div>
    )
}