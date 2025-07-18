import '@styles/Header.scss'
import LogoIcon from "../icons/logoIcon";
import Menu from "./Menu";
import SocLinks from "./SocLinks";
import MenuBurger from "./MenuBurger";

export default function Header() {
    return (
        <header className={'header'}>
            <div className={'logoWrapper'}>
                <LogoIcon width={80} height={80} />
                <h1>MusicBand</h1>
            </div>
            <div className={'menuWrapper'}>
                <Menu />
            </div>
            <div className={'SocWrapper'}>
                <SocLinks />
            </div>
            <div className={'burgerMenuWrapper'}>
                <MenuBurger />
            </div>

        </header>
    )
}