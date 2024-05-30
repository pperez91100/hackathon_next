import React from "react";
import FeaturedVideo from "./FeaturedVideo";

const FeaturedContent: React.FC = () => {
    const videos = [
        { id: 0, name: 'Ces records olympiques impossibles à battre', url: "https://youtu.be/9yVHqMM0pb0" },
        { id: 1, name: 'La France saura-t-elle relever tous les défis des JO ?', url: "https://youtu.be/dWtXOl56P-c" },
        { id: 2, name: 'Jeux Olympiques : affrontements géopolitiques', url: "https://youtu.be/0qeDTwq3Y5U" },
        { id: 3, name: 'La drôle d\'histoire des JO (Jeux Olympiques)', url: "https://youtu.be/ux2JuPglPhU" },
    ];

    return (
        <div className="p-10 w-full">
            <div className="flex flex-col gap-10 ">
                <h1 className='text-2xl md:text-3xl font-bold uppercase'>Contenu suggéré</h1>
                <div className="flex flex-wrap gap-10 sm:justify-start max-w-screen-lg">
                    {videos.map(video => (
                        <FeaturedVideo key={video.id} name={video.name} url={video.url} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedContent;
