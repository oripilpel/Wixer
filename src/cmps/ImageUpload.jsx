import { Button } from "@mui/material";

export function ImageUpload({ label, onUpload }) {
    return (
        <div>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={(ev) => onUpload(ev)}
                />
                <label htmlFor="raised-button-file">
                    <Button variant="contained" component="span" color="primary">
                        {label}
                    </Button>
                </label>
        </div>
    )
}