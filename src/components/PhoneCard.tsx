import {useEffect, ReactNode} from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

function PhoneCard({
                       children,
                       srcImage,
                       altImage,
                       reverse,
                   }: {
    children: ReactNode;
    srcImage: string;
    altImage: string;
    reverse: boolean;
}) {
    const controlsRight = useAnimation();
    const controlsTop = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controlsRight.start({
                x: 0,
                opacity: 1,
                transition: {duration: 1},
            });
            controlsTop.start({
                y: 0,
                opacity: 1,
                transition: {duration: 1.2},
            });
        }
    }, [controlsRight, controlsTop, inView]);

    return (
        <div
            ref={ref}
            className={`my-20 flex flex-col ${reverse ? 'md:flex-row-reverse justify-around' : 'md:flex-row justify-start'}    items-start md:items-center p-4 mt-10 space-x-6 space-y-8 md:space-y-0 md:space-x-8`}
        >
            <motion.div
                initial={{x: -100, opacity: 0}}
                animate={controlsRight}
                className="ml-4"
            >
                <img
                    src={srcImage}
                    alt={altImage}
                    className="w-3/5 m-auto rounded-lg shadow-lg"
                />
            </motion.div>
            <motion.div
                initial={{y: -200, opacity: 0}}
                animate={controlsTop}
                className="md:w-2/3 lg:w-1/2 space-y-5 "
            >

                {children}
            </motion.div>
        </div>
    );
}

export default PhoneCard;