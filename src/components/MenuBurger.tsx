import '../styles/menuBurger.scss';
import {useDispatch, useSelector} from 'react-redux';
import {toggleMenu} from '../store/slices/menuSlice';
import type {RootState} from '../store/store';
import Menu from "./Menu.tsx";
import SocLinks from "./SocLinks.tsx";

export default function MenuBurger() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.menu.isOpen);

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="burgerMenuContainer">
            <div
                className={`burgerIcon ${isOpen ? 'open' : ''}`}
                onClick={handleToggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`menuNav ${isOpen ? 'open' : ''}`}>
                <div className={'menuAllContainer'}>
                    <ul>
                        <Menu/>
                    </ul>
                    <div className={'socContent'}>
                        <SocLinks />
                    </div>
                </div>
            </nav>
        </div>
    )
}