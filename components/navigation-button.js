import React from 'react'
import cn from 'classnames'

import Button from './button'

import styles from './navigation-button.module.css'

function NavigationButton({ notify, selected, children, ...props }) {
  return (
    <Button
      className={cn(styles.navbutton, selected && styles.navButtonSelected)}
      {...props}>
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
  )
}

export default NavigationButton
