import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { blue } from '@mui/material/colors';

export function LeadList({ wap, onSetWap, leads }) {

    const handleChange = ({ target }) => {
        const leadIdx = wap.leads.findIndex(lead => {
            return lead.id === target.name
        })
        const newLeads = [...wap.leads]
        newLeads[leadIdx] = { ...newLeads[leadIdx], isDone: target.checked }
        const newWap = ({ ...wap, leads: newLeads })
        onSetWap(newWap)
    };

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}> */}
            {leads.map((lead, idx) => {
                return (
                    <React.Fragment key={lead.id || idx}>
                        <ListItem sx={{ paddingInline: 0 }} alignItems="flex-start">
                            <ListItemAvatar
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'flex-end',
                                    minWidth: 100
                                }}>
                                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                    {lead.name.charAt(0).toUpperCase()}
                                </Avatar>
                                {lead.id && (
                                    <Checkbox
                                        name={lead.id}
                                        checked={!lead.isDone ? false : true}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />)}
                            </ListItemAvatar>
                            <ListItemText
                                primary={lead.subject}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {lead.name}
                                        </Typography>
                                        {` — ${new Date(lead.date).toLocaleDateString()} —`}
                                        {lead.phone && lead.phone + ' — '}
                                        {lead.email && (lead.email + ' — ')}
                                        {lead.msg && lead.msg}
                                        <Divider variant="inset" component="li" />
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </React.Fragment>
                )
            })}
        </List >
    )
}