import { Button } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export function ImageUpload({ label, onUpload }) {
    return (
        <div class="image-upload">
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={(ev) => onUpload(ev)}
            />
            <label htmlFor="raised-button-file">
                <Button className="button" variant="outlined" size="small" startIcon={<PhotoCameraIcon />} component="span" color="primary">
                    {label}
                </Button>
            </label>
        </div>
    )
}