import Ai1 from '@/assets/images/homepage/ai-img-1.webp'
import Ai2 from '@/assets/images/homepage/ai-img-2.webp'
import Ai3 from '@/assets/images/homepage/ai-img-3.webp'
import Ai4 from '@/assets/images/homepage/ai-img-4.webp'
import Ai5 from '@/assets/images/homepage/ai-img-5.webp'

export interface aiRevolution {
  title: string
  spanTitle: string
  description: string
  images: string
}

export const AI_REVOLUTION_CONTENT = {
  title: 'We Strive To Be At The Forefront Of This',
  spanTitle: 'Al Revolution',
  description:
    'Our mission is to empower businesses with cutting-edge Al technologies that enhance performance, streamline operations, and drive growth. We believe in the transformative potential of Al and are dedicated to making it accessible to businesses of all sizes, across all industries.',
  images: [Ai1, Ai2, Ai3, Ai4, Ai5],
}
