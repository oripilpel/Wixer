import { useEffect, useState } from "react";
import { WapPreview } from "../cmps/Dashboard/WapPreview";
import { wapService } from "../services/waps.service";
import { connect } from 'react-redux';
import { setLoader } from "../store/layout.actions";
import { Loader } from '../assets/img/Loader'



function _Dashboard({ user, loader }) {
    const [waps, setWaps] = useState(null)
    useEffect(async () => {
        setWaps(await wapService.getWaps())
    }, [])

    if (!waps) return <Loader />
    return (
        <div className="dashboard" style={{ paddingTop: "80px" }}>
            {waps.length === 0 && <h1>You dont have any website</h1>}
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

