interface TeamList {
  nameTeam: string
  job: string
}

interface btnContent {
  label: string
  link: string
}

export interface TeamContent {
  title: string
  description: string
  teams: TeamList[]
  btn: btnContent
}

export const OUR_TEAM_CONTENT: TeamContent = {
  title: 'Our Team',
  description:
    'Our mission is to empower businesses with cutting-edge Al technologies that enhance performance, streamline operations, and drive growth.',
  btn: {
    label: 'Show More',
    link: '/',
  },
  teams: [
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
