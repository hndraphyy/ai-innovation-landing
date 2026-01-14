import profile1 from '@/assets/images/aboutpage/profile-1.webp'
import profile2 from '@/assets/images/aboutpage/profile-2.webp'
import profile3 from '@/assets/images/aboutpage/profile-3.webp'
import profile4 from '@/assets/images/aboutpage/profile-4.webp'

interface TeamList {
  profile: string
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
      profile: profile1,
      nameTeam: 'Guy Hawkins',
      job: 'Designer',
    },
    {
      profile: profile2,
      nameTeam: 'Theresa Webb',
      job: 'Designer',
    },
    {
      profile: profile3,
      nameTeam: 'Brooklyn Simmons',
      job: 'CEO',
    },
    {
      profile: profile4,
      nameTeam: 'Arlene McCoy',
      job: 'Designer',
    },
  ],
}
