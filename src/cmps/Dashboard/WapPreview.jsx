import * as React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
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
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, green } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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

export function WapPreview({ wap, match }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const BASE_URL = process.env.NODE_ENV === 'production'
        ? '/websites-screenshots/'
        : '//localhost:3030/websites-screenshots/'

    const imageSrc = `${BASE_URL + wap._id}.jpg`
    const [previewImage, setImage] = useState(imageSrc)
    const handleError = () => {
        setImage(NoAvailableImg)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (option) => {
        setAnchorEl(null);
        switch (option) {
            case 'Edit':
                window.location.replace(`/editor/${wap._id}`);
                break;
            case 'Preview':
                window.open(`/publish/${wap._id}`, '_blank');
                break;
            default:
                break;
        }
    };

    return (
        <div className="wap-preview">
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: wap.name ? green[500] : red[500] }} aria-label="recipe">
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
                    title={wap.name ? wap.name : 'Not published'}
                    subheader="September 14, 2016 (demo)"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={previewImage}
                    onError={handleError}
                    alt={wap.name ? wap.name : wap._id}
                />
                <CardActions disableSpacing>
                    <Badge badgeContent={wap.leads ? wap.leads.length : 0} color="primary">
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
                        <Typography paragraph>New leads:</Typography>
                        <Typography paragraph>
                            <LeadList leads={wap['leads'] ? wap['leads'] : []} />
                        </Typography>
                        <Typography paragraph>
                            Answered leads:
                        </Typography>
                        <Typography paragraph>
                            LEADS HERE
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}