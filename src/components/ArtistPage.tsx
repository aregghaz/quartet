import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import "@styles/artistPage.scss";
import {useState} from "react";

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

                    </div>
                    <div className="videos"></div>
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
