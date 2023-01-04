import React, { FC, ReactNode } from 'react';

interface HTextProps {
    children: ReactNode
}

type Props = HTextProps;

const HText: FC<Props> = ({children}) => {
    return (
        <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>
            {children}
        </h1>
    );
};

export default HText;
