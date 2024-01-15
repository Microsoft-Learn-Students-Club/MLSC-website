import { useState } from 'react';
import { SliderData } from '../utils/data';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import styles from './Gallery.module.css';

const Gallery = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={`flex_center | ${styles.gallery_container}`}>
      <h2 className={styles.gallery_title}>Gallery of Our Triumphs</h2>
      <div className={`flex_center | ${styles.slider}`}>
        <FaChevronLeft className={styles.left_arrow} onClick={prevSlide} />
        <FaChevronRight className={styles.right_arrow} onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? `${styles.slide} ${styles.active}` : styles.slide}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='travel image' className={styles.image} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;