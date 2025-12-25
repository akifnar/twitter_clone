import { NextResponse } from 'next/server'

export async function GET() {
  const tweets = [
    {
      id: '1001',
      text: 'Next.js 15 ve App Router ile API geliştirmek gerçekten çok keyifli. Verimlilik tavan! 🚀',
      created_at: '2025-12-25T18:30:00Z',
      public_metrics: {
        like_count: 145,
        retweet_count: 24,
        reply_count: 12,
        quote_count: 2
      }
    },
    {
      id: '1002',
      text: 'Dream Deus üzerinde çalışmaya devam. Beyni rahatlatan frekanslar ve görsel animasyonlar harika birleşti. ✨ #DreamDeus #BuildInPublic',
      created_at: '2025-12-25T12:15:00Z',
      public_metrics: {
        like_count: 312,
        retweet_count: 85,
        reply_count: 45,
        quote_count: 10
      }
    },
    {
      id: '1003',
      text: 'Yazılımda en büyük hata, problemi tam anlamadan kod yazmaya başlamaktır. Önce kağıt kalem! 📝',
      created_at: '2025-12-24T20:00:00Z',
      public_metrics: {
        like_count: 89,
        retweet_count: 12,
        reply_count: 5,
        quote_count: 1
      }
    },
    {
      id: '1004',
      text: 'React Server Components (RSC) mantığını oturttuğunuzda frontend mimarisine bakışınız değişiyor.',
      created_at: '2025-12-24T14:45:00Z',
      public_metrics: {
        like_count: 67,
        retweet_count: 8,
        reply_count: 3,
        quote_count: 0
      }
    },
    {
      id: '1005',
      text: 'Bugün yeni bir sound healing algoritması denedik. Sonuçlar çok umut verici. 🎧',
      created_at: '2025-12-23T22:10:00Z',
      public_metrics: {
        like_count: 156,
        retweet_count: 30,
        reply_count: 18,
        quote_count: 4
      }
    },
    {
      id: '1006',
      text: "Twitter API fiyatlandırmasından sonra kendi mock API'mizi yazmak zorunda kalmamız... 😅",
      created_at: '2025-12-23T10:30:00Z',
      public_metrics: {
        like_count: 200,
        retweet_count: 40,
        reply_count: 22,
        quote_count: 5
      }
    },
    {
      id: '1007',
      text: 'Fullstack yolculuğunda her gün yeni bir şey öğrenmek yorucu ama bir o kadar da tatmin edici.',
      created_at: '2025-12-22T19:00:00Z',
      public_metrics: {
        like_count: 110,
        retweet_count: 15,
        reply_count: 7,
        quote_count: 1
      }
    },
    {
      id: '1008',
      text: 'Görsel yanılsamalar ve beyin dalgaları arasındaki ilişkiyi araştırıyorum. Çok derin bir konu. 🧠',
      created_at: '2025-12-22T08:20:00Z',
      public_metrics: {
        like_count: 234,
        retweet_count: 56,
        reply_count: 31,
        quote_count: 8
      }
    },
    {
      id: '1009',
      text: 'Tailwind CSS olmasaydı tasarım yapmak ne kadar vaktimizi alırdı? İyi ki varsın utility-first! 🎨',
      created_at: '2025-12-21T16:45:00Z',
      public_metrics: {
        like_count: 95,
        retweet_count: 10,
        reply_count: 4,
        quote_count: 0
      }
    },
    {
      id: '1010',
      text: "2026'ya girerken hedefler büyük. Dream Deus'u herkesin cebine sokacağız! 🚀",
      created_at: '2025-12-21T11:00:00Z',
      public_metrics: {
        like_count: 500,
        retweet_count: 120,
        reply_count: 60,
        quote_count: 25
      }
    }
  ]

  return NextResponse.json({
    data: tweets,
    user: {
      id: '556677',
      name: 'Yusuf Nar',
      username: 'yusufnar',
      profile_image_url:
        'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
      verified: true,
      description: 'Dream Deus Developer | Software Engineer'
    },

    meta: {
      result_count: 10
    }
  })
}
