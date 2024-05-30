import React from "react";
import FeaturedVideo from "./FeaturedVideo";

const FeaturedContent: React.FC = () => {
    const videos = [
        { id: 0, name: 'Ces records olympiques impossibles à battre', url: "https://www.youtube-nocookie.com/embed/9yVHqMM0pb0?si=GDt4tu4JLbEmDCKz" },
        { id: 1, name: 'Jeux olympiques : une tribune géopolitique', url: "https://www.youtube-nocookie.com/embed/KO3o5dSlgrM?si=jcXg-kp_6T7fZ4EM" },
        { id: 2, name: 'Jeux Olympiques : affrontements géopolitiques', url: "https://www.youtube-nocookie.com/embed/dWtXOl56P-c?si=lrfrpGxfwUWsu_bE" },
        { id: 3, name: 'La drôle d\'histoire des JO (Jeux Olympiques)', url: "https://www.youtube-nocookie.com/embed/ux2JuPglPhU?si=E8zwc5tk3kpRw4BC" },
    ];

    return (
        <div className="p-10 w-full">
            <div className="flex flex-col gap-10 ">
                <h1 className='text-2xl md:text-3xl font-bold uppercase'>Contenu suggéré</h1>
                <div className="flex flex-col-reverse   2xl:flex-row ">
                    <div className="flex flex-wrap justify-center gap-10  sm:justify-start max-w-screen-lg">
                        {videos.map(video => (
                            <FeaturedVideo key={video.id} name={video.name} url={video.url} />
                        ))}
                    </div>
                    <div className="flex items-center  py-10 w-full 2xl:w-1/3">
                        Pour en apprendre davantage sur les Jeux Olympiques, explorez notre sélection spéciale de contenus recommandés. Que vous soyez passionné par l&apos;histoire des JO, curieux des défis géopolitiques, ou intéressé par les records inégalés, nous avons des articles, vidéos et analyses qui vous captiveront. Plongez dans l&apos;univers fascinant des Jeux Olympiques et découvrez les histoires et les faits marquants qui font de cet événement mondial un véritable spectacle sportif.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedContent;
