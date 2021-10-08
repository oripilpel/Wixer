import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export function SaveModal({ name, isModalOpen, setIsModalOpen, onSave }) {

    const [siteName, setSiteName] = useState('')
    return (
        <div>
            <Dialog open={isModalOpen} onClose={() => { setIsModalOpen(false) }}>
                <DialogTitle>{(!name) ? 'Save Site' : 'Site Saved'}</DialogTitle>
                {!name && <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        label="Site Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={siteName}
                        onChange={({ target }) => { setSiteName(target.value) }}
                    />
                </DialogContent>}
                <DialogActions>
                    {!name && <Button onClick={() => onSave(siteName)} >Save</Button>}
                    {name && <Button onClick={() => setIsModalOpen(false)} >Close</Button>}
                </DialogActions>
            </Dialog>
        </div>
    );
}