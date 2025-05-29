import Link from "next/link";



export default function ProductLinks() {
  return (
    <div className="header__sec-nav">
      <Link className="header__nav-link" href="#">
        <span className="header__nav-title">Professional Feet</span>
      </Link>

      <Link className="header__nav-link" href="#">
        <span className="header__nav-title">Feehref Care</span>
      </Link>

      <Link className="header__nav-link" href="#">
        <span className="header__nav-title">Tools</span>
      </Link>

      <Link className="header__nav-link" href="#">
        <span className="header__nav-title">Disposable caps</span>
      </Link>

      <Link className="header__nav-link" href="#">
        <span className="header__nav-title">Nail Cutters</span>
      </Link>

      <Link className="header__nav-link" href="#">
        <span className="header__nav-title">Unloading material</span>
      </Link>

      <Link className="header__nav-link" href="#">
        <span className="header__nav-title">Accessories</span>
      </Link>
    </div>
  );
}
