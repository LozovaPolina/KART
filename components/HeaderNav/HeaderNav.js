import Link from "next/link";



function HeaderNav() {
  return (
    <div className="header__nav">
      <Link className="header__nav-link" href="#">
        <p className="header__nav-title active">Главная</p>
      </Link>

      <Link className="header__nav-link" href="#">
        <p className="header__nav-title">О компании</p>
      </Link>

      <Link className="header__nav-link" href="#">
        <p className="header__nav-title">FAQ</p>
      </Link>

      <Link className="header__nav-link" href="#">
        <p className="header__nav-title">Контакты</p>
      </Link>

      <Link className="header__nav-link" href="#">
        <p className="header__nav-title">Быстрый заказ</p>
      </Link>
    </div>
  );
}
export default HeaderNav