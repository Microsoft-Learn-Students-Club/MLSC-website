import * as React from 'react';
import styles from './Gallery.module.css';

import Fancybox from './Fancybox';

export default function App() {
    return (
        <div className={styles.container}>
            <h1 style={{ color: "#ffffff" }}>Image Gallery</h1>
            <Fancybox
                options={{
                    Carousel: {
                        infinite: true,
                    },
                }}
            >
                <div className={styles.image_container}>
                    <a className={styles.image} data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
                        <img
                            alt=""
                            src="https://lipsum.app/id/60/200x150"
                            width="200"
                            height="150"
                        />
                    </a>
                    <a className={styles.image} data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
                        <img
                            alt=""
                            src="https://lipsum.app/id/61/200x150"
                            width="200"
                            height="150"
                        />
                    </a>
                    <a className={styles.image} data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
                        <img
                            alt=""
                            src="https://lipsum.app/id/62/200x150"
                            width="200"
                            height="150"
                        />
                    </a>
                    <a className={styles.image} data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
                        <img
                            alt=""
                            src="https://lipsum.app/id/63/200x150"
                            width="200"
                            height="150"
                        />
                    </a>
                    <a className={styles.image} data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
                        <img
                            alt=""
                            src="https://lipsum.app/id/64/200x150"
                            width="200"
                            height="150"
                        />
                    </a>
                    <a className={styles.image} data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
                        <img
                            alt=""
                            src="https://lipsum.app/id/60/200x150"
                            width="200"
                            height="150"
                        />
                    </a>
                    <a className={styles.image} data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
                        <img
                            alt=""
                            src="https://lipsum.app/id/61/200x150"
                            width="200"
                            height="150"
                        />
                    </a>
                    <a className={styles.image} data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
                        <img
                            alt=""
                            src="https://lipsum.app/id/62/200x150"
                            width="200"
                            height="150"
                        />
                    </a>
                    <a className={styles.image} data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
                        <img
                            alt=""
                            src="https://lipsum.app/id/63/200x150"
                            width="200"
                            height="150"
                        />
                    </a>
                    <a className={styles.image} data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
                        <img
                            alt=""
                            src="https://lipsum.app/id/64/200x150"
                            width="200"
                            height="150"
                        />
                    </a>
                </div>
            </Fancybox>
        </div>
    );
}
