import Card from "../components/Card";
import "../pages/Team.css";
import teamData from "../utils/data.json";
import { useState, useEffect } from "react";

const SidebarLink = ({ sectionId, label, activeColor, selectedSection, onClick }) => (
  <div
    className={`w-fit pointer-events-auto cursor-pointer text-lg lg:text-xl transition-colors duration-200 ${
      selectedSection === sectionId
        ? `underline ${activeColor}`
        : `text-grey hover:${activeColor}`
    }`}
    onClick={() => onClick(sectionId)}
  >
    {label}
  </div>
);

const Team = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [showAppDropdown, setShowAppDropdown] = useState(false);

  const toggleAppDropdown = () => {
    setShowAppDropdown(!showAppDropdown);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbar = document.getElementById("navbar");
    if (section) {
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight - 3;
      window.scrollTo({ top, behavior: "smooth" });
      setSelectedSection(sectionId);
    }
  };

  useEffect(() => {
    const sections = ["Leads", "Corporate", "App", "ML", "Web", "Outreach"];

    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 80;

      let current = null;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= navbarHeight + 20) {
            current = sections[i];
            break;
          }
        }
      }

      if (current) {
        setSelectedSection(current);
        if (["App", "ML", "Web"].includes(current)) {
          setShowAppDropdown(true);
        } else {
          setShowAppDropdown(false); // close dropdown when outside Dev sections
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderDropdownOptions = () => {
    if (showAppDropdown) {
      return (
        <div className="dropdown-options">
          {[
            { id: "App", color: "text-pastel_red hover:text-pastel_red" },
            { id: "ML", color: "text-pastel_blue hover:text-pastel_blue" },
            { id: "Web", color: "text-yellow hover:text-yellow" },
          ].map(({ id, color }) => (
            <p
              key={id}
              className={`w-fit pointer-events-auto cursor-pointer text-lg lg:text-xl ${
                selectedSection === id ? `${color} underline` : `text-grey ${color}`
              }`}
              onClick={() => scrollToSection(id)}
              style={{ marginLeft: "1em" }}
            >
              •{" "}
              <span className={selectedSection === id ? "underline" : ""}>{id}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderCards = (section) => {
    return (
      teamData[section]?.map((member, index) => (
        <Card
          key={index}
          name={member.name}
          imgSrc={member.imgSrc}
          githubUrl={member.githubUrl}
          linkedinUrl={member.linkedinUrl}
          role={member.role}
        />
      )) || []
    );
  };

  // Each section config — makes it easy to add/remove sections
  const sections = [
    { id: "Leads",     label: "Leads",     color: "text-yellow",      dataKey: "lead"     },
    { id: "Corporate", label: "Corporate", color: "text-pastel_green", dataKey: "corporate" },
    { id: "App",       label: "App",       color: "text-pastel_red",   dataKey: "App"       },
    { id: "ML",        label: "ML",        color: "text-pastel_blue",  dataKey: "ML"        },
    { id: "Web",       label: "Web",       color: "text-yellow",       dataKey: "Dev"       },
    { id: "Outreach",  label: "Outreach",  color: "text-pastel_green", dataKey: "Outreach"  },
  ];

  return (
    <div className="team-section">
      <div>
        <h1
          className="text-center font-extrabold text-yellow uppercase lg:text-2xl md:text-3xl text-4xl"
          style={{ paddingTop: "2em" }}
        >
          Meet The Team
        </h1>
        <p className="text-center mt-4 font-light">
          We have got a strong team filled with caffeine-addicted corporate members,
          gradients-loving outreach team, and machine-like working developers.
        </p>

        {/* Sidebar */}
        <div
          id="team-div"
          style={{
            left: "50px",
            top: "35%",
            opacity: 1,
            transform: "scale(1) translateZ(0)",
            animation: "drop-in 1s ease 200ms backwards",
          }}
          className="lg:block hidden fixed pointer-events-none w-7/12 text-white xl:w-4/12 lg:w-4/12 md:w-3/12 pr-2"
        >
          <div className="flex flex-col gap-2 mt-8 w-fit">
            <SidebarLink sectionId="Leads"     label="Leads"     activeColor="text-yellow"       selectedSection={selectedSection} onClick={scrollToSection} />
            <SidebarLink sectionId="Corporate" label="Corporate" activeColor="text-pastel_green"  selectedSection={selectedSection} onClick={scrollToSection} />

            {/* Dev Dropdown */}
            <div className="relative inline-block">
              <div
                className={`w-fit pointer-events-auto cursor-pointer text-lg lg:text-xl transition-colors duration-200 ${
                  ["App", "ML", "Web"].includes(selectedSection)
                    ? "underline text-pastel_red"
                    : "text-grey hover:text-pastel_red"
                }`}
                onClick={toggleAppDropdown}
              >
                Dev
              </div>
              {renderDropdownOptions()}
            </div>

            <SidebarLink sectionId="Outreach" label="Outreach" activeColor="text-pastel_green" selectedSection={selectedSection} onClick={scrollToSection} />
          </div>
        </div>

        {/* Main Content */}
        <div className="xs:grid gap-16 mt-24 md:grid-cols-12 sm:grid">
          <div className="col-span-8 pt-24 text-white xl:col-span-4 lg:col-span-4 md:col-span-3" />

          <div className="flex flex-col col-span-12 mt-16 text-white xl:col-span-8 lg:col-span-8 md:col-span-9 sm:mt-0 z-50 gap-12">
            {sections.map(({ id, label, color, dataKey }) => (
              <div key={id}>
                {/* Title left-aligned beside cards */}
                <div className="flex items-start gap-8">
                  <h2
                    id={id}
                    className={`flex  font-extrabold ${color} uppercase lg:text-3xl sm:text-2xl text-3xl w-32 shrink-0 sticky top-24`}
                  >
                    {label}
                  </h2>
                  <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 flex-1">
                    {renderCards(dataKey)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;