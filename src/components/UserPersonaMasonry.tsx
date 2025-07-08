import Masonry from 'react-masonry-css';
import '@styles/userPersonaMasonry.scss';
import {useSelector} from 'react-redux';
import {RootState} from "@store/store";

interface Props {
    personaId: string;
}


export default function UserPersonaMasonry({personaId}: Props) {

    const cards = useSelector((state: RootState) =>
        state.persona.cards.filter((card) => card.personaId === personaId)
    );

    const breakpointColumnsObj = {
        default: 2,
        1100: 2,
        900: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-column"
        >
            {cards.map((card, index) => (
                <>
                    <div className="card-title">{card.title}</div>
                    <div className="card" key={index}>
                        <div dangerouslySetInnerHTML={{ __html: card.content }} />
                    </div>
                </>

            ))}
        </Masonry>
    );
}
