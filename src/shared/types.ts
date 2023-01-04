import image1 from '@/assets/image1.png';

export const SelectedPage = {
    Home: 'home',
    Benefits: 'benefits',
    OurClasses: 'ourClasses',
    ContactUs: 'contactus',
} as const;

export type SelectedPage = typeof SelectedPage[keyof typeof SelectedPage];

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
}
