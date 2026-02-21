import { useState, useEffect } from "react";
import "./AddMember.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

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

  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState("checking"); // "checking" | "online" | "offline"

  useEffect(() => {
    let cancelled = false;
    const checkServer = async () => {
      try {
        const res = await fetch(`${API_URL}/health`);
        if (!cancelled && res.ok) setServerStatus("online");
      } catch {
        if (!cancelled) setServerStatus("offline");
      }
    };
    checkServer();
    // retry every 5s if offline
    const interval = setInterval(() => {
      if (serverStatus !== "online") checkServer();
    }, 5000);
    return () => { cancelled = true; clearInterval(interval); };
  }, [serverStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const res = await fetch(`${API_URL}/add-member`, {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        alert("Error: " + result.error);
        return;
      }

      alert("Member added successfully!");
      setFormData({ title: "Mr", name: "", team: "", role: "", linkedinUrl: "", githubUrl: "", image: null });
    } catch (err) {
      alert("Failed to connect to server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-member-page">
      <div className="add-member-card">
        <h1 >Add your details</h1>
        <p className="info">Enter details carefully. This goes live.</p>

        <div className={`server-status ${serverStatus}`}>
          <span className="status-dot" />
          {serverStatus === "checking" && "Connecting to server..."}
          {serverStatus === "online" && "Server is online"}
          {serverStatus === "offline" && "Server is waking up... please wait"}
        </div>

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

          <button type="submit" disabled={loading || serverStatus !== "online"}>
            {loading ? "Adding..." : serverStatus !== "online" ? "Waiting for server..." : "Add Member"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMember;