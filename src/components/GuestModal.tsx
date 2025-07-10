import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/store';
import { closeGuestModal } from '@store/slices/guestArtistsSlice';
import '@styles/gusetModal.scss'
import {useState} from "react";

export default function GuestModal() {
    const dispatch = useDispatch();
    const { isModalOpen, selectedGuest } = useSelector(
        (state: RootState) => state.guestArtists
    );
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    if (!isModalOpen || !selectedGuest) return null;

    return (
        <div
            className="guestModalOverlay"
            onClick={(e) => {
                if (e.target === e.currentTarget) dispatch(closeGuestModal());
            }}
        >
            <div
                className="guestModal"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => dispatch(closeGuestModal())}
                    style={{
                        position: 'absolute',
                        top: 16,
                        right: 24,
                        fontSize: 28,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    ×
                </button>

                {/* Left block */}
                <div className="left">
                    <img
                        src={selectedGuest.imageUrl}
                        alt={selectedGuest.name}
                    />
                    <div className="info">
                        <h3>{selectedGuest.fullName}</h3>
                        <div>
                            <p>Role - {selectedGuest.role}</p>
                            <p>Age -  {selectedGuest.age}</p>
                            <p>Best Song -  {selectedGuest.bestSong}</p>
                            <p>Mail -  {selectedGuest.mail}</p>
                            <p>{selectedGuest.description}</p>
                        </div>

                    </div>
                </div>

                {/* Right block */}
                <div className="right">
                    <div className="gallery">
                        <h4>Gallery</h4>
                        <div className="galleryMasonry">
                            {selectedGuest.galleryImages.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`gallery-${i}`}
                                    onClick={() => setLightboxImg(img)}
                                    className="clickable"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="videos">
                        <h4>Videos</h4>
                        {selectedGuest.videoUrls.map((url, i) => (
                            <iframe
                                key={i}
                                width="100%"
                                height="220"
                                src={url}
                                title={`Video ${i}`}
                                frameBorder="0"
                                allowFullScreen
                            />
                        ))}
                    </div>
                </div>
            </div>
            {lightboxImg && (
                <div className="imageLightboxOverlay" onClick={() => setLightboxImg(null)}>
                    <div className="imageLightboxContent" onClick={(e) => e.stopPropagation()}>
                        <button className="closeBtn" onClick={() => setLightboxImg(null)}>&times;</button>
                        <img src={lightboxImg} alt="Enlarged" />
                    </div>
                </div>
            )}
        </div>
    );
}
