interface TeamList {
  nameTeam: string
  job: string
}

interface btnContent {
  label: string
  link: string
}

export interface ServiceContent {
  title: string
  description: string
  team: TeamList[]
  btn: btnContent
}

export const SERVICES_CONTENT: ServiceContent = {
  title: 'Our Team',
  description:
    'Our mission is to empower businesses with cutting-edge Al technologies that enhance performance, streamline operations, and drive growth.',
  btn: {
    label: 'Show More',
    link: '/',
  },
  team: [
    {
      nameTeam: 'Guy Hawkins',
      job: 'Designer',
    },
    {
      nameTeam: 'Theresa Webb',
      job: 'Designer',
    },
    {
      nameTeam: 'Brooklyn Simmons',
      job: 'CEO',
    },
    {
      nameTeam: 'Arlene McCoy',
      job: 'Designer',
    },
  ],
}
