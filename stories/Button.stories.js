import React from 'react'

import Button from '@/components/button'
import NavigationButton from '@/components/navigation-button'
import Navigation from '@/components/navigation'
import { Home } from '@/components/icons'
import TextTitle from '@/components/text-title'
import ThemeButton from '@/components/theme-button'
import Stack from '@/components/stack'

export default {
  title: 'Buttons',
  component: Navigation, // Kontrol panelinin hangi bileşeni baz alacağını seçiyoruz
  argTypes: {
    flat: {
      control: 'boolean',
      name: 'Flat'
    }
  }
}

export const Normal = () => <Button>Save</Button>

export const Theme = () => (
  <Stack column>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>Save Full</ThemeButton>
    <ThemeButton full big>
      Save Big Button
    </ThemeButton>
  </Stack>
)

// NavButton hikayesi: args parametresini ekledik
export const NavButton = (args) => (
  <NavigationButton {...args}>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
)
NavButton.args = {
  flat: false
}

// Nav hikayesi: Artık paneldeki 'flat' düğmesine tepki verir
export const Nav = (args) => <Navigation selectedKey="home" {...args} />
Nav.args = {
  flat: false
}
