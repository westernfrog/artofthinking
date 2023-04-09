import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="sticky-top bg-nav">
        <nav className="container navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid px-0 d-flex align-items-center">
            <Link className="navbar-brand" href="/">
              <h5 className="mb-0">ArtOfThinkingGray.</h5>
            </Link>
            <button
              className="navbar-toggler border-0 px-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              style={{ boxShadow: "none" }}
            >
              <i className="fa-solid fa-bars text-beige"></i>
            </button>

            <div
              className="offcanvas offcanvas-start bg-green d-lg-none"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
              style={{
                maxWidth: "270px",
                borderRight: 0,
              }}
            >
              <div className="offcanvas-header">
                <button
                  className="navbar-toggler border-0 px-0 ms-auto"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{ boxShadow: "none" }}
                >
                  <i className="fa-solid fa-xmark text-beige"></i>
                </button>
              </div>
              <div className="offcanvas-body my-5">
                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About" },
                    { href: "/#blog", label: "Blog" },
                    { href: "/#projects", label: "Projects" },
                  ].map(({ href, label }, index) => (
                    <li className="nav-item" key={index}>
                      <Link className="nav-link fs-1" href={href}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/#blog", label: "Blog" },
                  { href: "/#projects", label: "Projects" },
                ].map(({ href, label }, index) => (
                  <li className="nav-item my-2" key={index}>
                    <Link className="nav-link" href={href}>
                      {label}
                      <hr className="my-0" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="row d-flex align-items-center gap-3 my-2">
                <div className="col">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="col">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="col">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="col">
                  <i className="fa-solid fa-phone"></i>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
