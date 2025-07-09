import '@styles/services.scss';
import ServicesItem from "@components/ServicesItem";
import { useSelector } from "react-redux";
import type { RootState } from "@store/store";

export default function Services() {
    const items = useSelector((state: RootState) => state.services.items);

    return (
        <section className="services">
            <div className={'globWrapper'}>
                <div className="topContent">
                    <div className="leftContent">
                        <p>Services and Events</p>
                        <h2>Good music, good people, <br/> and good times</h2>
                    </div>
                    <div className="rightContent">
                        <p>From weddings and corporate events to private parties and festivals — we offer customized
                            musical solutions to suit every occasion and create the perfect atmosphere.</p>
                    </div>
                </div>
                <div className="contentContainer">
                    {items.map(item => (
                        <ServicesItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
