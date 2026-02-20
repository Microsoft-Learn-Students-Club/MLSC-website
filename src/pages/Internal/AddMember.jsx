import { useState } from "react";
import "./AddMember.css";

const teamRoles = {
  "CORE LEADS": ["Club Lead", "Associate Club Lead", "Treasurer", "Deputy Treasurer"],
  "ADMIN TEAM": ["Admin Associate"],
  "CORPORATE TEAM": ["Corporate Lead", "Senior Corporate Associate", "Corporate Associate", "Corporate Coordinator"],
  "OUTREACH TEAM": ["Outreach Lead", "Senior Outreach Associate", "Outreach Associate", "Outreach Coordinator"],
  "EXECUTIVE TEAM": ["Executive Associate", "Executive Coordinator"],
  "WEB DEV TEAM": ["Web Lead", "Senior Web Associate", "Web Dev Associate", "Web Dev Coordinator"],
  "APP DEV TEAM": ["App Lead", "Senior App Associate", "App Dev Associate", "App Dev Coordinator"],
  "AIML TEAM": ["AIML Lead", "Senior AIML Associate", "AIML Associate", "AIML Coordinator"],
};

const teams = Object.keys(teamRoles);

function AddMember() {
  const [formData, setFormData] = useState({
    title: "Mr",
    name: "",
    team: "",
    role: "",
    linkedinUrl: "",
    githubUrl: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else if (name === "team") {
      // reset role when team changes
      setFormData({ ...formData, team: value, role: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    await fetch("http://localhost:5000/add-member", {
      method: "POST",
      body: data,
    });

    alert("Member added successfully 🚀");
  };

  return (
    <div className="add-member-page">
      <div className="add-member-card">
        <h1 >Add your details</h1>
        <p className="info">Enter details carefully. This goes live.</p>

        <form onSubmit={handleSubmit} className="add-member-form">
          <div className="row">
            <select name="title" value={formData.title} onChange={handleChange}>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
            </select>

            <input
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <select name="team" required value={formData.team} onChange={handleChange}>
            <option value="">Select Team</option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>

          <select name="role" required value={formData.role} onChange={handleChange} disabled={!formData.team}>
            <option value="">Select Role</option>
            {formData.team &&
              teamRoles[formData.team].map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
          </select>

          <input
            name="linkedinUrl"
            type="url"
            placeholder="LinkedIn URL"
            required
            value={formData.linkedinUrl}
            onChange={handleChange}
          />

          <input
            name="githubUrl"
            type="url"
            placeholder="GitHub URL"
            required
            value={formData.githubUrl}
            onChange={handleChange}
          />

          <input type="file" name="image" accept="image/*" required onChange={handleChange} />

          <button type="submit">Add Member</button>
        </form>
      </div>
    </div>
  );
}

export default AddMember;