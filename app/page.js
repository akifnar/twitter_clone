'use client'
import React from 'react'
import useSWR from 'swr'

import './globals.css'
import Layout from '../components/layout'
import fetcher from '@/lib/fecth'
import Tweet from '../components/tweet'

function HomePage() {
  const { data, error } = useSWR('/api/tweet', fetcher)

  if (!data) return <p>Loading...</p>

  const userInfo = data?.user || {}
  const tweetList = data?.data || []

  return (
    <Layout>
      {tweetList.map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            {...tweet} // id, text, created_at verilerini gönderir
            // ÇÖZÜM BURADA: public_metrics içindeki like_count, reply_count vb. dışarı çıkarıp gönderiyoruz
            {...tweet.public_metrics}
            name={userInfo.name}
            slug={userInfo.username}
          />
        )
      })}
    </Layout>
  )
}

export default HomePage
