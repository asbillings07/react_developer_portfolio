import React from 'react'
import styled from 'styled-components'
import { ListItemText } from '@material-ui/core'

export const HorizontalMenu = ({ StyledMenuItem }) => {
    return (
        <div>
            <StyledHorizontalMenu>
                <StyledMenuItem>
                    <MenuLink href='/'>
                        <ListItemText primary='Projects' />
                    </MenuLink>
                </StyledMenuItem>
                <StyledMenuItem>
                    <MenuLink href='/about'>
                        <ListItemText primary='About Me' />
                    </MenuLink>
                </StyledMenuItem>
                <StyledMenuItem>
                    <MenuLink href='/contact'>
                        <ListItemText primary='Contact Me' />
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