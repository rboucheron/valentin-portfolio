import React from "react";
import images from "./assets/images/images";
import Button from "./components/Button";
import PhoneCard from "./components/PhoneCard";
import {Title} from "./components/Title.tsx";
import {Paragraphe} from "./components/Paragraphe.tsx";
import ComputerCard from "./components/ComputerCard.tsx";


const App: React.FC = () => {
    return (
        <div className="relative w-screen h-screen">
            <div
                className="fixed inset-0 h-screen bg-center bg-[url('http://localhost:5173/background.jpg')] bg-zoom opacity-5 z-0"></div>
            <div className="relative z-10 mt-0 pt-32">
                <div className="w-full lg:w-1/2  m-auto grid justify-items-center ">
                    <img src={images.nameTitle} alt="Title" width={1000} height={1000}
                         className="w-3/4 lg:w-full m-auto"/>

                    <h2 className=" text-xl sm:text-2xl lg:text-4xl mt-4 text-primary font-silverGarden italic">
                        UX/UI Designer Junior
                    </h2>
                    <Button>Contactez moi</Button>
                </div>
                <div className="mt-72">
                    <PhoneCard srcImage={`http://localhost:5173/iphone_13_gueco.png`} altImage={`Image géco`}
                               reverse={false}>
                        <Title>Application de suivi d’empreinte carbone</Title>
                        <Paragraphe>
                            L'application Geco permet aux utilisateurs de suivre et de réduire
                            leur empreinte carbone grâce à des fonctionnalités innovantes et
                            conviviales. En connectant les données des achats quotidiens, Geco
                            fournit une estimation précise de l'empreinte carbone liée à la
                            consommation de chaque utilisateur, des produits alimentaires aux
                            biens de consommation.
                        </Paragraphe>
                        <Paragraphe>
                            L'application définit des objectifs personnalisés pour chaque
                            utilisateur, les incitant à adopter des changements progressifs et
                            durables. Geco inclut également une communauté où les utilisateurs
                            peuvent partager leurs expériences, réussites et défis, s'encourager
                            mutuellement et échanger des conseils pour promouvoir la durabilité
                            environnementale.
                        </Paragraphe>
                    </PhoneCard>
                    <PhoneCard srcImage={`http://localhost:5173/iphone_13_pro_Sushi_2.png`} altImage={`Image géco`}
                               reverse={true}>
                        <Title>Application de restauration de sushi</Title>
                        <Paragraphe>
                            Sushi Taimu est une application dédiée à la commande de sushis, de California rolls, de
                            makis et de boissons. Conçue pour une utilisation simple et rapide, elle permet aux
                            utilisateurs de choisir parmi une sélection variee de delicieux plats japonais et de les
                            commander directement depuis leur telephone.
                        </Paragraphe>
                    </PhoneCard>


                    <ComputerCard imageSrc='MacBook_Pro_16_Aero.png'
                                  imageAlt='Aero'>
                        <Title>Webdocumentaire sur Octobre Rose</Title>
                        <Paragraphe>
                            Pour la 6e edition d'Octobre Rose à La Ferte Sous Jouarre, j'ai concu un webdocumentaire
                            visant à informer le public sur les dangers du cancer du sein. Ce projet presente des
                            interviews de professionnels de la santé ainsi que des temoignages de participants soutenant
                            la cause.
                        </Paragraphe>

                        <Paragraphe> En tant que UX/UI Designer, j'ai developpe une interface intuitive et immersive,
                            utilisant videos, animations et visuels impactants pour maintenir l'engagement des
                            utilisateurs. Ce webdocumentaire a pour but d'informer, toucher et encourager la prevention
                            et le depistage du cancer du sein.</Paragraphe>
                    </ComputerCard>

                    <PhoneCard srcImage={`http://localhost:5173/iphone_13_pro_mtakeaway.png`} altImage={`Image géco`}
                               reverse={false}>
                        <Title>Application de restauration de sushi</Title>
                        <Paragraphe>
                            MtakeAway est une application innovante de gestion de restaurant, concue pour simplifier et
                            optimiser toutes les operations de votre etablissement. Avec MtakeAway, vous pouvez
                            facilement gérer les tables, consulter les commandes, visualiser les plannings, et
                            communiquer avec votre equipe.
                        </Paragraphe>
                        <Paragraphe> MtakeAway est concu pour offrir une interface conviviale et intuitive, rendant la
                            gestion d’un restaurant plus facile et efficace.</Paragraphe>
                    </PhoneCard>

                    <ComputerCard imageSrc='http://localhost:5173/MacBook_Pro_16_Octobre_Rose.png'
                                  imageAlt='octobre rose'>
                        <Title>Webdocumentaire sur Octobre Rose</Title>
                        <Paragraphe>
                            Pour la 6e edition d'Octobre Rose à La Ferte Sous Jouarre, j'ai concu un webdocumentaire
                            visant à informer le public sur les dangers du cancer du sein. Ce projet presente des
                            interviews de professionnels de la santé ainsi que des temoignages de participants soutenant
                            la cause.
                        </Paragraphe>

                        <Paragraphe> En tant que UX/UI Designer, j'ai developpe une interface intuitive et immersive,
                            utilisant videos, animations et visuels impactants pour maintenir l'engagement des
                            utilisateurs. Ce webdocumentaire a pour but d'informer, toucher et encourager la prevention
                            et le depistage du cancer du sein.</Paragraphe>
                    </ComputerCard>


                </div>
            </div>
        </div>
    );
};

export default App;
