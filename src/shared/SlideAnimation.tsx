import React, { FC, HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface SlideAnimationProps {
    delay?: number
    vertical?: boolean
}

type Props = SlideAnimationProps & HTMLAttributes<HTMLDivElement>;

const SlideAnimation: FC<Props> = ({className, children, delay = 0, vertical = false}) => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: delay, duration: 0.5 }}
            variants={{
                hidden: vertical ? { opacity: 0, y: 50 } : { opacity: 0, x: -50 },
                visible: vertical ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SlideAnimation;