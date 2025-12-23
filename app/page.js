'use client'
import React from 'react'

import './globals.css'
import Layout from '../components/layout'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Akif Nar"
        slug="akifnar"
        datetime={new Date('2025-12-23 19:20')}
        text={`Hesabımın ele geçirildiğini düşünen insanlar var
aslında ele değil ayağa geçirildi`}
      />
      <Tweet
        name="Akif Nar"
        slug="akifnar"
        datetime={new Date('2025-12-23 19:20')}
        text={`postcss özelinde video çektim ama içinde yok yok :))


babel, ast, sass, ...`}
      />
    </Layout>
  )
}

export default HomePage
