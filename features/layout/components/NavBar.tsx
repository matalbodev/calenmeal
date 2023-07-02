import "./NavBar.scss";
import { ReactComponent as Home } from "#root/assets/icons/home.svg";
import { ReactComponent as Calendar } from "#root/assets/icons/calendar.svg";
import { ReactComponent as Account } from "#root/assets/icons/user.svg";
import { ReactComponent as Meals } from "#root/assets/icons/eat.svg";
import { Link } from "../commons/Link";

export function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link href="/">
            <Home stroke="#fff" fill="none" width={32} height={32} />
          </Link>
        </li>
        <li>
          <Link href="/calendar">
            <Calendar stroke="#fff" fill="none" width={32} height={32} />
          </Link>
        </li>
        <li>
          <Link href="/meals">
            <Meals fill="#fff" width={32} height={32} />
          </Link>
        </li>
        <li>
          <Link href="/account">
            <Account stroke="#fff" fill="none" width={32} height={32} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
