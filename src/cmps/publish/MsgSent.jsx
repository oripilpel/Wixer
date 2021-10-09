import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export function MsgSent({ isOpen, setIsOpen }) {

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={() => { setIsOpen(false) }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Message Sent!"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => { setIsOpen(false) }} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}