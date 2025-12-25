import React from 'react'
import { formatDistanceToNowStrict } from 'date-fns/formatDistanceToNowStrict'
import { tr } from 'date-fns/locale' // Tarihleri Türkçe yapmak istersen (Opsiyonel)

import styles from './style.module.css'
import Photo from '@/components/photo'
import IconButton from '@/components/icon'
import * as Icon from '../icons'

// DÜZELTME: Parametrelere like_count, retweet_count, reply_count ekledik.
// (Senin veritabanındaki sütun isimleri farklıysa bunları ona göre değiştir)
function Tweet({
  name,
  slug,
  created_at,
  text,
  reply_count,
  retweet_count,
  like_count
}) {
  const time = created_at ? new Date(created_at) : null

  return (
    <article className={styles.tweet}>
      <div className={styles.avatar}>
        <Photo />
      </div>

      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span> <span>@{slug}</span> ·{' '}
          {/* locale: tr eklersen '3 gün' yazar, eklemezsen '3d' yazar */}
          <span>{time && formatDistanceToNowStrict(time)}</span>
        </header>

        <div className={styles.content}>{text}</div>

        <footer className={styles.footer}>
          {/* Reply (Yorum) */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Reply />
            </IconButton>
            {/* Varsa sayıyı göster */}
            {reply_count > 0 && <span>{reply_count}</span>}
          </div>

          {/* Retweet */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Retweet />
            </IconButton>
            {/* Varsa sayıyı göster */}
            {retweet_count > 0 && <span>{retweet_count}</span>}
          </div>

          {/* Like (Beğeni) */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Like />
            </IconButton>
            {/* BURASI BOŞTU, ARTIK DOLU */}
            {like_count > 0 && <span>{like_count}</span>}
          </div>

          {/* Share (Paylaş) */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default Tweet
