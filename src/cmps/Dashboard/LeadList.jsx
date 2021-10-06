export function LeadList({ leads }) {
    return (
        <ul className="lead-list">
            {leads.map((lead, idx) => <li key={lead.date || idx} className="lead">{`subject : ${lead.subject} name: ${lead.name} phone: ${lead.phone} message: ${lead.msg} {recievedAt : ${new Date(lead.date)}}`}</li>)}
        </ul>
    )
}