import { useState } from "react";

function ProtectedRoute({ children }) {
  const [accessGranted, setAccessGranted] = useState(
    sessionStorage.getItem("memberAccess") === "true"
  );

  if (!accessGranted) {
    const entered = prompt("Enter team passcode");

    if (entered === import.meta.env.VITE_MEMBER_PASSCODE) {
      sessionStorage.setItem("memberAccess", "true");
      setAccessGranted(true);
    } else {
      return <h1>Nice try 👀</h1>;
    }
  }

  return children;
}

export default ProtectedRoute;