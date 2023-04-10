import { useState, useEffect } from "react";

export default function Footer(params) {
  const [newYear, setNewYear] = useState("");
  useEffect(() => {
    const year = new Date().getFullYear();
    setNewYear(year);
  }, []);

  return (
    <>
      <footer>
        <p className="mb-0">
          © Copyright {newYear} The Art of Thinking Gray. All Rights Reserved
        </p>
      </footer>
    </>
  );
}
