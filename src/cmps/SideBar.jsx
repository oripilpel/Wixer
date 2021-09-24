import { StyledEngineProvider } from "@mui/styled-engine";
import { useState } from "react";
import { COMPONENT } from "../constants";
import { EditComponent } from "./EditComponent";
import { SideBarItem } from "./SideBarItem";

export function SideBar({ sideBarItems, selected, update }) {
    const [isEdit, setIsEdit] = useState(false);
    const onAddClick = () => {
        setIsEdit(false);
    }
    const onEditClick = () => {
        setIsEdit(true);
    }
    const onUpdate = (field, data) => {
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
                        <EditComponent
                            type={(selected.type === COMPONENT) ? selected.component.type : selected.type}
                            style={(selected.type === COMPONENT) ? selected.component.style : selected.style}
                            onUpdate={onUpdate} />
                    </StyledEngineProvider>
                </>
            )}
            {isEdit && !selected && <div>Nothing is selected</div>}
        </div>
    )
}