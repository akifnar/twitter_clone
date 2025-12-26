import React from 'react'
import { mutate } from 'swr' // EKLENDİ: Tweet atınca listeyi yenilemek için

import styles from './tweet-modal.module.css'
import Photo from './photo'
import ThemeButton from './theme-button'
import Stack from './stack'
import IconButton from './icon'
import { Close } from './icons'

function TweetModal({ onClick = () => {} }) {
  const [tweet, tweetSet] = React.useState('')

  const onSubmit = async () => {
    // 1. Tweet boşsa gönderme
    if (!tweet.trim()) return

    try {
      // 2. Doğru adrese (/api/tweet) istek at
      const response = await fetch('/api/tweet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // 3. Backend 'text' bekliyor, onu gönderiyoruz
        body: JSON.stringify({ text: tweet })
      })

      if (response.ok) {
        // 4. Başarılıysa inputu temizle
        tweetSet('')

        // 5. Anasayfadaki tweet listesini yenile (Sihirli kısım)
        mutate('/api/tweet')

        // 6. Modalı kapat
        onClick()
      }
    } catch (error) {
      console.error('Tweet atılamadı:', error)
    }
  }

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
              rows="4"
              placeholder="Ne düşünüyorsun?"
              value={tweet}
              onChange={(e) => tweetSet(e.target.value)}
            />
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton className={styles.close} onClick={onClick}>
              <Close />
            </IconButton>

            {/* Butona tıklandığında onSubmit çalışacak */}
            <ThemeButton onClick={onSubmit}>Tweet</ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default TweetModal
