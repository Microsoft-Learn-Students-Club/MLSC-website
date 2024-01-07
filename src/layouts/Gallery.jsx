import Fancybox from '../components/Fancybox';
import styles from './Gallery.module.css';

const imageBaseURL = 'https://lipsum.app/id/';

export default function App() {
    const imageIds = [60, 61, 62, 63, 64];

    return (
        <div className={styles.container}>
            <h1 className={`title | ${styles.gallery_title}`}>Image Gallery</h1>
            <Fancybox
                options={{
                    Carousel: {
                        infinite: true,
                    },
                }}
            >
                <div className={styles.image_container}>
                    {imageIds.map((id) => (
                        <>
                            <a
                                key={id}
                                className={styles.image}
                                data-fancybox="gallery"
                                href={`${imageBaseURL}${id}/1600x1200`}
                            >
                                <img
                                    src={`${imageBaseURL}${id}/200x150`}
                                    width="200"
                                    height="150"
                                />
                            </a>
                            <a
                                key={id}
                                className={styles.image}
                                data-fancybox="gallery"
                                href={`${imageBaseURL}${id}/1600x1200`}
                            >
                                <img
                                    src={`${imageBaseURL}${id}/200x150`}
                                    width="200"
                                    height="150"
                                />
                            </a>
                        </>
                    ))}
                </div>
            </Fancybox>
        </div>
    );
}
