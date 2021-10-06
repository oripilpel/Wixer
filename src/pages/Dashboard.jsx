import { Label } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { wapService } from "../services/waps.service";

export function Dashboard() {
    const [waps, setWaps] = useState([])
    useEffect(async () => {
        setWaps(await wapService.getWaps())
    }, [])
    return (
        <div style={{ paddingTop: "80px" }}>
            {waps.map(wap => (wap['leads']) ? (<div key={wap._id}>wapId : {wap._id} Leads :
                < ul > {wap['leads'].map(lead => <li>{`subject : ${lead.subject} name: ${lead.name} phone: ${lead.phone} message: ${lead.msg} {recievedAt : ${new Date(lead.date)}}`} </li>)}</ul>
            </div>) : '')
            }
        </div >
    )
}