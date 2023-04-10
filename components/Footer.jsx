import { useState, useEffect } from "react";

export default function Footer(params) {
  const [newYear, setNewYear] = useState("");
  useEffect(() => {
    const year = new Date().getFullYear();
    setNewYear(year);
  }, []);

  return (
    <>
      <footer className="my-3">
        <p className="mb-0">
          © Copyright {newYear} Thking Gray. All Rights Reserved
        </p>
      </footer>
    </>
  );
}
