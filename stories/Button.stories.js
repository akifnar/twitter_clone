import React from 'react'

import Button from '../components/button'
import NavButton from '../components/nav-button'
import Navigation from '../components/navigation'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>save</Button>
export const NavigationButton = () => <NavButton>save</NavButton>
export const Nav = () => <Navigation />
