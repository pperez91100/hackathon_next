'use client';

import { useState, useEffect } from 'react';
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };
  
  useEffect(() => {
    const targetDate = new Date('2024-07-26T19:30:00');
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        if (difference <= 0) {
            clearInterval(interval);
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const words = ["PARIS", "OLYMPICS", "GAMES", "SPORTS"];

  return (
      <div className="w-full">
        <div className="absolute top-48 right-32 transform -translate-y-1/2 h-[40rem] lg:flex justify-center items-center px-4 hidden z-40">
          <div className="text-2xl mx-auto font-bold text-white text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-6 px-8 rounded-lg shadow-lg">
            <div className="inline-block">
              <div>WELCOME TO THE <FlipWords className="text-white" words={words} /></div>
            </div>
            <br />
            <p className="inline-block">
              CELEBRATING THE PARIS 2024 OLYMPICS
            </p>
            <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-white">
                  {addLeadingZero(timeLeft.days)} : {addLeadingZero(timeLeft.hours)} : {addLeadingZero(timeLeft.minutes)} : {addLeadingZero(timeLeft.seconds)}
                </p>
                <p className="text-lg font-bold text-white">
                    Paris 2024 Olympic Games - July 26 to August 11, 2024
                </p>
            </div>
          </div>
        </div>
        <img
          alt="Cover Image"
          className="block lg:hidden px-6"
          src="/img_jo2.png"
        />
        <div className="hidden lg:block relative w-full min-h-screen">
            <img
                alt="Cover Image"
                className="w-full h-full object-cover"
                src="/img_jo.png"
            />
            <div className="absolute bottom-0 w-full h-2/4 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">OBJECTIFS DU PROJET</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              Notre objectif est de développer un modèle prédictif robuste pour anticiper les performances des athlètes lors des Jeux Olympiques, en utilisant des données historiques et des techniques avancées d&apos;analyse et de modélisation.
              <br/><br/>
              1. Analyser et créer des visualisations sur un ensemble de données olympiques de 1896 à 2016 pour découvrir quels pays restent au sommet en prolongation, par saison et par sport, ce qu&apos;il faut pour qu&apos;un olympien soit au sommet dans chaque sport, la popularité du sport et la relation entre le nombre de médailles olympiques et le PIB du pays.
              <br/><br/>
              2. De plus, à partir de l&apos;ensemble de données olympiques, l&apos;apprentissage automatique a été intégré pour prédire le nombre de médailles que 25 pays obtiendraient aux Jeux olympiques de Tokyo de 2020 avec le modèle de régression linéaire, de régression logistique et de moyenne mobile intégrée auto régressive (ARIMA).
            </p>
          </div>
          <img
            alt="Notre philosophie"
            className="rounded-2xl"
            src="/home_1.jpg"
          />
        </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
            <div className="grid grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <img
                  alt="Equipier_01"
                  className="rounded-full object-cover shadow-md border border-gray-300"
                  height="100"
                  src="/pablo.svg"
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
                  src="/pablo.svg"
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
                  src="/pablo.svg"
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
                  src="/pablo.svg"
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
                  src="/pablo.svg"
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
                  src="/pablo.svg"
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
                  src="/pablo.svg"
                  width="150"
                />
                  <p className="mt-2 text-center text-xl font-semibold text-gray-800">Nada AL IBRAHIMI</p>
                  <p className="mt-1 text-center text-lg font-medium text-gray-600">Chef de Projet</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold">NOTRE EQUIPE</h2>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                Notre équipe est composée de professionnels passionnés et talentueux, qui travaillent en étroite
                collaboration pour vous offrir une expérience exceptionnelle.<br/><br/> 
                Ensemble, nous repoussons les limites de l&apos;innovation pour vous apporter des solutions sur mesure.
                <br/><br/> 
                Guidés par notre passion commune pour les données et l&apos;analyse, nous nous efforçons de créer un modèle prédictif de pointe pour anticiper les performances des athlètes lors des Jeux Olympiques.
                <br/><br/>
                Avec notre expertise collective et notre engagement envers l&apos;excellence, nous sommes déterminés à fournir des prédictions précises et fiables qui aideront à éclairer les stratégies et les décisions dans le domaine du sport de haut niveau.
              </p>
            </div>
          </section>
      </div>
  );
}
