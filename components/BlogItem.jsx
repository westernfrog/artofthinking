import Link from "next/link";

export default function BlogItem(props) {
  return (
    <>
      <div className="col-md-6 my-3">
        <Link
          href={`/blog/${props.url}`}
          className="text-decoration-none text-gambetta link-dark"
        >
          <div class="card bg-transparent border-dark rounded-0 btn-shrink">
            <div className="card-header bg-transparent border-0 text-general">
              0{props.index}
            </div>
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.desc.slice(0, 120)}...</p>
              <p>
                Read More<i class="fa-solid fa-arrow-right-long ms-3"></i>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
