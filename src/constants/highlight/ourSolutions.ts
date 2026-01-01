import profileImg from '@/assets/images/highlight/profile.webp'

interface buttonType {
  label: string
  link: string
}

export interface ourSolutions {
  title: string
  description: string
  buttons: buttonType[]
  solution: string
  profile: string
  nameUser: string
  titleUser: string
  Class?: string
}

export const OUR_SOLUTIONS_CONTENT = {
  title: 'Our Solutions Have Helped Businesses Increase Efficiency',
  description:
    '"Working with them has been a game-changer for our company. Their Al solutions have given us a significant competitive advantage in the market."',
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
  solution: `“We are passionate about driving change and making a difference. Whether you're looking to optimize your operations, enhance customer experiences, or unlock new business opportunities, we are here to help you succeed.”`,
  profile: profileImg,
  nameUser: 'Blanche Field',
  titleUser: 'Lovely Custamer',
}
