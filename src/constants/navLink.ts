import type { NavLink } from '@/types/navLinkType'
import type { Sosmed } from '@/types/sosmedType'
import FacebookIcon from '@/assets/icon/footer/facebook.svg'
import InstagramIcon from '@/assets/icon/footer/instagram.svg'
import PinterestIcon from '@/assets/icon/footer/pinterest.svg'
import DribbbleIcon from '@/assets/icon/footer/dribbble.svg'

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Pricing', path: '/#pricing' },
  { name: 'Services', path: '/#services' },
]

export const sosmeds: Sosmed[] = [
  {
    icon: FacebookIcon,
    path: '/',
    name: 'Facebook',
  },
  {
    icon: InstagramIcon,
    path: '/',
    name: 'Instagram',
  },
  {
    icon: PinterestIcon,
    path: '/',
    name: 'Pinteres',
  },
  {
    icon: DribbbleIcon,
    path: '/',
    name: 'Dribbble',
  },
]
