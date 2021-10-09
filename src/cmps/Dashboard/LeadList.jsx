import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

export function LeadList({ wap, onSetWap, leads }) {
    const handleChange = ({target}) => {
        const leadIdx = wap.leads.findIndex(lead => {
            return lead.id === target.name
        })
        const newLeads = [...leads]
        newLeads[leadIdx].isDone = target.checked
        const newWap = ({_id: wap._id, leads: newLeads })
        onSetWap(newWap)
    };
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {leads.map((lead, idx) => {
                return (
                    <React.Fragment key={lead.id || idx}>
                        <ListItem sx={{ paddingInline: 0 }} alignItems="flex-start">
                            <ListItemAvatar>
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
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </React.Fragment>
                )
            })}
        </List>
    )
}