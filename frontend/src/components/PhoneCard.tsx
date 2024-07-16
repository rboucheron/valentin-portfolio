function PhoneCard() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center space-x-6 space-y-8 md:space-y-0 md:space-x-8 p-4 mt-10">
      <div className="ml-4">
        <img
          src="https://valentinlamour.website/assets/images/Pro_Geco.png"
          alt="Geco Application"
          className=" w-64 m-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="md:w-3/4 space-y-4  ">
        <h1 className="text-primary font-bold  text-xl ">
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
      </div>
    </div>
  );
}

export default PhoneCard;
