import { jsx as _jsx } from "react/jsx-runtime";
import '../styles/menu.scss';
import { useSelector } from 'react-redux';
export default function Menu() {
    const menuItems = useSelector((state) => state.menu.menuItems);
    const handleScrollToSection = (targetId) => {
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (_jsx("nav", { className: 'menu', children: _jsx("ul", { children: menuItems.map((item) => (_jsx("li", { onClick: () => handleScrollToSection(item.targetId), children: item.name }, item.id))) }) }));
}
