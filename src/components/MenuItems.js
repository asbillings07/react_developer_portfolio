import React from 'react'
import { ListItemIcon, ListItemText, Button, MenuItem, Menu } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { PhotoAlbum, Person, ContactMail } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white
            }
        }
    }
}))(MenuItem)

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5'
    }
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        {...props}
    />
))

export const MenuItems = ({ handleClick, handleClose, classes, anchorEl }) => {
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
