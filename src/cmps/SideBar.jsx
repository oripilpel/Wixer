import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { StyledEngineProvider } from "@mui/styled-engine";
import { Tab, Tabs } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';

import { COMPONENT } from "../constants";
import { SidebarEditComponent } from "./SidebarEditComponent";
import { SidebarAddComponent } from "./SidebarAddComponent";
import { saveWap } from '../store/layout.actions'

function _SideBar({ selected, update, cmps, style, _id, saveWap }) {
    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {
        if (selected) setIsEdit(true);
    }, [selected]);
    const handleChange = (ev, value) => {
        setIsEdit(value === 'add' ? false : true);
    };
    const onUpdate = (field, data) => {
        update(selected, field, data);
    }
    const onSave = () => {
        saveWap({ _id, cmps, style })
    }
    return (
        <div className="side-bar">
            <Tabs className='tabs' value={isEdit ? 'edit' : 'add'} onChange={handleChange} aria-label="disabled tabs example">
                <Tab icon={<AddBoxIcon />} className="tab" label="Add" value="add" />
                <Tab icon={<EditIcon />} className="tab" label="Edit" value="edit" />
            </Tabs>
            <div className="items">

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
                {isEdit && !selected && <div>Nothing is selected</div>}
            </div>
            <div className="save-pub">
                <div className="save" onClick={onSave}>
                    Save
                </div>
                <div className="pub">
                    <Link to={`/publish/${_id}`}>Publish</Link>
                </div>
            </div>
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