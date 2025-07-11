import { useState, useRef } from 'react';
import '@styles/portfolio.scss';

const initialItems = [...Array(10)].map((_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
}));

export default function Portfolio() {
    const [items, setItems] = useState(initialItems);
    const [offset, setOffset] = useState(-1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    const extendedItems = [
        items[items.length - 1],
        ...items.slice(0, 4),
        items[4],
    ];

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setOffset((prev) => prev - 1);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setOffset((prev) => prev + 1);
    };

    const onTransitionEnd = () => {
        let newItems = [...items];
        let newOffset = offset;

        if (offset === -2) {
            newItems = [...items.slice(1), items[0]];
            newOffset = -1;
        } else if (offset === 0) {
            newItems = [items[items.length - 1], ...items.slice(0, items.length - 1)];
            newOffset = -1;
        } else {
            setIsTransitioning(false);
            return;
        }

        setItems(newItems);
        setOffset(newOffset);

        if (trackRef.current) {
            trackRef.current.style.transition = 'none';
            trackRef.current.style.transform = `translateX(${newOffset * 25}%)`;

            // Двойной requestAnimationFrame для надёжного восстановления
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (trackRef.current) {
                        trackRef.current.style.transition = 'transform 0.5s ease';
                        setIsTransitioning(false);
                    }
                });
            });
        }
    };


    return (
        <section className="portfolioWrapper">
            <button className="arrow left" onClick={handlePrev}>
                &lt;
            </button>

            <div className="portfolio">
                <div
                    ref={trackRef}
                    className="portfolioTrack"
                    style={{
                        transform: `translateX(${offset * 25}%)`,
                        transition: isTransitioning ? 'transform 0.5s ease' : 'none',
                    }}
                    onTransitionEnd={onTransitionEnd}
                >
                    {extendedItems.map((item, i) => (
                        <div className="portfolioItem" key={`${item.id}-${i}`}>
                            {/*{item.name}*/}
                        </div>
                    ))}
                </div>
            </div>

            <button className="arrow right" onClick={handleNext}>
                &gt;
            </button>
        </section>
    );
}
