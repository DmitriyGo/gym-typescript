import React, { FC } from 'react';
import { ClassType, SelectedPage } from '@/shared/types';

import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import SlideAnimation from '@/shared/SlideAnimation';
import HText from '@/shared/HText';
import Class from '@/scenes/ourClasses/Class';

interface OurClassesProps {
    setSelectedPage: (value: SelectedPage) => void;
}

type Props = OurClassesProps;

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        image: image5,
    },
    {
        name: "Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image6,
    },
];

const OurClasses: FC<Props> = ({ setSelectedPage }) => {
    return (
        <section className='w-full bg-primary-100 py-40' id='ourclasses'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <SlideAnimation className="mx-auto w-5/6">
                    <div className='md:w-3/5'>
                        <HText>OUR CLASSES</HText>
                        <p className='py-5 '>
                            Fringilla a sed at suspendisse ut enim volutpat.
                            Rhoncus vel est tellus quam porttitor. Mauris velit
                            euismod elementum arcu neque facilisi. Amet semper
                            tortor facilisis metus nibh, Rhoncus sit enim mattis
                            odio in risus nunc.
                        </p>
                    </div>
                </SlideAnimation>
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden scrollbar'>
                    <ul className='w-max'>
                        {classes.map((item, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};
export default OurClasses;