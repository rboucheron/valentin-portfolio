import React from "react";
import images from "./assets/images/images";
import Button from "./components/Button";
import PhoneCard from "./components/PhoneCard";
import {Title} from "./components/Title.tsx";
import {Paragraphe} from "./components/Paragraphe.tsx";
import ComputerCard from "./components/ComputerCard.tsx";
import ArrowDown from "./components/ArrowDown.tsx";
import ProjectBtn from "./components/ProjectBtn.tsx";


const App: React.FC = () => {
    return (
        <div className=" relative w-screen  h-screen">
            <div
                className="fixed inset-0 h-screen bg-center bg-[url('http://localhost:5173/background.jpg')] bg-zoom opacity-5 z-0"></div>
            <div className="relative z-10 mt-0 pt-32 2xl:w-3/4 m-auto">
                <div className="w-full lg:w-1/2  m-auto grid justify-items-center ">
                    <img src={images.nameTitle} alt="Title" width={1000} height={1000}
                         className="w-3/4 lg:w-full m-auto"/>

                    <h1 className=" text-xl sm:text-2xl lg:text-4xl mt-4 text-primary font-silverGarden italic">
                        UX/UI Designer Junior
                    </h1>
                    <Button>Contactez moi</Button>
                </div>
                <div className="my-28 w-full flex justify-center">
                    < ArrowDown/>
                </div>
                <div className="mt-72">
                    <h2 className="my-2.5 text-4xl font-normal text-primary  font-silverGarden text-center">Mes
                        Projets</h2>
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
                        <ProjectBtn
                            link="https://www.behance.net/gallery/199610365/Application-de-suivi-dempreinte-carbone">Consulter
                            le projet</ProjectBtn>
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
                        <ProjectBtn link="https://www.behance.net/gallery/200357665/Restaurant-Sushi-Taimu">Consulter le
                            projet</ProjectBtn>
                    </PhoneCard>

                    <ComputerCard imageSrc='MacBook_Pro_16_Aero.png'
                                  imageAlt='Aero'>
                        <Title>Refonte d’un site pour un Aero Club</Title>
                        <Paragraphe>
                            L'aero club de Frotey Les Lure, se situe à Frotey Les Lure, en France, est une institution
                            reputee pour ses formations de pilotage et ses baptemes de l'air. Conscient de l'importance
                            de l'experience utilisateur dans l'ere numerique, l'aeroclub a entrepris une refonte
                            complete de son interface en ligne. Cette initiative vise a offrir une plateforme plus
                            ergonomique, simplifiee et moderne, répondant aux besoins croissants de ses membres et
                            visiteurs.
                        </Paragraphe>
                        <ProjectBtn link="https://www.behance.net/gallery/200359749/Refonte-du-site-dun-aro-club">Consulter
                            le projet</ProjectBtn>


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
                <div className="mt-52">
                    <h2 className="my-2.5 text-4xl font-normal text-primary  font-silverGarden text-center">A
                        Propos</h2>

                    <div className="w-3/4 m-auto space-y-4 mt-10  lg:pr-10">
                        <p className="text-primary text-md font-bold">
                            Je m'appelle Valentin Lamour, mais vous pouvez m'appeler Val, votre partenaire pour des
                            projets qui valent le detour !
                        </p>

                        <Paragraphe>
                            Je suis un UX/UI Designer junior base en région parisienne. Passionné par la creation
                            d'expériences utilisateur intuitives et esthetiques, j'aime transformer des idees complexes
                            en
                            designs clairs et engageants.
                        </Paragraphe>

                        <ProjectBtn link="https://drive.google.com/file/d/1gyQgfdQaP9iDL1F-B_0Wxojja2oSX4N3/view">Mon
                            Cv</ProjectBtn>


                    </div>


                </div>

                <div className="mt-24">
                    <h2 className="my-2.5 text-4xl font-normal text-primary  font-silverGarden text-center">Contactez
                        moi</h2>
                    <div className=" flex justify-center items-center space-x-20 mt-10 mb-10 ">

                        <a href="https://www.linkedin.com/in/valentin-lamour-732488252/">
                            <svg width="100" height="100" viewBox="0 0 141 140" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M124.944 0C129.07 0 133.027 1.63888 135.944 4.55612C138.861 7.47335 140.5 11.43 140.5 15.5556V124.444C140.5 128.57 138.861 132.527 135.944 135.444C133.027 138.361 129.07 140 124.944 140H16.0556C11.93 140 7.97335 138.361 5.05612 135.444C2.13888 132.527 0.5 128.57 0.5 124.444V15.5556C0.5 11.43 2.13888 7.47335 5.05612 4.55612C7.97335 1.63888 11.93 0 16.0556 0H124.944ZM121.056 120.556V79.3333C121.056 72.6086 118.384 66.1593 113.629 61.4042C108.874 56.6492 102.425 53.9778 95.7 53.9778C89.0889 53.9778 81.3889 58.0222 77.6556 64.0889V55.4556H55.9556V120.556H77.6556V82.2111C77.6556 76.2222 82.4778 71.3222 88.4667 71.3222C91.3546 71.3222 94.1242 72.4694 96.1663 74.5115C98.2083 76.5536 99.3556 79.3232 99.3556 82.2111V120.556H121.056ZM30.6778 43.2444C34.1433 43.2444 37.4668 41.8678 39.9173 39.4173C42.3678 36.9668 43.7444 33.6433 43.7444 30.1778C43.7444 22.9444 37.9111 17.0333 30.6778 17.0333C27.1917 17.0333 23.8483 18.4182 21.3833 20.8833C18.9182 23.3483 17.5333 26.6917 17.5333 30.1778C17.5333 37.4111 23.4444 43.2444 30.6778 43.2444ZM41.4889 120.556V55.4556H19.9444V120.556H41.4889Z"
                                    fill="#F2E8CF"/>
                            </svg>
                        </a>

                        <a href="https://www.behance.net/valentinlamour1">
                            <svg width="100" height="100" viewBox="0 0 141 140" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M105.5 66.7692C106.577 68.3846 107.654 70 108.192 72.6923H90.9615C90.9615 72.1538 90.9615 71.0769 91.5 70C92.0385 68.9231 92.0385 68.3846 93.1154 67.3077C93.6539 66.2308 94.7308 65.6923 95.8077 65.1538C96.8846 64.6154 98.5 64.0769 100.115 64.0769C102.269 64.6154 104.423 65.1538 105.5 66.7692ZM55.9615 63C57.0385 61.9231 58.1154 60.3077 58.1154 58.1538C58.1154 57.0769 58.1154 56 57.5769 54.9231C57.0385 54.3846 56.5 53.3077 55.9615 53.3077C55.4231 52.7692 54.3462 52.7692 53.2692 52.2308H39.2692V64.6154H51.1154C52.7308 64.6154 54.3462 64.0769 55.9615 63ZM51.6538 72.1538H39.2692V86.6923H51.6538C52.7308 86.6923 53.8077 86.6923 54.8846 86.1538C55.9615 86.1538 57.0385 85.6154 57.5769 85.0769C58.1154 84.5385 59.1923 84 59.7308 82.9231C60.2692 81.8462 60.2692 80.7692 60.2692 79.6923C60.2692 77 59.7308 74.8462 58.1154 73.7692C56.5 72.6923 54.3462 72.1538 51.6538 72.1538ZM140.5 26.3846V113.615C140.5 128.154 128.654 140 114.115 140H26.8846C12.3462 140 0.5 128.154 0.5 113.615V26.3846C0.5 11.8462 12.3462 0 26.8846 0H114.115C128.654 0 140.5 11.8462 140.5 26.3846ZM88.8077 51.6923H110.346V46.3077H88.8077V51.6923ZM71.5769 80.7692C71.5769 77.5385 71.0385 74.8462 69.4231 72.1538C67.8077 70 65.6538 68.3846 62.4231 67.3077C64.5769 66.2308 66.7308 64.6154 67.8077 63C68.8846 61.3846 69.4231 59.2308 69.4231 56.5385C69.4231 53.8462 68.8846 52.2308 68.3462 50.0769C67.2692 48.4615 66.1923 46.8462 65.1154 46.3077C63.5 45.2308 61.8846 44.6923 59.7308 44.1538C57.0385 43.0769 54.8846 43.0769 52.1923 43.0769H27.4231V95.8462H53.2692C55.4231 95.8462 58.1154 95.3077 60.2692 94.7692C62.4231 94.2308 64.5769 93.1538 66.1923 92.0769C67.8077 91 69.4231 89.3846 70.5 87.2308C71.0385 85.6154 71.5769 83.4615 71.5769 80.7692ZM90.9615 79.1538H118.423C118.423 75.9231 118.423 73.2308 117.885 70.5385C117.346 67.8462 116.269 65.1538 114.654 63.5385C113.038 61.3846 110.885 59.7692 108.731 58.6923C106.038 57.6154 103.346 56.5385 100.115 56.5385C97.4231 56.5385 94.7308 57.0769 92.0385 58.1538C89.8846 59.2308 87.7308 60.8462 85.5769 62.4615C83.9615 64.0769 82.3462 66.2308 81.8077 68.9231C80.7308 71.6154 80.1923 74.3077 80.1923 77C80.1923 79.6923 80.7308 82.9231 81.8077 85.0769C82.8846 87.7692 83.9615 89.9231 85.5769 91.5385C87.1923 93.1538 89.3462 94.7692 91.5 95.8462C94.1923 96.9231 96.8846 97.4615 99.5769 97.4615C103.885 97.4615 107.654 96.3846 110.885 94.2308C114.115 92.0769 116.269 88.8462 117.885 84.5385H108.731C108.192 85.6154 107.654 86.6923 106.038 87.7692C104.423 88.8462 102.808 89.3846 100.654 89.3846C97.9615 89.3846 95.2692 88.8462 93.6538 87.2308C92.0385 85.0769 90.9615 82.3846 90.9615 79.1538Z"
                                    fill="#F2E8CF"/>
                            </svg>

                        </a>
                    </div>

                </div>


            </div>

            <footer className="bg-secondsuccess bg-opacity-60 w-full flex justify-center p-4 mt-24">
                <h3 className='text-primary'>© Portfolio Valentin Lamour – Tous droits réservés</h3>
            </footer>
        </div>
    );
};

export default App;
