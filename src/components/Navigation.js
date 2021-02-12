import React from 'react'
import { MenuItems } from './MenuItems'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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
  }
}))

export const AppNavBar = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Aaron Billings
          </Typography>
          <MenuItems handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} classes={classes} />
        </Toolbar>
      </AppBar>
    </div>
  )
}
