function Card({ name, imgSrc, githubUrl, linkedinUrl, role }) {
  return (
    <div className="m-2 lg:m-4">
      <div
        className="relative overflow-hidden border border-white"
        style={{
          borderRadius: "24px",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.12)",
        }}
      >
        {/* Blurred background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(20px)",
            transform: "scale(1.1)",
            zIndex: 0,
          }}
        />

        <div className="relative flex flex-col" style={{ zIndex: 1 }}>
          {/* Main Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src={imgSrc}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>

          {/* Darker Bottom Glass Section */}
          <div
            className="p-4 flex flex-col"
            style={{
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.35))",
            }}
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {name}
            </h2>

            <h3 className="text-sm mt-1 text-gray-300 italic">
              {role}
            </h3>

            <div className="flex gap-2 justify-end mt-auto pt-3">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/material-outlined/24/ffffff/github.png"
                    alt="github"
                  />
                </a>
              )}
              {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;