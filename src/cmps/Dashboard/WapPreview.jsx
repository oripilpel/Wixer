import { Link } from "react-router-dom";
import { LeadList } from "./LeadList";

export function WapPreview({ wap }) {
    return (
        <div className="wap-preview flex">
            <img src="https://picsum.photos/200" alt="site image" />
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