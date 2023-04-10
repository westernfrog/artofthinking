export default function ProjectItem(props) {
  return (
    <>
      <div className="row mb-5">
        <div className="col-md-4">
          <h3>{props.title}</h3>
        </div>
        <div className="col-md-8">
          <p className="fs-5">{props.desc}</p>
        </div>
        <hr className="mb-0 mt-4" />
      </div>
    </>
  );
}
