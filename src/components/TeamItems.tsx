import '@styles/teamItems.scss';
import { TeamItem } from '@store/slices/teamItemSlice'; // Исправлен импорт

type TeamItemsProps = {
    item: TeamItem;
};

export default function TeamItems({ item }: TeamItemsProps) {
    return (
        <div className="teamItem">
            <div className="itemImage">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="itemDescription">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
            <div className="itemStatus">
                <p className="author">{item.author}</p>
                <p className="date">{item.date}</p>
            </div>
        </div>
    );
}