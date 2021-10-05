import { Button } from "@mui/material";

import { CssTextFieldLight } from "../CssTextFieldLight";
import { CssTextFieldDark } from "../CssTextFieldDark";
import { useState } from "react";
import { withRouter } from "react-router";
import { wapService } from "../../services/waps.service";


function _ContactForm({ data, match }) {
    const [form, setForm] = useState({});


    function handleChange({ target }) {
        const { name, value } = target;
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    const StyledInput = (data.isDark) ? CssTextFieldDark : CssTextFieldLight

    function onSubmit(ev) {
        ev.preventDefault();
        wapService.sendLead(match.params.wapId, form);
    }
    return (
        <form onSubmit={onSubmit} className="flex direction-column">
            <StyledInput
                label="Name"
                value={form.name}
                onChange={handleChange}
                name="name"
                variant="standard"
            />
            <StyledInput
                label="Phone Number"
                value={form.phone}
                onChange={handleChange}
                name="phone"
                variant="standard"
            />
            <StyledInput
                label="Subject"
                value={form.subject}
                onChange={handleChange}
                name="subject"
                variant="standard"
            />
            <StyledInput
                label="Your Message"
                value={form.msg}
                onChange={handleChange}
                name="msg"
                variant="standard"
            />
            <Button type="submit" style={{ flex: 1 }} >send as email</Button>
        </form>
    )
}

export const ContactForm = withRouter(_ContactForm)