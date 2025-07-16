import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import "@styles/artistPage.scss";
import {useState} from "react";
import Masonry from 'react-masonry-css';


export default function ArtistPage() {
    const [modalImage, setModalImage] = useState<string | null>(null);

    const { artistId } = useParams();
    const artist = useSelector((state: RootState) =>
        state.portfolio.items.find(item => item.id === Number(artistId))
    );

    if (!artist) {
        return <div style={{ padding: '50px' }}>404 Page Not Found</div>;
    }

    return (
        <div className="globWrapper">
            <div className="allInformation">
                <div className="posterBox">
                    <img src={artist.img} alt=""/>
                    <div className="bottomInfo">
                        <h2>{artist.name}</h2>
                        <p>{artist.bio}</p>
                    </div>
                </div>
                <div className="test">
                    <div className="rightWrapper">
                        <h3>Gallery</h3>
                        <div className="gallery">
                                {artist.gallery?.map((imgUrl, index, ) => (
                                    <div className="galleryItem" key={index}>
                                        <img src={imgUrl} alt={`Gallery ${index}`} onClick={() => setModalImage(imgUrl)} />
                                    </div>
                                ))}
                        </div>
                        <div className="reviews">
                            <h3>Reviews</h3>
                            <div className="reviewItems">
                                {artist.reviews?.length ? (
                                    <Masonry
                                        breakpointCols={{ default: 2, 900: 1 }}
                                        className="masonry-grid"
                                        columnClassName="masonry-column"
                                    >
                                        {artist.reviews.map((review, index) => (
                                            <div className="reviewCard" key={index}>
                                                <div className="reviewTitle">{review.title}</div>
                                                <div className="reviewContent">{review.content}</div>
                                            </div>
                                        ))}
                                    </Masonry>
                                ) : (
                                    <p>No reviews yet.</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="videos">
                        <h2>Videos</h2>
                        <div className="videosContainer">
                            {artist.videos?.map((videoUrl, index) => (
                                <div className="videoItem" key={index}>
                                    <iframe
                                        src={videoUrl}
                                        title={`Video ${index}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
            {modalImage && (
                <div className="modalOverlay" onClick={() => setModalImage(null)}>
                    <img src={modalImage} alt="" className="modalImage" />
                </div>
            )}
        </div>
    );
}
