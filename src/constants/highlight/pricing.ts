export interface PricingCard {
  membershipName: string
  price: number
  benefitTitle: string
  features: string[]
  isPopular?: boolean
  discount?: string
}

export interface PricingType {
  title: string
  description: string
  cards: PricingCard[]
}

export const PRICING_CONTENT: PricingType = {
  title: 'AI Solutions That Drive Success & Create Value',
  description:
    'Our mission is to empower businesses with cutting-edge Al technologies that enhance performance, streamline operations, and drive growth. We believe in the transformative potential of Al and are dedicated to moking it accessible to businesses ofall sizos, across all industrios.',
  cards: [
    {
      membershipName: 'Silver Membership',
      price: 19,
      benefitTitle:
        'Benefit from fundamental AI capabilities, reliable support, and a cost-effective entry point.',
      features: [
        'Time Efficiency',
        'Versatility and Adaptability',
        'Consistent Quality',
        'Cost-Efficiency',
      ],
    },
    {
      membershipName: 'Silver Membership',
      price: 19,
      discount: '-30%',
      isPopular: true,
      benefitTitle:
        'Benefit from fundamental AI capabilities, reliable support, and a cost-effective entry point.',
      features: [
        'Time Efficiency',
        'Versatility and Adaptability',
        'Consistent Quality',
        'Cost-Efficiency',
      ],
    },
    {
      membershipName: 'Silver Membership',
      price: 19,
      benefitTitle:
        'Benefit from fundamental AI capabilities, reliable support, and a cost-effective entry point.',
      features: [
        'Time Efficiency',
        'Versatility and Adaptability',
        'Consistent Quality',
        'Cost-Efficiency',
      ],
    },
  ],
}
