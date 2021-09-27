import React from "react";
import { translateStyle } from "../services/wap.service";
import { connect } from 'react-redux';


import { Image } from "../cmps/Image";
import { Text } from "../cmps/publish/Text";
import { Video } from "../cmps/Video";
import { Nav } from "../cmps/publish/Nav";
import { Button } from "../cmps/Button";

function _Publish({ cmps }) {
    console.log('cmps', cmps)
    const KeysToComponentMap = {
        text: Text,
        image: Image,
        video: Video,
        nav: Nav,
        button: Button,
    };

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


    return (
        cmps.map(sec => {
            console.log('sec', sec);
            return <div className="section" style={{ ...sec.style, display: 'flex', flexDirection: 'column' }}>
                {sec.cmps.map(colOrIS => <div className={colOrIS.cmps[0].cmps ? 'inner-section flex' : 'col'} style={colOrIS.style}>
                    {colOrIS.cmps.map(colOrCmp => <div className={colOrCmp.cmps ? 'col flex direction-column' : 'cmp'} style={colOrCmp.style}>
                        {colOrCmp.cmps && colOrCmp.cmps.map(cmp => <div className="cmp">{renderer(cmp)}</div>)}
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

export const Publish = connect(mapStateToProps, null)(_Publish);
