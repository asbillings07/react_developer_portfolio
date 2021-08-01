import React from 'react'
import { MenuItems } from './MenuItems'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

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

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link className={classes.link} href='/'>
              Aaron Billings
            </Link>
          </Typography>
          <MenuItems classes={classes} />
        </Toolbar>
      </AppBar>
    </div>
  )
}
