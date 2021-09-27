import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { StyledEngineProvider } from "@mui/styled-engine";
import { COMPONENT } from "../constants";
import { EditComponent } from "./EditComponent";
import { SideBarItem } from "./SideBarItem";
import { saveWap } from '../store/layout.actions'

function _SideBar({ sideBarItems, selected, update, cmps, style, _id, saveWap }) {
    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {
        if(selected) setIsEdit(true);
    }, [selected]);
    const onAddClick = () => {
        setIsEdit(false);
    }
    const onEditClick = () => {
        setIsEdit(true);
    }
    const onUpdate = (field, data) => {
        update(selected, field, data);
    }
    const onSave = () => {
        saveWap({ _id, cmps, style })
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
            <button onClick={onSave}>Save</button>
            {isEdit && !selected && <div>Nothing is selected</div>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cmps: state.layoutModule.cmps,
        style: state.layoutModule.style,
        _id: state.layoutModule._id
    }
}

const mapDispatchToProps = {
    saveWap
}

export const SideBar = connect(mapStateToProps, mapDispatchToProps)(_SideBar);