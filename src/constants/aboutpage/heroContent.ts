export interface labelName {
  title: string
}

export interface HeroContent {
  title: string
  description: string
  buttons: {
    label: string
    link: string
  }
  capabilities: labelName[]
}

export const HERO_CONTENT: HeroContent = {
  title: 'Balancing Innovation and Responsibility',
  description:
    'Balancing Innovation and Responsibility We are dedicated to developing tailored solutions that enhance productivity, optimize operations, and deliver measurable results.',
  buttons: {
    label: 'Contact Us',
    link: '/',
  },
  capabilities: [
    { title: 'Discovery' },
    { title: 'Strategy' },
    { title: 'Support' },
    { title: 'Implementation' },
    { title: 'Colloboration' },
  ],
}
