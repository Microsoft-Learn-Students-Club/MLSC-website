import React from "react";
import "../pages/Team.css";

function Card({ name, imgSrc, githubUrl, linkedinUrl, role }) {
  return (
    <div>
      <div className="bg-white flex-col p-3 m-2 lg:m-4 rounded-md border-2 border-black flex">
        <div className="w-full border-2 border-black rounded-md ">
          <div
            className="aspect-square"
            style={{ width: "100%", overflow: "hidden" }}
          >
            <img
              src={imgSrc}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt={name}
            />
          </div>
        </div>
        <h2 className="my-3 font-sans xl:text-2xl text-xl font-semibold text-black">
          {name}
        </h2>
        <h3 className="text-grey">{role}</h3>
        <div className="flex gap-2 justify-end mt-auto pt-2">
          <a
            target="_blank"
            className="flex items-center w-[1.5rem] h-[1.5rem] opacity-60 hover:opacity-100"
            href={githubUrl}
          >
            <img
              width="98"
              height="98"
              src="https://img.icons8.com/material-outlined/24/github.png"
              alt="github"
            />
          </a>
          <a
            target="_blank"
            className="flex items-center w-[1.5rem] h-[1.5rem] opacity-60 hover:opacity-100"
            href={linkedinUrl}
          >
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/ios-filled/50/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
