import React, { useEffect } from "react";
import { translateStyle } from "../services/wap.service";
import { connect } from 'react-redux';


import { Image } from "../cmps/Image";
import { Text } from "../cmps/publish/Text";
import { Video } from "../cmps/Video";
import { Nav } from "../cmps/publish/Nav";
import { Button } from "../cmps/Button";
import { loadWap } from '../store/layout.actions'

function _Publish({ match, cmps, loadWap }) {
    const KeysToComponentMap = {
        text: Text,
        image: Image,
        video: Video,
        nav: Nav,
        button: Button,
    };

    useEffect(() => {
        const id = match.params.wapId;
        if (id) loadWap(id);
    }, []);

    const renderer = ({ component }) => {
        if (!component) return
        if (typeof KeysToComponentMap[component.type] !== "undefined") {
            return React.createElement(
                KeysToComponentMap[component.type],
                {
                    id: component.id,
                    key: component.id,
                    data: component.data,
                    style: translateStyle({ ...component.style }),
                },
            );
        }
    }

console.log(cmps);
    return (
        cmps.map((sec, secIdx) => {
            return <div key={secIdx} className="section" style={{ ...sec.style, display: 'flex', flexDirection: 'column' }}>
                {sec.cmps.map((colOrIS, colOrISIdx) => <div key={colOrISIdx} className={colOrIS.cmps[0].cmps ? 'inner-section flex' : 'col'} style={colOrIS.style}>
                    {colOrIS.cmps.map((colOrCmp, colOrCmpIdx) => <div key={colOrCmpIdx} className={colOrCmp.cmps ? 'col flex direction-column' : 'cmp'} style={colOrCmp.style}>
                        {colOrCmp.cmps && colOrCmp.cmps.map((cmp, cmpIdx) => <div key={cmpIdx}  className="cmp">{renderer(cmp)}</div>)}
                        <div className="cmp">{renderer(colOrIS)}</div>
                    </div>)
                    }
                </div>)}
            </div>
        })
    )
}

function mapStateToProps(state) {
    return {
        cmps: state.layoutModule.cmps
    }
}
const mapDispatchToProps = {
    loadWap
}

export const Publish = connect(mapStateToProps, mapDispatchToProps)(_Publish)