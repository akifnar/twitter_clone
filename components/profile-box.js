import React from 'react'
import cn from 'classnames'

import styles from './profile-box.module.css'

import Photo from './photo'

function ProfileBox() {
  return (
    <div className={cn([styles.box])}>
      <Photo />
    </div>
  )
}

export default ProfileBox
