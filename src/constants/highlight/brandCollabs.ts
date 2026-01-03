import Brand1 from '@/assets/images/highlight/brand-1.webp'
import Brand2 from '@/assets/images/highlight/brand-2.webp'
import Brand3 from '@/assets/images/highlight/brand-3.webp'
import Brand4 from '@/assets/images/highlight/brand-4.webp'
import Brand5 from '@/assets/images/highlight/brand-5.webp'
import Brand6 from '@/assets/images/highlight/brand-6.webp'

export interface BrandCollab {
  id: number
  title: string
  image: string
}

export const BRAND_COLLABS: BrandCollab[] = [
  { id: 1, title: 'brand-1', image: Brand1 },
  { id: 2, title: 'brand-2', image: Brand2 },
  { id: 3, title: 'brand-3', image: Brand3 },
  { id: 4, title: 'brand-4', image: Brand4 },
  { id: 5, title: 'brand-5', image: Brand5 },
  { id: 6, title: 'brand-6', image: Brand6 },
]
