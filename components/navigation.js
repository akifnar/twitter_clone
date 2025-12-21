import React from 'react'
import { usePathname } from 'next/navigation'
import { MENU } from '@/constants'
import styles from './navigation.module.css'

import NavigationButton from './navigation-button'
import TextTitle from './text-title'

function Navigation({ flat = false }) {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = pathname === menu.path
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={styles.navButton}>
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        )
      })}
    </nav>
  )
}

export default Navigation
