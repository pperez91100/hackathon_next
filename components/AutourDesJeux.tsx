import React from "react";
import AutourDesJeuxCat from "./AutourDesJeuxCat";

const AutourDesJeux: React.FC = () => {
    const categories = [
        { id: 0, name: 'Sports', src: "/sports.avif", url: 'https://olympics.com/fr/paris-2024/sports' },
        { id: 1, name: 'Sites', src: "/sites.avif", url: 'https://olympics.com/fr/paris-2024/sites' },
        { id: 2, name: 'Célébrer les jeux', src: "/celebrer-jeux.avif", url: 'https://olympics.com/fr/paris-2024/les-jeux/celebration/celebrer-les-jeux' },
        { id: 3, name: 'Infos spectateurs', src: "/info-spectacteur.avif", url: 'https://olympics.com/fr/paris-2024/spectateurs/informations-pratiques-spectateurs' },
    ];

    return (
        <>
            <div className="flex flex-col gap-10 justify-evenly h-fit w-100 min-w-1000 p-10">
                <h1 className='text-2xl md:text-3xl font-bold uppercase'>Autour des Jeux</h1>
                <div className="flex flex-wrap justify-center gap-10 sm:justify-start">
                    {categories.map(item => (
                        <AutourDesJeuxCat key={item.id} name={item.name} src={item.src} url={item.url} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default AutourDesJeux;
