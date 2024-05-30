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



        <section className="flex flex-col">
            <div className="flex flex-col  gap-4 p-10">
                <h2 className="text-2xl md:text-3xl font-bold uppercase">notre équipe</h2>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                    Notre équipe est composée de professionnels passionnés et talentueux, qui travaillent en étroite
                    collaboration pour vous offrir une expérience exceptionnelle.<br /><br />
                    Ensemble, nous repoussons les limites de l&apos;innovation pour vous apporter des solutions sur mesure.
                    <br /><br />
                    Guidés par notre passion commune pour les données et l&apos;analyse, nous nous efforçons de créer un modèle prédictif de pointe pour anticiper les performances des athlètes lors des Jeux Olympiques.
                    <br /><br />
                    Avec notre expertise collective et notre engagement envers l&apos;excellence, nous sommes déterminés à fournir des prédictions précises et fiables qui aideront à éclairer les stratégies et les décisions dans le domaine du sport de haut niveau.
                </p>
            </div>
            <div className="flex flex-wrap items-end justify-center gap-5 p-10 sm:flex-row sm:flex-wrap sm:justify-start  ">
                {avatars.map(avatar => (
                    <Avatars key={avatar.id} name={avatar.name} job={avatar.job} img={avatar.img} />
                ))}
            </div>

            {/* <div className="grid grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                    <img
                        alt="Equipier_01"
                        className="rounded-full object-cover shadow-md border border-gray-300"
                        height="100"
                        src="/tanguy.svg"
                        width="150"
                    />
                    <p className="mt-2 text-center text-xl font-semibold text-gray-800">Tanguy MOREL</p>
                    <p className="mt-1 text-center text-lg font-medium text-gray-600">Chef de Projet</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        alt="Equipier_02"
                        className="rounded-full object-cover shadow-md border border-gray-300"
                        height="100"
                        src="/romain.svg"
                        width="150"
                    />
                    <p className="mt-2 text-center text-xl font-semibold text-gray-800">Romain RULLIER</p>
                    <p className="mt-1 text-center text-lg font-medium text-gray-600">Chef de Projet</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        alt="Equipier_03"
                        className="rounded-full object-cover shadow-md border border-gray-300"
                        height="100"
                        src="/pablo.svg"
                        width="150"
                    />
                    <p className="mt-2 text-center text-xl font-semibold text-gray-800">Pablo PEREZ</p>
                    <p className="mt-1 text-center text-lg font-medium text-gray-600">Chef de Projet</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        alt="Equipier_04"
                        className="rounded-full object-cover shadow-md border border-gray-300"
                        height="100"
                        src="/kaotar.svg"
                        width="150"
                    />
                    <p className="mt-2 text-center text-xl font-semibold text-gray-800">Kaotar TEMOUDEN</p>
                    <p className="mt-1 text-center text-lg font-medium text-gray-600">Chef de Projet</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        alt="Equipier_05"
                        className="rounded-full object-cover shadow-md border border-gray-300"
                        height="100"
                        src="/adrien.svg"
                        width="150"
                    />
                    <p className="mt-2 text-center text-xl font-semibold text-gray-800">Adrien MANFREDI</p>
                    <p className="mt-1 text-center text-lg font-medium text-gray-600">Chef de Projet</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        alt="Equipier_06"
                        className="rounded-full object-cover shadow-md border border-gray-300"
                        height="100"
                        src="/aboubakar.svg"
                        width="150"
                    />
                    <p className="mt-2 text-center text-xl font-semibold text-gray-800">Aboubakar MEITE</p>
                    <p className="mt-1 text-center text-lg font-medium text-gray-600">Chef de Projet</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        alt="Equipier_07"
                        className="rounded-full object-cover shadow-md border border-gray-300"
                        height="100"
                        src="/douaa.svg"
                        width="150"
                    />
                    <p className="mt-2 text-center text-xl font-semibold text-gray-800">Douâa ABID</p>
                    <p className="mt-1 text-center text-lg font-medium text-gray-600">Chef de Projet</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        alt="Equipier_08"
                        className="rounded-full object-cover shadow-md border border-gray-300"
                        height="100"
                        src="/nada.svg"
                        width="150"
                    />
                    <p className="mt-2 text-center text-xl font-semibold text-gray-800">Nada AL IBRAHIMI</p>
                    <p className="mt-1 text-center text-lg font-medium text-gray-600">Chef de Projet</p>
                </div>
            </div> */}
        </section>
    )
}

export default AvatarsSection