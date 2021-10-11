import React from 'react';
import Dialog from '@mui/material/Dialog';

export function MsgSent({ isOpen, setIsOpen, backgroundColor }) {

    return (
        <Dialog
            open={isOpen}
            onClose={() => { setIsOpen(false) }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className="msg-sent">Message Sent</div>
        </Dialog>
    );
}