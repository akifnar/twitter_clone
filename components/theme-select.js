'use client'
import React, { useState, useEffect } from 'react'

import styles from './theme-select.module.css'

const THEME = {
  light: 'Light',
  dim: 'Dim',
  dark: 'Dark'
}

function ThemeSelect() {
  const [selectedTheme, selectedThemeSet] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={styles.container}>
      {['light', 'dim', 'dark'].map((theme) => (
        <label key={theme} className={styles.label}>
          <input
            type="radio"
            value={theme}
            name="theme" // ÖNEMLİ: Hepsi aynı isimde olmalı ki sadece biri seçilebilsin
            checked={theme === selectedTheme}
            onChange={() => selectedThemeSet(theme)} // Hatayı çözen kısım
          />
          {THEME[theme]}
        </label>
      ))}
    </div>
  )
}

export default ThemeSelect
