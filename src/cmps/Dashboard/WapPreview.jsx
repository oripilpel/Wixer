import { Link } from "react-router-dom";
import { LeadList } from "./LeadList";

export function WapPreview({ wap }) {
    const BASE_URL = process.env.NODE_ENV === 'production'
        ? '/websites-screenshots/'
        : '//localhost:3030/websites-screenshots/'
    return (
        <div className="wap-preview flex">
            {/* IT WORKS ONLY ON HEROKO!!!! NOT WORKING IN LOCALHOST */}
            <img src={`${BASE_URL + wap._id}.jpg`} alt="site image" />
            <div>
                <div>
                    <Link to={`/editor/${wap._id}`}>Edit Site</Link>
                    <Link to={`/publish/${wap._id}`}>Link To Site</Link>
                </div>
                <LeadList leads={wap['leads']} />
            </div>
        </div>
    )
}