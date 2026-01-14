interface ServiceList {
  title: string
  desc: string
}

interface btnContent {
  label: string
  link: string
}

export interface ServiceContent {
  title: string
  description: string
  services: ServiceList[]
  btn: btnContent
}

export const SERVICES_CONTENT: ServiceContent = {
  title: 'Services',
  description:
    'Our mission is to empower businesses with cutting-edge Al technologies that enhance performance, streamline operations, and drive growth.',
  btn: {
    label: 'Lern More',
    link: '/',
  },
  services: [
    {
      title: 'Al Consulting',
      desc: 'Transforming industries by delivering innovotive Al solutions that drive success and creale valve for businesses of all sizes.',
    },
    {
      title: 'Machine Learning Solvtions',
      desc: 'Transforming industries by delivering innovotive Al solutions that drive success and creale valve for businesses of all sizes.',
    },
    {
      title: 'Natural Language Processing',
      desc: 'Transforming industries by delivering innovotive Al solutions that drive success and creale valve for businesses of all sizes.',
    },
    {
      title: 'Computer Vision',
      desc: 'Transforming industries by delivering innovotive Al solutions that drive success and creale valve for businesses of all sizes.',
    },
  ],
}
