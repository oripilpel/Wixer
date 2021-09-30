import { Button } from "@mui/material";

export function ImageUpload({ label, onUpload }) {
    return (
        <div>
            {/* <label> {label} */}
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="raised-button-file">
                    <Button variant="contained" component="span" color="primary">
                        {label}
                    </Button>
                </label>
                {/* <input onChange={(ev) => onUpload(ev)} type="file" /> */}
            {/* </label> */}
        </div>
    )
}