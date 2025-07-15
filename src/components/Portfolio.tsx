import {useState, useRef} from 'react';
import '@styles/portfolio.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/store";
import {moveNext, movePrev} from "@store/slices/portfolioSlice";
import ArrowRight from "@svg/arrowRight";
import ArrowLeft from "@svg/leftArrow";
import {Link} from "react-router-dom";


export default function Portfolio() {
    const items = useSelector((state: RootState) => state.portfolio.items);
    const dispatch = useDispatch();

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
        let newOffset = offset;

        if (offset === -2) {
            dispatch(moveNext());
            newOffset = -1;
        } else if (offset === 0) {
            dispatch(movePrev());
            newOffset = -1;
        } else {
            setIsTransitioning(false);
            return;
        }

        setOffset(newOffset);

        if (trackRef.current) {
            trackRef.current.style.transition = 'none';
            trackRef.current.style.transform = `translateX(${newOffset * 25}%)`;

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
        <section className="portfolioWrapper" id="portfolio">
            <button className="arrow left" onClick={handlePrev}>
                <ArrowLeft width={30} height={30}/>
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
                        <Link
                            to={`/artists/${item.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolioItem"
                            key={`${item.id}-${i}`}
                            style={{
                                backgroundImage: `url(${item.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                cursor: 'pointer',
                            }}>
                            <div className="itemsWrapper">
                                <div className="bottomInfoWrapper">
                                    <h2>{item.name}</h2>
                                    <ArrowRight width={30} height={30}/>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <button className="arrow right" onClick={handleNext}>
                <ArrowRight width={30} height={30}/>
            </button>
        </section>
    );
}
