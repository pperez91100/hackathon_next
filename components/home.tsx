'use client';

import { useState, useEffect } from 'react';
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {

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
          <div className="text-2xl mx-auto font-normal text-white text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-6 px-8 rounded-lg shadow-lg">
            <div className="inline-block">
              <div>WELCOME TO THE <FlipWords className="text-white" words={words} /></div>
            </div>
            <br />
            <p className="inline-block">
              CELEBRATING THE PARIS 2024 OLYMPICS
            </p>
            <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-white">
                    {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
                </p>
                <p className="text-lg font-bold text-white">
                    Paris 2024 Olympic Games - July 26 to August 11, 2024
                </p>
            </div>
          </div>
        </div>
        <img
          alt="Cover Image"
          className="w-full max-h-screen object-cover block lg:hidden p-6"
          src="/img_jo2.png"
        />
        <div className="relative w-full min-h-screen">
            <img
                alt="Cover Image"
                className="w-full h-full object-cover hidden lg:block"
                src="/img_jo.png"
            />
            <div className="absolute bottom-0 w-full h-2/4 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">OBJECTIFS DU PROJET</h2>
          <p className="mt-2">
            {/* Add your project objectives here */}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">ÉQUIPE</h2>
          <p className="mt-2">
            {/* Add information about your team here */}
          </p>
        </div>
      </div>
  );
}
