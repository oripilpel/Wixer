import React, { useState } from 'react';
import { wapService } from '../../services/waps.service';
import { LeadList } from "./LeadList";
import NoAvailableImg from '../../assets/img/no-available-img.jpg'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red, green } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MailIcon from '@mui/icons-material/Mail';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const options = [
    'Edit',
    'Preview',
];

const ITEM_HEIGHT = 48;

export function WapPreview({ wap }) {
    const [expanded, setExpanded] = useState(false);
    const [wapToShow, setWap] = useState(wap)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const onSetWap = async (wap) => {
        let newWap = { ...wap }
        delete newWap.owner
        await wapService.save(newWap, false)
        setWap(wap)
    }

    const BASE_URL = process.env.NODE_ENV === 'production'
        ? '/api/img?imgId='
        : 'http://localhost:3030/public/websites-screenshots?imgId='

    const imageSrc = `${BASE_URL + wapToShow._id}`
    const [previewImage, setImage] = useState(imageSrc)

    const handleError = () => {
        setImage(NoAvailableImg)
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (option) => {
        setAnchorEl(null);
        switch (option) {
            case 'Edit':
                window.location.replace(`/editor/${wapToShow._id}`);
                break;
            case 'Preview':
                window.open(`/publish/${wapToShow._id}`, '_blank');
                break;
            default:
                break;
        }
    };
    const getNewLeads = () => {
        if (!wapToShow.leads) return []
        const newLeads = wapToShow.leads.filter(lead => {
            return !lead.isDone
        })
        return newLeads
    }
    const getMarkedLeads = () => {
        if (!wapToShow.leads) return []
        const markedLeads = wapToShow.leads.filter(lead => {
            return lead.isDone
        })
        return markedLeads
    }
    return (
        <div className="wap-preview">
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: wapToShow.name ? green[500] : red[500] }} aria-label="recipe">
                            W
                        </Avatar>
                    }
                    action={
                        <>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls="long-menu"
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: 'auto',
                                    },
                                }}
                            >
                                {options.map((option) => (
                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => handleClose(option)}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    }
                    title={wapToShow.name ? wapToShow.name : 'Not published'}
                    subheader={new Date(wap.createdAt).toLocaleDateString()}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={previewImage}
                    onError={handleError}
                    alt={wapToShow.name ? wapToShow.name : wapToShow._id}
                />
                <CardActions disableSpacing>
                    <Badge badgeContent={wapToShow.leads ? getNewLeads().length : 0} color="primary">
                        <MailIcon color="action" />
                    </Badge>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph sx={{ marginBottom: 0 }}>
                            New leads:{!getNewLeads().length && ' empty'}</Typography>
                        <Typography paragraph>
                            <LeadList wap={wapToShow} onSetWap={onSetWap} leads={getNewLeads()} />
                        </Typography>
                        <Typography paragraph sx={{ marginBottom: 0 }}>
                            Marked leads:{!getMarkedLeads().length && ' empty'}
                        </Typography>
                        <Typography paragraph>
                            <LeadList wap={wapToShow} onSetWap={onSetWap} leads={getMarkedLeads()} />
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}