'use client';

import { useState, useEffect } from 'react';
import { FlipWords } from "@/components/ui/flip-words";
import FeaturedVideo from './FeaturedVideo';
import FeaturedContent from './FeaturedContent';
import AutourDesJeux from './AutourDesJeux';
import Objectifs from './Objectifs';
import NotreEquipe from './NotreEquipe';

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

  const words = ["OLYMPICS", "JEUX", "SPORTS"];

  return (
    <div className="w-ful sm:w-full">
      <div className="absolute top-48 right-32 transform -translate-y-1/2 h-[40rem] lg:flex justify-center items-center px-4 hidden z-40">
        <div className="text-2xl mx-auto font-bold text-white text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-6 px-8 rounded-lg shadow-lg">
          <div className="inline-block">
            <div>BIENVENUE AUX <FlipWords className="text-white" words={words} /></div>
          </div>
          <br />
          <p className="inline-block">
            CÉLÉBRER LES JEUX OLYMPIQUES DE PARIS 2024
          </p>
          <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-lg shadow-md text-center">
            <p className="text-3xl font-bold text-white">
              {addLeadingZero(timeLeft.days)} : {addLeadingZero(timeLeft.hours)} : {addLeadingZero(timeLeft.minutes)} : {addLeadingZero(timeLeft.seconds)}
            </p>
            <p className="text-lg font-bold text-white">
              Jeux olympiques de Paris 2024 - 26 juillet au 11 août 2024
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
      <Objectifs />
      <NotreEquipe />
      <AutourDesJeux />
      <FeaturedContent />
    </div>
  );
}
