import { useState, useEffect } from "react";

export default function ProjectItem(props) {
  const [size, setSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setSize("fs-6");
      } else {
        setSize("fs-5");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="row mb-5">
        <div className="col-md-4">
          <h3>{props.title}</h3>
        </div>
        <div className="col-md-8">
          <p className={size}>{props.desc}</p>
        </div>
        <hr className="mb-0 mt-4" />
      </div>
    </>
  );
}
