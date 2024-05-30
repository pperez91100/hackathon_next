import React from "react";

interface FeaturedVideoProps {
    name: string;
    url: string;
}

const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ name, url }) => {

    const videoId = url.split('/').pop();

    return (
        <div className=" flex flex-col flex-wrap items-center gap-5 sm:items-start">
            <h3 className="mt-2 text-center text-xl font-semibold  text-gray-800">{name}</h3>
            <div className="fle aspect-video ">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={name}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default FeaturedVideo;
