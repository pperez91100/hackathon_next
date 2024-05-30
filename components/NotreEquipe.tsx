import React from 'react'
import Avatars from './Avatars'
Avatars

const avatars = [
    { id: 0, name: 'Tanguy', job: 'Chef de projet', img: '/tanguy.svg' },
    { id: 1, name: 'Romain', job: 'Chef de projet', img: '/romain.svg' },
    { id: 2, name: 'Pablo', job: 'Chef de projet', img: '/pablo.svg' },
    { id: 3, name: 'Romain', job: 'Chef de projet', img: '/romain.svg' },
    { id: 4, name: 'Kaotar', job: 'Chef de projet', img: '/kaotar.svg' },
    { id: 5, name: 'Aboubakar', job: 'Chef de projet', img: '/aboubakar.svg' },
    { id: 6, name: 'Douaa', job: 'Chef de projet', img: '/douaa.svg' },
    { id: 7, name: 'Nada', job: 'Chef de projet', img: '/nada.svg' },
]

const AvatarsSection = () => {
    return (
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-4">
            <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-bold uppercase">notre équipe</h2>
                <p className="text-gray-600 dark:text-gray-400 md:text-lg">
                    Notre équipe est composée de professionnels passionnés et talentueux, qui travaillent en étroite
                    collaboration pour vous offrir une expérience exceptionnelle.<br /><br />
                    Ensemble, nous repoussons les limites de l&apos;innovation pour vous apporter des solutions sur mesure.
                    <br /><br />
                    Guidés par notre passion commune pour les données et l&apos;analyse, nous nous efforçons de créer un modèle prédictif de pointe pour anticiper les performances des athlètes lors des Jeux Olympiques.
                    <br /><br />
                    Avec notre expertise collective et notre engagement envers l&apos;excellence, nous sommes déterminés à fournir des prédictions précises et fiables qui aideront à éclairer les stratégies et les décisions dans le domaine du sport de haut niveau.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {avatars.map(avatar => (
                    <Avatars key={avatar.id} name={avatar.name} job={avatar.job} img={avatar.img} />
                ))}
            </div>
    </section>
    )
}

export default AvatarsSection