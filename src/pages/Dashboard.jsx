import { useEffect, useState } from "react";
import { WapPreview } from "../cmps/Dashboard/WapPreview";
import { wapService } from "../services/waps.service";
import { Loader } from '../assets/img/Loader'



export function Dashboard() {
    const [waps, setWaps] = useState(null)
    useEffect(async () => {
        setWaps(await wapService.getWaps())
    }, [])

    if (!waps) return <Loader />
    return (
        <div className="dashboard" style={{ paddingTop: "80px" }}>
            {waps.length === 0 && <h1>You dont have any website</h1>}
            {waps.map(wap => wap.name ? < WapPreview wap={wap} /> : <></>)}
        </div >
    )
}