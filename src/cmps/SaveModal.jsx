import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { LoginSignup } from '../pages/LoginSignup';
import { Link } from 'react-router-dom';


export function SaveModal({ cmps, name, isModalOpen, setIsModalOpen, onSave, user, isPublish, loadWap }) {

    const [siteName, setSiteName] = useState('')
    const [isNameAvailable, setIsNameAvailable] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(!!user)
    const [loading, setLoading] = useState(false)

    return (
        <div>
            <Dialog open={isModalOpen} onClose={() => { setIsModalOpen(false) }}>
                {!isLoggedIn && <LoginSignup login={true} setIsLoggedIn={() => setIsLoggedIn(true)} />}
                {isLoggedIn && isPublish && !name &&
                    <form className=" flex direction-column" onSubmit={async (ev) => {
                        ev.preventDefault()
                        setLoading(true)
                        await loadWap(null, siteName)
                        setLoading(false)
                        setIsNameAvailable(!cmps)
                        if (isNameAvailable) {
                            onSave(siteName)
                            setIsModalOpen(false)
                        }
                    }}>
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
                        <div className="field flex justify-center">
                            <Button
                                className="action"
                                variant={'contained'}
                                color={'primary'}
                                type="submit"
                                disabled={loading}
                            >
                                Save
                            </Button>
                        </div>
                        {loading && <div>Loading...</div>}
                    </form>

                }
                {isLoggedIn && (name || !isPublish) && <>
                    <h2>Site Saved</h2>
                    <p>your work has been saved, you can see it on the dashboard page</p>
                    <Link onClick={() => setIsModalOpen(false)} to="/dashboard">Dashboard</Link>
                    <Button onClick={() => setIsModalOpen(false)} >Close</Button>
                </>}
                {isPublish && name && <Link to={`/${name}`}>Go to site</Link>}
            </Dialog>
        </div >
    );
}