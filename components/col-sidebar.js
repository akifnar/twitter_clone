import React from 'react'
import cn from 'classnames'

import styles from './col-sidebar.module.css'
import Navigation from '@/components/navigation'
import ThemeButton from '@/components/theme-button'
import ProfileBox from '@/components/profile-box'

function Sidebar({ flat }) {
  return (
    <div className={cn([styles.sidebar])}>
      <Navigation flat={flat} />
      <ThemeButton big full={!flat}>
        {flat ? 'a' : 'Tweet'}
      </ThemeButton>
      <ProfileBox flat={flat} />
    </div>
  )
}

export default Sidebar
