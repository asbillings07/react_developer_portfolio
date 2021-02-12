import React from 'react'
import styled from 'styled-components'
import { ListItemIcon } from '@material-ui/core'
import { PhotoAlbum, Person, ContactMail } from '@material-ui/icons'

export const MenuIcons = ({ StyledMenuItem }) => {
    return (
        <div>
            <StyledHorizontalMenu>
                <StyledMenuItem>
                    <ListItemIcon>
                        <PhotoAlbum fontSize='small' />
                    </ListItemIcon>
                    <MenuLink href='/'>
                    </MenuLink>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <Person fontSize='small' />
                    </ListItemIcon>
                    <MenuLink href='/about'>

                    </MenuLink>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <ContactMail fontSize='small' />
                    </ListItemIcon>
                    <MenuLink href='/contact'>
                    </MenuLink>
                </StyledMenuItem>
            </StyledHorizontalMenu>
        </div>
    )
}

const StyledHorizontalMenu = styled.div` 
display: flex;

`
const MenuLink = styled.a` 
color: #FFFACD;
    &:hover {
        color: rgba(255, 250, 205, 0.5);
    }
`