import '../styles/menu.scss'
import {useSelector} from 'react-redux';
import type {RootState} from '../store/store';

export default function Menu() {
    const menuItems = useSelector((state: RootState) => state.menu.menuItems);
    return (
        <nav className={'menu'}>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}