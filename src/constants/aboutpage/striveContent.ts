interface RatingPoint {
  point: number
  label: string
}

export interface StriveContent {
  title: string
  description: string
  strivePoint: RatingPoint[]
}

export const STRIVE_CONTENT: StriveContent = {
  title: 'We Strive To Be At The Forefront Of This Al Revolution',
  description:
    'Our mission is to empower businesses with cutting-edge Al technologies that enhance performance, streamline operations, and drive growth. We belleve in the transformative potential of Al and are dedicated to making it accessible to businesses of all sizes, across all industries.',
  strivePoint: [
    {
      point: 100,
      label: 'Custom Al Models Deployed',
    },
    {
      point: 300,
      label: 'Projects Delivered',
    },
    {
      point: 15,
      label: 'Years of Experience',
    },
    {
      point: 120,
      label: 'Al Specialists',
    },
  ],
}
