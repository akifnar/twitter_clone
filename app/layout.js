'use client' // Tarayıcı özelliklerini (localStorage gibi) kullanmak için şart!

import { useState, useEffect } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  // 1. Durum Kontrolü: Bileşen tarayıcıya yüklendi mi?
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // 2. Hafıza Kontrolü: localStorage'dan 'theme' anahtarını oku.
    const kaydedilenTema = localStorage.getItem('theme') || 'light'

    // 3. Sınıf Giydirme: Seçilen tema 'light' değilse HTML'e sınıf olarak ekle.
    // Ternary operator kullanımı:
    document.documentElement.className =
      kaydedilenTema === 'light' ? '' : kaydedilenTema

    // Bileşen başarıyla yüklendi işareti
    setMounted(true)
  }, [])

  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 4. Güvenli Gösterim:
          Sunucu ve istemci arasındaki görüntü farkını (hydration error) önlemek için 
          içeriği sadece bileşen "mounted" olduktan sonra render ediyoruz.
        */}
        {mounted ? children : null}
      </body>
    </html>
  )
}
