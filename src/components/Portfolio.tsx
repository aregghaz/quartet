import { useState } from 'react';
import '@styles/portfolio.scss';

const initialItems = [...Array(10)].map((_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
}));

export default function Portfolio() {
    const [items, setItems] = useState(initialItems);
    const [slideClass, setSlideClass] = useState<'slide-left' | 'slide-right' | ''>('');

    const handlePrev = () => {
        setSlideClass('slide-left');
        setTimeout(() => {
            setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
            setSlideClass('');
        }, 500);
    };

    const handleNext = () => {
        setSlideClass('slide-right');
        setTimeout(() => {
            setItems((prev) => [...prev.slice(1), prev[0]]);
            setSlideClass('');
        }, 500);
    };

    return (
        <section className="portfolioWrapper">
            <button className="arrow left" onClick={handlePrev}>
                &lt;
            </button>

            <div className={`portfolio ${slideClass}`}>
                {items.slice(0, 4).map((item) => (
                    <div className="portfolioItem" key={item.id}>
                        {item.name}
                    </div>
                ))}
            </div>

            <button className="arrow right" onClick={handleNext}>
                &gt;
            </button>
        </section>
    );
}
