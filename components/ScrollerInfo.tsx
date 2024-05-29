"use client";

import { log } from 'console';
import { CloudCog } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const scrollSection = document.getElementById('scroll-section')
console.log(scrollSection)


const ScrollerInfo = () => {
    const images = [
        '/bg_sticky01.png',
        '/bg_sticky02.png',
        '/bg_sticky03.png',
    ];

    return (
        <div id="scroll-section" className="h-[300vh] flex">
            <div className="w-1/2 sticky top-0 h-screen">
                <Image
                    // src={images[imageIndex]}
                    src={images[2]}
                    alt="Scrolling image"
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500"
                />
            </div>
            <div className="w-1/2 p-8">
                <div className="h-[100vh] flex flex-col justify-center items-center">
                    <h1 className="text-6xl font-bold">9.5M</h1>
                    <p className="mt-1">spectateurs</p>
                </div>
                <div className="h-[100vh] flex flex-col justify-center items-center">
                    <h1 className="text-6xl font-bold">10.500</h1>
                    <p className="mt-1">athlètes</p>
                </div>
                <div className="h-[100vh] flex flex-col justify-center items-center">
                    <h1 className="text-6xl font-bold">206</h1>
                    <p className="mt-1">pays participants</p>
                </div>
            </div>
        </div>
    );
}

export default ScrollerInfo