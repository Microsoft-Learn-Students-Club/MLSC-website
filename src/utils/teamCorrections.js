export const TEAM_IMAGE_POSITIONS = {
  "Tanzil Sayed": "50% 15%",
  "Dhruv Jain": "50% 15%",
  "Ayush Pritam Mayekar": "50% 15%"
};

export const TEAM_MEMBER_OVERRIDES = {
  "Aryan Singh": {team: "EXECUTIVE TEAM", role: "Executive Coordinator"}, 
  "Palak Anil Rathod": {team: "CORPORATE TEAM", role: "Corporate Coordinator"}
};

export const applyMemberOverrides = (member) => {
  const memberName = member?.name?.trim();
  const override = memberName ? TEAM_MEMBER_OVERRIDES[memberName] : null;

  if (!override) return member;

  return {
    ...member,
    ...(override.team ? { team: override.team } : {}),
    ...(override.role ? { role: override.role } : {})
  };
};

export const getMemberImagePosition = (member) => {
  const memberName = member?.name?.trim();
  return (memberName && TEAM_IMAGE_POSITIONS[memberName]) || "center";
};
