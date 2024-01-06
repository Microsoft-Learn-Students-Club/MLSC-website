import { useEffect } from "react";
import styles from './Modal.module.css';

const Modal = ({ event, onRequestClose }) => {
    useEffect(() => {
        function onKeyDown(event) {
            if (event.keyCode === 27) {
                onRequestClose();
            }
        }

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "visible";
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [onRequestClose]);

    return (
        <div className={styles.modal_backdrop}>
            <div className={styles.modal_container}>
                <h3 className={styles.modal_title}>{event.title}</h3>
                <img className={styles.modal_img} src={event.imgSrc} alt={event.title} />
                <div className={styles.modal_info_container}>
                    {event.info.map((info, index) => (
                        <>
                            <div className={styles.event_info} key={index}>
                                <span>
                                    <p>{info.label}</p>
                                    <p>{info.value}</p>
                                </span>
                            </div>
                        </>
                    ))}
                </div>
                <p className={styles.modal_content}>{event.description}</p>
                <button type="button" onClick={onRequestClose} className={styles.modal_btn}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
