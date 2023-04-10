import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const handleMail = async () => {
    router.push({
      pathname: "mailto:pragyaservices1997@gmail.com",
    });
  };
  return (
    <>
      <div className="sticky-top bg-nav">
        <nav className="container navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid px-0 d-flex align-items-center">
            <Link className="navbar-brand" href="/">
              <h5 className="mb-0">TheArtOfThinkingGray.</h5>
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
                  <i className="fa-solid fa-xmark text-black"></i>
                </button>
              </div>
              <div className="offcanvas-body my-5">
                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/#blog", label: "Blog" },
                    { href: "/#projects", label: "Projects" },
                    { href: "/gallery", label: "Gallery" },
                  ].map(({ href, label }, index) => (
                    <li className="nav-item" key={index}>
                      <Link className="nav-link btn-shrink fs-3" href={href}>
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
                  { href: "/#blog", label: "Blog" },
                  { href: "/#projects", label: "Projects" },
                  { href: "/gallery", label: "Gallery" },
                ].map(({ href, label }, index) => (
                  <li className="nav-item my-2" key={index}>
                    <Link className="nav-link btn-shrink" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border border-dark btn-shrink">
                <button
                  className="btn text-general px-4"
                  style={{ boxShadow: "none" }}
                  onClick={handleMail}
                >
                  Lets Connect!
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
