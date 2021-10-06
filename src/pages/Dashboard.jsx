import { useEffect, useState } from "react";
import { WapPreview } from "../cmps/Dashboard/WapPreview";
import { wapService } from "../services/waps.service";

export function Dashboard() {
    const [waps, setWaps] = useState([])
    useEffect(async () => {

        setWaps(await wapService.getWaps())
    }, [])
    return (
        <div style={{ paddingTop: "80px" }}>
            {waps.map(wap => wap['leads'] ? < WapPreview wap={wap} /> : <></>)}
        </div >
    )
}