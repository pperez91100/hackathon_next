import React from 'react'
import Image from 'next/image'

const Objectifs = () => {
    return (
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-4">
            <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-bold uppercase">objectifs du projet</h2>
                <p className="text-gray-600 md:text-lg">
                    Notre objectif est de développer un modèle prédictif robuste pour anticiper les performances des athlètes lors des Jeux Olympiques, en utilisant des données historiques et des techniques avancées d&lapos;analyse et de modélisation.
                </p>
                <ul className='flex flex-col gap-10'>
                    <li>
                        1. Analyser et créer des visualisations sur un ensemble de données olympiques de 1896 à 2016 pour découvrir quels pays restent au sommet en prolongation, par saison et par sport, ce qu&lapos;il faut pour qu&lapos;un olympien soit au sommet dans chaque sport, la popularité du sport et la relation entre le nombre de médailles olympiques et le PIB du pays.
                    </li>
                    <li>
                        2. De plus, à partir de l&lapos;ensemble de données olympiques, l&lapos;apprentissage automatique a été intégré pour prédire le nombre de médailles que 25 pays obtiendraient aux Jeux olympiques de Tokyo de 2020 avec le modèle de régression linéaire, de régression logistique et de moyenne mobile intégrée auto régressive (ARIMA).
                    </li>
                </ul>
            </div>
            <div className='flex items-center w-full h-auto py-10  '>
                <img className="rounded-xl" src="/home_1.jpg" alt="" />
            </div>
        </section>

    )
}

export default Objectifs