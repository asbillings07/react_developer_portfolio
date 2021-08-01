import React from 'react'
import { MenuDropDown, HorizontalMenu } from "./Menu";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { MenuItem, Menu } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

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

export const MenuItems = ({ classes }) => {
    const width = useWindowWidth();

    return (
        <div>
            { width <= 960 ? (<MenuDropDown classes={classes} StyledMenu={StyledMenu} StyledMenuItem={StyledMenuItem} />) : (<HorizontalMenu StyledMenuItem={StyledMenuItem} />)}
        </div>
    )
}

