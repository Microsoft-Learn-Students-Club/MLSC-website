import "../pages/Team.css";

function Card({ name, imgSrc, githubUrl, linkedinUrl, role }) {
  return (
    <div className="group transition-transform duration-300 hover:-translate-y-2">
      {/* Container: Dark Blue Navy Background with Subtle Border */}
      <div className="bg-[#0f172a] flex-col p-4 m-2 lg:m-4 rounded-xl border border-blue-900/50 flex shadow-xl hover:shadow-blue-900/20 transition-all">
        
        {/* Image Wrapper: Square aspect ratio with a subtle glow */}
        <div className="w-full overflow-hidden rounded-lg border border-blue-800/30">
          <div className="aspect-square relative">
            <img
              src={imgSrc}
              className="w-full h-full block grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              alt={name}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-4">
          <h2 className="font-sans xl:text-2xl text-xl font-bold text-white tracking-tight">
            {name}
          </h2>
          <h3 className="text-blue-400 font-medium text-sm uppercase tracking-wider mt-1">
            {role}
          </h3>
        </div>

        {/* Social Links */}
<div className="flex gap-3 justify-end mt-6 pt-3 border-t border-blue-900/30">
  {githubUrl && (
    <a
      target="_blank"
      href={githubUrl}
      rel="noreferrer"
      className="flex items-center justify-center w-9 h-9 opacity-70 hover:opacity-100 transition-all bg-blue-950 rounded-full border border-blue-800 hover:border-blue-400"
    >
      <img
        className="w-5 h-5 block" 
        src="https://img.icons8.com/material-outlined/48/FFFFFF/github.png"
        alt="github"
      />
    </a>
  )}
  <a
    target="_blank"
    href={linkedinUrl}
    rel="noreferrer"
  >
    <img
      className="w-5 h-5 block"
      src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
      alt="linkedin"
    />
  </a>
</div>
      </div>
    </div>
  );
}

export default Card;