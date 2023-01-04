import React, { FC, ReactNode } from 'react';
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface ActionButtonProps {
    setSelectedPage: (value: SelectedPage) => void
    children?: ReactNode
}

type Props = ActionButtonProps;

const ActionButton: FC<Props> = ({setSelectedPage, children}) => {
    return (
        <AnchorLink
            className='rounded-md bg-secondary-500 px-10 py-2 transition hover:bg-primary-500 hover:text-white'
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    );
};

export default ActionButton;