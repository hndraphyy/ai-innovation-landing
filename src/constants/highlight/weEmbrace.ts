import assetsImg from '@/assets/images/highlight/weEmbrace.webp'

export interface buttonType {
  label: string
  link: string
}

export interface weEmbrace {
  title: string
  description: string
  buttons: buttonType[]
  assets: string
}

export const WE_EMBRACE_CONTENT = {
  title: 'WE EMBRACE CHANGE AND A CULTURE OF CREATIVITY',
  description:
    'Our mission is to make Al accessible and actionable for businesses of all sizes. We are dedicated to developing tailored solutions that enhance productivity, optimize operations, and deliver measurable results. Our team of experts is committed to helping you navigate the complexities of Al, ensuring that your investment translates into real-world success.',
  buttons: [
    {
      label: 'Contact Us',
      link: '/',
    },
    {
      label: 'Explore Details',
      link: '/',
    },
  ],
  assets: assetsImg,
}
