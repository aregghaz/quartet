import { useParams } from 'react-router-dom';

export default function ArtistPage() {
    const { artistId } = useParams();

    return (
        <div className="artistPage">
            <h1>Artist Page</h1>
            <p>Artist ID: {artistId}</p>
        </div>
    );
}
