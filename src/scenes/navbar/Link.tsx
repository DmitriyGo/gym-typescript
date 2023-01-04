import React, { FC } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/shared/types';

interface LinkProps {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

type Props = LinkProps;

const Link: FC<Props> = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

    return (
        <AnchorLink
            className={`
            ${selectedPage === lowerCasePage ? 'text-primary-500' : ''} 
            transition duration-500 hover:text-primary-300
        `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

export default Link;
