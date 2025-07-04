import '../styles/menu.scss'
import {useSelector} from 'react-redux';
import type {RootState} from '../store/store';

export default function Menu() {
    const menuItems = useSelector((state: RootState) => state.menu.menuItems);

    const handleScrollToSection = (targetId: string) => {
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav className={'menu'}>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id} onClick={() => handleScrollToSection(item.targetId)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}