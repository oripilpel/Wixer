import { Button } from "@mui/material";

import { CssTextFieldLight } from "./CssTextFieldLight";
import { CssTextFieldDark } from "./CssTextFieldDark";

export function ContactForm({ data, update, style }) {

    const StyledInput = (data.isDark) ? CssTextFieldDark : CssTextFieldLight

    return (
        <div style={style} className="flex direction-column">
            <StyledInput
                label="Name"
                name="name"
                variant="standard"
                fullWidth={true}

            />
            <StyledInput
                label="Email"
                name="email"
                variant="standard"
                fullWidth={true}


            />
            <StyledInput
                label="Phone Number"
                name="phone"
                variant="standard"
                fullWidth={true}


            />
            <StyledInput
                label="Subject"
                name="subject"
                variant="standard"
                fullWidth={true}


            />
            <StyledInput
                label="Your Message"
                name="msg"
                variant="standard"
                fullWidth={true}


            />
            <Button>Contact Us</Button>
        </div>
    )
}