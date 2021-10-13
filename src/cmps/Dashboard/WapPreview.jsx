import React, { useEffect, useState } from 'react';
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
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const options = [
    'Edit',
    'Preview',
    'Delete'
];

const ITEM_HEIGHT = 48;

export function WapPreview({ wap, onRemove }) {
    const [expanded, setExpanded] = useState(false)
    const [wapToShow, setWap] = useState(wap)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    useEffect(() => {
        setWap(wap)
    }, [wap.leads?.length])

    const onSetWap = async (wap) => {
        let newWap = { ...wap }
        delete newWap.owner
        await wapService.save(newWap)
        setWap(wap)
    }

    const BASE_URL = process.env.NODE_ENV === 'production'
        ? '/public/websites-screenshots?imgId='
        : 'http://localhost:3030/public/websites-screenshots?imgId='

    const [previewImage, setImage] = useState(wap.screenshot?.url)

    const handleError = () => {
        setImage(NoAvailableImg)
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = async (option) => {
        setAnchorEl(null);
        switch (option) {
            case 'Edit':
                window.location.replace(`/editor/${wapToShow._id}`);
                break;
            case 'Preview':
                if (wapToShow.name) window.open(`/${wapToShow.name}`, '_blank');
                else window.location.replace(`/preview/${wapToShow._id}`);
                break;
            case 'Delete':
                try{
                    await wapService.remove(wap._id);
                    onRemove(wap._id);
                } catch(err) {
                    console.log(err)
                }
                break;
            default:
                break;
        }
    }

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
            <Card>
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
                                <MoreVertIcon fontSize="large" />
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
                    component="div"
                    height="194"
                    // image={previewImage}
                    // onError={handleError}
                    alt={wapToShow.name ? wapToShow.name : wapToShow._id}
                    sx={{ objectPosition: "top", textAlign:'center' }}
                >
                    
                    <h2>{wap.name || wap._id}</h2>
                </CardMedia>
                <CardActions disableSpacing>
                    <Badge badgeContent={wapToShow.leads ? getNewLeads().length : 0} color="primary">
                        <MailIcon fontSize="large" color="action" />
                    </Badge>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon fontSize="large" />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {getNewLeads().length > 0 && (
                            <>
                                <Typography paragraph sx={{ fontWeight: 'bold', marginBottom: 0 }}>
                                    New leads:
                                </Typography>
                                <Typography paragraph>
                                    <LeadList wap={wapToShow} onSetWap={onSetWap} leads={getNewLeads()} />
                                </Typography>
                            </>
                        )}
                        {getMarkedLeads().length > 0 && (
                            <>
                                <Typography paragraph sx={{ fontWeight: 'bold', marginBottom: 0 }}>
                                    Marked leads:
                                </Typography>
                                <Typography paragraph>
                                    <LeadList isMarkedLeads={true} wap={wapToShow} onSetWap={onSetWap} leads={getMarkedLeads()} />
                                </Typography>
                            </>
                        )}
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}