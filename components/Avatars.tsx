import React from "react";

interface AvatarProps {
    name: string;
    img: string;
    job: string
}

const Avatars: React.FC<AvatarProps> = ({ name, img, job }) => {

    return (
        <div className="flex flex-col items-center justify-center">
            <img src={img} width={100} height={100} alt="" className="flex flex-col gap-10 rounded-full object-cover shadow-md border border-gray-300" />
            <p className="mt-2 text-center text-xl font-semibold text-gray-800">{name}</p>
            <p className="mt-1 text-center text-lg font-medium text-gray-600">{job}</p>
        </div>

    );
}

export default Avatars;
