import { useEffect, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function PhoneCard({
  children,
  srcImage,
  altImage,
}: {
  children: ReactNode;
  srcImage: string;
  altImage: string;
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
        transition: { duration: 2.5 },
      });
      controlsTop.start({
        y: 0,
        opacity: 1,
        transition: { duration: 2.5 },
      });
    }
  }, [controlsRight, controlsTop, inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row justify-around items-start md:items-center p-4 mt-10 space-x-6 space-y-8 md:space-y-0 md:space-x-8"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={controlsRight}
        className="ml-4"
      >
        <img
          src={srcImage}
          alt={altImage}
          className="w-64 m-auto rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={controlsTop}
        className="md:w-2/3 space-y-5 mx-4"
      >
        <h1 className="text-primary font-bold text-xl">
          Application de suivi d’empreinte carbone
        </h1>
        <p className="text-primary text-sm">
          L'application Geco permet aux utilisateurs de suivre et de réduire
          leur empreinte carbone grâce à des fonctionnalités innovantes et
          conviviales. En connectant les données des achats quotidiens, Geco
          fournit une estimation précise de l'empreinte carbone liée à la
          consommation de chaque utilisateur, des produits alimentaires aux
          biens de consommation.
        </p>
        <p className="text-primary text-sm">
          L'application définit des objectifs personnalisés pour chaque
          utilisateur, les incitant à adopter des changements progressifs et
          durables. Geco inclut également une communauté où les utilisateurs
          peuvent partager leurs expériences, réussites et défis, s'encourager
          mutuellement et échanger des conseils pour promouvoir la durabilité
          environnementale.
        </p>
        {children}
      </motion.div>
    </div>
  );
}

export default PhoneCard;