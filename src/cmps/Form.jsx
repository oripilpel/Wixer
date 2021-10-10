import { Button } from "@mui/material";

import { StyledTextField } from "./StyledTextField";

export function ContactForm({ data }) {

    const StyledInput = StyledTextField(data.isDark)

    return (
        <div className="contact-form flex direction-column">
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