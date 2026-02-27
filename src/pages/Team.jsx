import Card from "../components/Card";
import "../pages/Team.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Team = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [showDevDropdown, setShowDevDropdown] = useState(false);
  const [members, setMembers] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  const teamOrder = [
    "CORE LEADS",
    "ADMIN TEAM",
    "EXECUTIVE TEAM",
    "CORPORATE TEAM",
    "OUTREACH TEAM",
    "WEB DEV TEAM",
    "APP DEV TEAM",
    "AIML TEAM"
  ];

  const rolePriority = (role = "") => {
    const r = role.toLowerCase().trim();

    if (r === "club lead") return 1;
    if (r === "associate club lead") return 2;
    if (r === "treasurer") return 3;
    if (r === "deputy treasurer") return 4;

    if (r.endsWith("lead")) return 1;
    if (r.includes("senior")) return 2;
    if (r.includes("associate")) return 3;
    if (r.includes("coordinator")) return 4;

    return 99;
  };

  // Fetch + Sort
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get(`${API_URL}/members`);

        const sorted = [...res.data].sort((a, b) => {
          const teamA = teamOrder.indexOf(a.team?.trim());
          const teamB = teamOrder.indexOf(b.team?.trim());

          if (teamA !== teamB) return teamA - teamB;

          return rolePriority(a.role) - rolePriority(b.role);
        });

        setMembers(sorted);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      }
    };

    fetchMembers();
  }, []);

  // Scroll Spy
  useEffect(() => {
    if (!members.length) return;

    const sections = teamOrder
      .map((team) => document.getElementById(team))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [members]);

  const scrollToSection = (teamName) => {
    const section = document.getElementById(teamName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setSelectedSection(teamName);
    }
  };

  const renderCards = (teamName) => {
    return members
      .filter((m) => m.team === teamName)
      .map((member) => (
        <Card
          key={member.id}
          name={member.name}
          imgSrc={member.imageUrl}
          githubUrl={member.githubUrl}
          linkedinUrl={member.linkedinUrl}
          role={member.role}
        />
      ));
  };

  return (
    <div className="team-section">
      <div>

        {/* SIDEBAR */}
        <div
          className="lg:block hidden fixed pointer-events-none w-7/12 text-white xl:w-4/12 lg:w-4/12 md:w-3/12 pr-2"
          style={{
            left: "50px",
            top: "18%",
            animation: "drop-in 1s ease 200ms backwards"
          }}
        >
          <h1 className="font-extrabold text-yellow uppercase lg:text-2xl md:text-3xl text-4xl">
            Meet The Team
          </h1>

          <p className="mt-4 font-light">
            Builders. Operators. Designers. Strategists.
            <br/>
            Behind every event, every initiative, and every line of code is a team that made it possible. Different skills. Different strengths. One shared mission.
          </p>

          <div className="flex flex-col gap-4 mt-8 w-fit">

            {["CORE LEADS","ADMIN TEAM","EXECUTIVE TEAM","CORPORATE TEAM","OUTREACH TEAM"].map((team) => (
              <div
                key={team}
                className={`relative w-fit pointer-events-auto cursor-pointer text-lg lg:text-xl ${
                  selectedSection === team
                    ? "text-yellow"
                    : "text-grey hover:text-yellow"
                }`}
                onClick={() => scrollToSection(team)}
              >
                <span className="relative inline-block">
                  {team}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-yellow transition-all duration-300 ${
                      selectedSection === team ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              </div>
            ))}

            {/* DEV DROPDOWN */}
            <div className="relative inline-block pointer-events-auto">
              <div
                className="cursor-pointer text-lg lg:text-xl text-grey hover:text-yellow"
                onClick={() => setShowDevDropdown(!showDevDropdown)}
              >
                DEV TEAMS
              </div>

              {showDevDropdown && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {["WEB DEV TEAM","APP DEV TEAM","AIML TEAM"].map((team) => (
                    <div
                      key={team}
                      className={`relative w-fit cursor-pointer text-lg ${
                        selectedSection === team
                          ? "text-yellow"
                          : "text-grey hover:text-yellow"
                      }`}
                      onClick={() => scrollToSection(team)}
                    >
                      <span className="relative inline-block">
                        • {team}
                        <span
                          className={`absolute left-0 -bottom-1 h-[2px] bg-yellow transition-all duration-300 ${
                            selectedSection === team ? "w-full" : "w-0"
                          }`}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="xs:grid gap-16 mt-24 md:grid-cols-12 sm:grid">
          <div className="col-span-8 pt-24 text-white xl:col-span-4 lg:col-span-4 md:col-span-3" />

          <div className="grid col-span-12 mt-16 text-white xl:col-span-8 lg:col-span-8 md:col-span-9 sm:mt-0 z-50">
            <h1 className="text-center text-4xl font-bold text-yellow mt-10">
              MLSC TEAM 25-26
            </h1>

            {teamOrder.map((teamName) => {
              const teamMembers = members.filter(
                (m) => m.team === teamName
              );

              if (!teamMembers.length) return null;

              return (
                <div key={teamName} id={teamName} className="mt-16">
                  <h2 className="font-extrabold text-yellow m-auto uppercase lg:text-3xl sm:text-2xl text-3xl ml-10 md:ml-2">
                    {teamName}
                  </h2>

                  <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-3 gap-8">
                    {renderCards(teamName)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;