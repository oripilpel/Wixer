import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { LoginSignup } from '../pages/LoginSignup';
import { Link } from 'react-router-dom';
import { wapService } from '../services/waps.service';
import { TextFieldOutlined } from '../cmps/TextFieldOutlined';
import { Loader } from '../assets/img/Loader';


export function SaveModal({ name, isModalOpen, setIsModalOpen, onSave, user, isPublish }) {
    const [siteName, setSiteName] = useState('')
    const [isNameAvailable, setIsNameAvailable] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(!!user)
    const [loading, setLoading] = useState(false)
    const [copyText, setCopyText] = useState('Copy link')

    return (
        <div className="save-modal">
            <Dialog open={isModalOpen} onClose={() => { setIsModalOpen(false) }}>
                {!isLoggedIn && <LoginSignup login={true} setIsLoggedIn={() => setIsLoggedIn(true)} />}
                {isLoggedIn && isPublish && !name &&
                    <form
                        className="site-name-modal flex direction-column"
                        onSubmit={async (ev) => {
                            ev.preventDefault()
                            setLoading(true)
                            try {
                                const wap = await wapService.getByName(siteName)
                                setLoading(false)
                                setIsNameAvailable(false)
                            }
                            catch (err) {
                                (async function () {
                                    debugger
                                    setLoading(true)
                                    await onSave(siteName)
                                    setLoading(false)
                                    setIsNameAvailable(true)
                                    setIsModalOpen(true)
                                })()
                            }
                        }}>
                        <h2>Site name:</h2>
                        <p>Pick a creative and unique name for your site</p>
                        <TextFieldOutlined
                            autoFocus
                            margin="dense"
                            label="Site Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={siteName}
                            onChange={({ target }) => { setSiteName(target.value) }}
                        />
                        <Button
                            sx={{ fontSize: '1.2rem' }}
                            className="action"
                            variant={'contained'}
                            color={'primary'}
                            type="submit"
                            disabled={loading}
                            fullWidth={true}
                        >
                            {loading ? <Loader width="12" color="#f5f5f5" height='33' /> : 'Save'}
                        </Button>
                        <p style={{ opacity: (isNameAvailable) ? 0 : 1, color: 'red', position: 'absolute', bottom: '80px', fontSize: '14px' }}>*Name is taken</p>
                    </form>

                }
                {isLoggedIn && (name || !isPublish) && <div className="site-saved-modal flex direction-column justify-center">
                    <div className="flex justify-between">
                        <h2>Site Saved</h2>
                        <CloseIcon className="close-btn" onClick={() => setIsModalOpen(false)} />
                    </div>
                    <p>your work has been saved, you can see it on the dashboard page</p>
                    <div className="flex justify-between">

                        <Link className="modal-link dashboard" onClick={() => setIsModalOpen(false)} to="/dashboard">Dashboard</Link>
                        {isPublish && name && <div className="modal-link" onClick={() => {
                            navigator.clipboard.writeText(`https://wixer-app.herokuapp.com/${name}`)
                            setCopyText('Link copied!')
                            setTimeout(() => { setCopyText('Copy link') }, 2000)
                        }}>{copyText}</div>}
                        {isPublish && name && <Link className="modal-link" to={`/${name}`}>Go to site</Link>}
                    </div>
                </div>}
            </Dialog>
        </div >
    )
}

