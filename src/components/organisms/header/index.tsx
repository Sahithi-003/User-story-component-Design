import React from 'react'
import Avatar from '../../atoms/avatar'
import Typography from '../../atoms/typography'
import Explore from '../exploreMenu'

function Header() {
  return (
    <div>
      <Explore/>
        <Typography children="My Library" variant="h3" />
        <Typography children="Highlights" variant="h3" />
        <Avatar src='user.png'/>
    </div>
  )
}

export default Header