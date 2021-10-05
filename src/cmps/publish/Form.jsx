import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";

import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { wapService } from "../../services/waps.service";

function _ContactForm({ data, style, update, match }) {
    // const  = props
    const [form, setForm] = useState({});

    useEffect(() => {
        //componentDidMount
        console.log(match.params.wapId)
        
    }, []);

    function handleChange({ target }) {
        const { name, value } = target;
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }
    function onSubmit(ev) {
        ev.preventDefault();
        wapService.sendLead(match.params.wapId, form);
    }
    return (
        <form onSubmit={onSubmit} className="flex direction-column">
            <TextField
                label="Name"
                value={form.name}
                onChange={handleChange}
                name="name"
            />
            <TextField
                label="Phone Number"
                value={form.phone}
                onChange={handleChange}
                name="phoneNumber"
            />
            <TextField
                label="Subject"
                value={form.subject}
                onChange={handleChange}
                name="subject"
            />
            <TextField
                label="Your Message"
                value={form.msg}
                onChange={handleChange}
                name="messsage"
            />
                <Button type="submit" style={{ flex: 1 }} >send as email</Button>
        </form>
    )
}

export const ContactForm = withRouter(_ContactForm)