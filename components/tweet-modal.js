import React from 'react'

import styles from './tweet-modal.module.css'

import Photo from './photo'
import ThemeButton from './theme-button'
import Stack from './stack'

import IconButton from './icon'
import { Close } from './icons'

function TweetModal({ onClick = () => {} }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.avatar}>
          <Photo />
        </div>
        <div className={styles.body}>
          <div>
            <textarea
              className={styles.textarea}
              name=""
              rows="4"
              placeholder="Ne düşünüyorsun"
            />
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton className={styles.close} onClick={onClick}>
              <Close />
            </IconButton>
            <ThemeButton>Tweet</ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default TweetModal
