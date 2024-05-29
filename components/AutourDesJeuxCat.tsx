import React from "react";

interface FeaturedVideoProps {
    name: string;
    src: string;
    url: string;
}

const AutourDesJeuxCat: React.FC<FeaturedVideoProps> = ({ name, src, url }) => {

    <a href=""></a>
    return (
        <a href={url} className=" flex flex-col p-3 border-solid border border-slate-500 rounded-lg ">
            <img src={src} width={250} height={250} alt="" />
            <h3 className="mt-2">{name}</h3>
        </a>
    );
}

export default AutourDesJeuxCat;
