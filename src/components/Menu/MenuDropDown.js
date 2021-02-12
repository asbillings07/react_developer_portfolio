import React from 'react'
import { ListItemIcon, ListItemText, Button } from '@material-ui/core'
import { PhotoAlbum, Person, ContactMail } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export const MenuDropDown = ({ classes, StyledMenu, StyledMenuItem }) => {

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = e => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div>
            <Button
                className={classes.menuButton}
                aria-controls='customized-menu'
                aria-haspopup='true'
                variant='contained'
                color='primary'
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faBars} size='2x' />
            </Button>
            <StyledMenu
                id='customized-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <PhotoAlbum fontSize='small' />
                    </ListItemIcon>
                    <a href='/'>
                        <ListItemText primary='Projects' />
                    </a>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <Person fontSize='small' />
                    </ListItemIcon>
                    <a href='/about'>
                        <ListItemText primary='About Me' />
                    </a>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <ContactMail fontSize='small' />
                    </ListItemIcon>
                    <a href='/contact'>
                        <ListItemText primary='Contact Me' />
                    </a>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    )
}
