import ProjectItem from "./ProjectItem";

export default function Projects(params) {
  return (
    <>
      <div className="vh-100">
        <div className="mt-5">
          <h1>Projects</h1>
          <p className="mb-0">
            In this section you will find some projects of mine. I invite you to
            read.
          </p>
        </div>
        <div className="row">
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </>
  );
}
