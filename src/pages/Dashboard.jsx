import { useEffect, useState } from "react";
import { WapPreview } from "../cmps/Dashboard/WapPreview";
import { wapService } from "../services/waps.service";
import { connect } from 'react-redux';
import { setLoader } from "../store/layout.actions";
import Loader from '../assets/img/loader.svg'



function _Dashboard({ user, loader }) {
    const [waps, setWaps] = useState([])
    useEffect(async () => {
        setLoader(true)
        setWaps(await wapService.getWaps())
        setLoader(false)
    }, [])
    return (
        <div style={{ paddingTop: "80px" }}>
            {loader && <img src={Loader} width="200" height="200" />}
            {waps.map(wap => wap['leads'] ? < WapPreview wap={wap} /> : <></>)}
        </div >
    )
}


function mapStateToProps(state) {
    return {
        loader: state.layoutModule.loader,
        user: state.layoutModule.user
    }
}
const mapDispatchToProps = {
    setLoader
}


export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard);

