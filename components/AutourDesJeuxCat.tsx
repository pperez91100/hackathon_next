import React from "react";

interface FeaturedVideoProps {
    name: string;
    src: string;
    url: string;
}

const AutourDesJeuxCat: React.FC<FeaturedVideoProps> = ({ name, src, url }) => {

    return (
        <a href={url} className="flex flex-col p-2 border-solid border shadow-custom border-slate-200 rounded-lg hover:-translate-y-1 transition-transform duration-300 group">
            <img src={src} width={250} height={250} alt="" />
            <div className="flex justify-between items-end w-full  p-2">
                <h3 className="mt-2 font-semibold">{name}</h3>
                <p className="-rotate-90 -translate-x-5 transition-all opacity-0 duration-300 group-hover:opacity-100 group-hover:rotate-0 group-hover:translate-x-0">→</p>
            </div>
        </a>

    );
}

export default AutourDesJeuxCat;
