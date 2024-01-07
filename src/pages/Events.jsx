import { useState } from "react";
import Modal from "../layouts/Modal";
import workshopEventImg from "../assets/reactjsworkshop.jpeg";
import azureEventImg from "../assets/azurechallenge.jpeg";
import styles from './Events.module.css';

const Events = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(!isModalOpen);
  };

  const eventsData = [
    {
      title: "ReactJS Workshop",
      imgSrc: workshopEventImg,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid, explicabo excepturi laborum recusandae repellat labore nemo quis fugit. Omnis voluptatum molestias corporis, ut totam alias. Saepe quibusdam inventore itaque sequi labore illum culpa modi distinctio harum similique, quidem ipsam ab id ut dolores molestiae. Nobis maxime unde esse vel.",
      info: [
        { label: "Organizing People", value: 4 },
        { label: "Organizing People", value: 4 },
        { label: "Organizing People", value: 4 },
        { label: "Organizing People", value: 4 },
      ],
    },
    {
      title: "Fundamentally Azure Cloud Skill Challenge",
      imgSrc: azureEventImg,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid, explicabo excepturi laborum recusandae repellat labore nemo quis fugit. Omnis voluptatum molestias corporis, ut totam alias. Saepe quibusdam inventore itaque sequi labore illum culpa modi distinctio harum similique, quidem ipsam ab id ut dolores molestiae. Nobis maxime unde esse vel.",
      info: [
        { label: "Organizing People", value: 4 },
        { label: "Organizing People", value: 4 },
        { label: "Organizing People", value: 4 },
        { label: "Organizing People", value: 4 },
      ],
    },
  ];

  return (
    <>
      <section className={`section | ${styles.event_section}`}>
        <h1 className='title'>Dive into the Tech Universe with us</h1>
        <div className={`flex_center | ${styles.event_container}`}>
          {eventsData.map((event, index) => (
            <div className={`flex_center | ${styles.event_content}`} key={index}>
              <img className={styles.eventImg} src={event.imgSrc} alt={event.title} />
              <div className={styles.event_right_content}>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <button onClick={() => toggleModal(event)} type="button" className={styles.event_btn}>
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>
      {isModalOpen && <Modal event={selectedEvent} onRequestClose={() => setModalIsOpen(false)} />}
    </>
  );
};

export default Events;
