import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/menuBurger.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../store/slices/menuSlice';
import Menu from "./Menu";
import SocLinks from "./SocLinks";
export default function MenuBurger() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.menu.isOpen);
    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    };
    return (_jsxs("div", { className: "burgerMenuContainer", children: [_jsxs("div", { className: `burgerIcon ${isOpen ? 'open' : ''}`, onClick: handleToggleMenu, children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] }), _jsx("nav", { className: `menuNav ${isOpen ? 'open' : ''}`, children: _jsxs("div", { className: 'menuAllContainer', children: [_jsx("ul", { children: _jsx(Menu, {}) }), _jsx("div", { className: 'socContent', children: _jsx(SocLinks, {}) })] }) })] }));
}
