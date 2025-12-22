'use client'
import React, { useState } from 'react'

import styles from './theme-select.module.css'

const THEME = {
  light: 'Light',
  dim: 'Dim',
  dark: 'Dark'
}

function ThemeSelect() {
  const [selectedTheme, selectedThemeSet] = useState(() => {
    if (typeof window !== 'undefined') {
      const StoredTheme = localStorage.getItem('theme')

      return StoredTheme || 'light'
    }

    return 'light'
  })
  return (
    <div className={styles.container}>
      {['light', 'dim', 'dark'].map((theme) => (
        <label key={theme} className={styles.label}>
          <input
            type="radio"
            value={theme}
            name="theme"
            checked={theme === selectedTheme}
            onChange={(e) => {
              const NewTheme = e.target.value
              selectedThemeSet(NewTheme)
              localStorage.setItem('theme', NewTheme)
              document.documentElement.className =
                NewTheme === 'light' ? '' : NewTheme
            }}
          />
          {THEME[theme]}
        </label>
      ))}
    </div>
  )
}

export default ThemeSelect
