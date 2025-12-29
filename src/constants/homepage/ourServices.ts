export interface CardContent {
  title: string
  desc: string
}

export interface OurMissionsContent {
  title: string
  description: string
  cardContent: CardContent[]
}

export const OUR_MISSIONS_CONTENT: OurMissionsContent = {
  title: 'Client-Centric Approach <br /> To Every Project',
  description:
    'Our mission is to empower businesses with cutting edge Al technologies that enhance performance, streamline operations, and drive growth. We believe in the transformative potential of Al and are dedicated to making it accessible to businesses of all sizes, across all industries.',
  cardContent: [
    {
      title: 'Innovation',
      desc: 'Transforming industries by delivering innovative Al solutions that dirive success and create value for businesses of all sizes.',
    },
    {
      title: 'Innovation',
      desc: 'Transforming industries by delivering innovative Al solutions that dirive success and create value for businesses of all sizes.',
    },
    {
      title: 'Innovation',
      desc: 'Transforming industries by delivering innovative Al solutions that dirive success and create value for businesses of all sizes.',
    },
    {
      title: 'Innovation',
      desc: 'Transforming industries by delivering innovative Al solutions that dirive success and create value for businesses of all sizes.',
    },
  ],
}
