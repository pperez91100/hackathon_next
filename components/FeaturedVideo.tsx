import React from "react";

interface FeaturedVideoProps {
    name: string;
    url: string;
}

const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ name, url }) => {

    const videoId = url.split('/').pop();

    return (
        <div className="featured-video flex flex-wrap">
            <h3 className="mb-2">{name}</h3>
            <iframe
                width="100%"
                height="205"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={name}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default FeaturedVideo;
