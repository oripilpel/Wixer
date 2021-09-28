import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { StyledEngineProvider } from "@mui/styled-engine";
import { Tab, Tabs } from "@mui/material";
import { COMPONENT } from "../constants";
import { SidebarEditComponent } from "./SidebarEditComponent";
import { saveWap } from '../store/layout.actions'
import { SidebarAddComponent } from "./SidebarAddComponent";
import { Link } from "react-router-dom";


function _SideBar({ selected, update, cmps, style, _id, saveWap }) {
    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {
        if (selected) setIsEdit(true);
    }, [selected]);
    const handleChange = (ev, value) => {
        setIsEdit(value === 'add'? false : true);
      };
    const onUpdate = (field, data) => {
        update(selected, field, data);
    }
    const onSave = () => {
        saveWap({ _id, cmps, style })
    }
    return (
        <div className="side-bar">
            <Tabs value={isEdit ? 'edit' : 'add'} onChange={handleChange} aria-label="disabled tabs example">
                <Tab label="Add" value="add"/>
                <Tab label="Edit" value ="edit"/>
            </Tabs>
            <Link to={`/publish/${_id}`}>Publish</Link>
            {!isEdit && <SidebarAddComponent />}
            {isEdit && selected && (
                <>
                    <StyledEngineProvider injectFirst>
                        <SidebarEditComponent
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