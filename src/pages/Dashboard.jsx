import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WapPreview } from "../cmps/Dashboard/WapPreview";
import { wapService } from "../services/waps.service";
import { Loader } from '../assets/img/Loader'



export function Dashboard() {
    const [waps, setWaps] = useState(null)
    useEffect(() => {
        (async function () {
            setWaps(await wapService.getWaps())
        })()
    }, [])


    if (!waps) return (
        <div className="dashboard">
            <Loader className="loader" />
        </div>
    )
    return (
        <div className="dashboard">
            {waps.length === 0 && (
                <>
                    <h1>You don't have any websites yet</h1>
                    <div className="create-first">
                        <Link to="/templates">Click here</Link>
                        <span> and create your first website by picking the template you love.</span>
                    </div>
                </>
            )}
            {waps.map(wap => wap.name ? < WapPreview wap={wap} /> : <></>)}
        </div >
    )
}