export function LeadList({ leads }) {
    return (
        <table className="lead-list">
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Message</th>
                    <th>Recieved At</th>
                </tr>
            </thead>
            <tbody>
                {leads.map((lead, idx) => <tr key={lead.date || idx} className="lead">
                    <td>{lead.subject}</td>
                    <td>{lead.name}</td>
                    <td>{lead.phone}</td>
                    <td>{lead.msg} </td>
                    <td> {new Date(lead.date).toString()}</td>
                </tr>)}
            </tbody>
        </table>
    )
}