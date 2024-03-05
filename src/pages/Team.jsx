import Card from "../components/Card";
import "../pages/Team.css";
import teamData from "../utils/data.json";
import { useState } from "react";

const Team = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [showAppDropdown, setShowAppDropdown] = useState(false);

  const toggleAppDropdown = () => {
    setShowAppDropdown(!showAppDropdown);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setSelectedSection(sectionId);
    }
  };

  const renderDropdownOptions = () => {
    if (showAppDropdown) {
      return (
        <div className="dropdown-options">
          <p
            className={`w-fit pointer-events-auto dropdownoption dropdown-heading ${
              selectedSection === "App"
                ? "text-pastel_red"
                : "text-grey hover:text-pastel_red"
            } cursor-pointer text-lg lg:text-xl`}
            onClick={() => scrollToSection("App")}
            style={{ marginLeft: "1em" }}
          >
            •{" "}
            <span className={selectedSection === "App" ? "underline" : ""}>
              App
            </span>
          </p>

          <p
            className={`w-fit pointer-events-auto dropdown-option ${
              selectedSection === "ML"
                ? "text-pastel_blue"
                : "text-grey hover:text-pastel_blue"
            } cursor-pointer text-lg lg:text-xl`}
            onClick={() => scrollToSection("ML")}
            style={{ marginLeft: "1em" }}
          >
            •{" "}
            <span className={selectedSection === "ML" ? "underline" : ""}>
              ML
            </span>
          </p>

          <p
            className={`w-fit pointer-events-auto dropdown-option ${
              selectedSection === "Web"
                ? "text-yellow"
                : "text-grey hover:text-yellow"
            } cursor-pointer text-lg lg:text-xl`}
            onClick={() => scrollToSection("Web")}
            style={{ marginLeft: "1em" }}
          >
            •{" "}
            <span className={selectedSection === "Web" ? "underline" : ""}>
              Web
            </span>
          </p>
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

  return (
    <div className="team-section">
      <div> 
        <div
          id="team-div"
          style={{
            left: "50px",
            top: "18%",
            opacity: 1,
            transform: "scale(1) translateZ(0)",
            animation: "drop-in 1s ease 200ms backwards",
          }}
          className="lg:block hidden fixed pointer-events-none w-7/12 text-white xl:w-4/12 lg:w-4/12 md:w-3/12 pr-2"
        >
          <h1 className="font-extrabold text-yellow uppercase lg:text-2xl md:text-3xl text-4xl">
            Meet The Team
          </h1>
          <p className="mt-4 font-light">
          We have got a strong team filled with caffeine-addicted corporate members, gradients-loving outreach team, and machine-like working developers.
          </p>
          <div className="flex flex-col gap-2 mt-8 w-fit">
            <div
              className={`w-fit pointer-events-auto ${
                selectedSection === "LEADS"
                  ? "underline text-yellow"
                  : "text-grey hover:text-yellow"
              } cursor-pointer text-lg lg:text-xl`}
              onClick={() => scrollToSection("LEADS")}
            >
              LEADS
            </div>
            <p
              className={`w-fit pointer-events-auto ${
                selectedSection === "Corporate"
                  ? "underline text-pastel_green"
                  : "text-grey hover:text-pastel_green"
              } cursor-pointer text-lg lg:text-xl`}
              onClick={() => scrollToSection("Corporate")}
            >
              Corporate
            </p>
            <div className="relative inline-block">
              <div
                className={`w-fit pointer-events-auto ${
                  selectedSection === "App"
                    ? "underline text-pastel_red"
                    : "text-grey hover:text-pastel_red"
                } cursor-pointer text-lg lg:text-xl`}
                onClick={() => {
                  toggleAppDropdown();
                }}
              >
                Dev
              </div>
              {renderDropdownOptions()}
            </div>
            <div
              className={`w-fit pointer-events-auto ${
                selectedSection === "Outreach"
                  ? "underline text-pastel_green"
                  : "text-grey hover:text-pastel_green"
              } cursor-pointer text-lg lg:text-xl`}
              onClick={() => scrollToSection("Outreach")}
            >
              Outreach
            </div>
          </div>
        </div>
        <div className="xs:grid gap-16 mt-24 md:grid-cols-12 sm:grid">
          <div className="col-span-8 pt-24 text-white xl:col-span-4 lg:col-span-4 md:col-span-3">
            <div className="lg:hidden block sticky top-[150px] sm:text-base text-2xl"></div>
          </div>
          <div className="grid col-span-12 mt-16 text-white xl:col-span-8 lg:col-span-8 md:col-span-9 sm:mt-0 z-50">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-3">
              <div id="LEADS" className="sm:flex flex lg:py-0 sm:py-10 py-4">
                <h2 className="font-extrabold text-yellow m-auto uppercase lg:text-3xl sm:text-2xl text-3xl">
                  LEADS
                </h2>
              </div>
              {renderCards("lead")}
              <div
                id="Corporate"
                className="sm:flex flex lg:py-0 sm:py-10 py-4"
              >
                <h2 className="font-extrabold text-pastel_green m-auto uppercase lg:text-3xl sm:text-2xl text-3xl">
                  Corporate
                </h2>
              </div>
              {renderCards("corporate")}
              <div></div>
              <div id="App" className="sm:flex flex lg:py-0 sm:py-10 py-4">
                <h2 className="font-extrabold text-pastel_red m-auto uppercase lg:text-3xl sm:text-2xl text-3xl">
                  App
                </h2>
              </div>
              {renderCards("App")}
              <div id="ML" className="sm:flex flex lg:py-0 sm:py-10 py-4">
                <h2 className="font-extrabold text-pastel_blue m-auto uppercase lg:text-3xl sm:text-2xl text-3xl">
                  ML
                </h2>
              </div>
              {renderCards("ML")}
              <div></div>
              <div id="Web" className="sm:flex flex lg:py-0 sm:py-10 py-4">
                <h2 className="font-extrabold text-yellow m-auto uppercase lg:text-3xl sm:text-2xl text-3xl">
                  Web
                </h2>
              </div>
              {renderCards("Dev")}
              <div></div>
              <div></div>
              <div
                id="Outreach"
                className="sm:flex flex lg:py-0 sm:py-10 py-4"
              >
                <h2 className="font-extrabold text-pastel_green m-auto uppercase lg:text-3xl sm:text-2xl text-3xl">
                  Outreach
                </h2>
              </div>
              {renderCards("Outreach")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
