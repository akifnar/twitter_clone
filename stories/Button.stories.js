import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>save</Button>
export const NavButton = () => <NavigationButton>save</NavigationButton>
export const Nav = () => <Navigation />
