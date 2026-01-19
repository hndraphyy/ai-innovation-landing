import articleImg from '@/assets/images/highlight/article.webp'

interface btnType {
  link: string
  label: string
}

export interface ArticleCard {
  thumbnail: string
  date: string
  title: string
  desc: string
  btn: btnType
}

export interface ArticleType {
  title: string
  description: string
  btn: btnType
  cards: ArticleCard[]
}

export const ARTICLE_CONTENT: ArticleType = {
  title: 'Article',
  description:
    'Our mission is to empower businesses with cutting-edge AI technologies that enhance performance, streamline operations, and drive growth.',
  btn: {
    link: '/learn-more-1',
    label: 'Learn More',
  },
  cards: [
    {
      thumbnail: articleImg,
      date: 'AUGUST 22, 2026',
      title: 'What You Need to Know About Machine Learning',
      desc: 'Explore the impact of AI, highlighting specific examples of how businesses are leveraging AI to streamline operations.',
      btn: {
        link: '/learn-more-1',
        label: 'Learn More',
      },
    },
    {
      thumbnail: articleImg,
      date: 'AUGUST 22, 2026',
      title: 'What You Need to Know About Machine Learning',
      desc: 'Explore the impact of AI, highlighting specific examples of how businesses are leveraging AI to streamline operations.',
      btn: {
        link: '/learn-more-2',
        label: 'Learn More',
      },
    },
    {
      thumbnail: articleImg,
      date: 'AUGUST 22, 2026',
      title: 'What You Need to Know About Machine Learning',
      desc: 'Explore the impact of AI, highlighting specific examples of how businesses are leveraging AI to streamline operations.',
      btn: {
        link: '/learn-more-3',
        label: 'Learn More',
      },
    },
  ],
}
