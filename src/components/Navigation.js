import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum'
import PersonIcon from '@material-ui/icons/Person'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import Link from '@material-ui/core/Link'

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
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    alignSelf: 'flex-end'
  },
  link: {
    color: 'white'
  }
}))

export const AppNavBar = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link className={classes.link} href='/'>
              Aaron Billings
            </Link>
          </Typography>
          <Button
            className={classes.menuButton}
            aria-controls='customized-menu'
            aria-haspopup='true'
            variant='contained'
            color='primary'
            onClick={handleClick}
          >
            Open Menu
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
                <PhotoAlbumIcon fontSize='small' />
              </ListItemIcon>
              <a href='/'>
                <ListItemText primary='Projects' />
              </a>
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <PersonIcon fontSize='small' />
              </ListItemIcon>
              <a href='/about'>
                <ListItemText primary='About Me' />
              </a>
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <ContactMailIcon fontSize='small' />
              </ListItemIcon>
              <a href='/contact'>
                <ListItemText primary='Contact Me' />
              </a>
            </StyledMenuItem>
          </StyledMenu>
        </Toolbar>
      </AppBar>
    </div>
  )
}
