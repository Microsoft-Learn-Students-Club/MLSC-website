import { useState } from "react";
import Modal from "../layouts/Modal";
import workshopEventImg from "../assets/reactjsworkshop.jpeg";
import azureEventImg from "../assets/azurechallenge.jpeg";
import styles from './Events.module.css';
import SqlWorkshop from "../assets/SqlWorkshop.jpg";
import scogoTuring from "../assets/Scogo_Turing.jpg";
const Events = ({count}) => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(!isModalOpen);
  };

  const eventsData = [
    {
      title: "SQL Workshop by Kantascrypt ",
      Speaker: "Mr. Samtani Edwin",
      imgSrc: SqlWorkshop,
      description: `Microsoft Learn Students Club hosted a SQL workshop featuring guest speaker Mr. Samtani Edwin, Lead Database Architect of Kantascrypt, offering hands-on training in SQL fundamentals. Participants gained practical skills in database management, query optimization, and data manipulation techniques, culminating in a certificate of completion.`,
      info: [
        { label: "Organizing People", value: 8 },
        { label: "Participants", value: 175 },
        { label: "Date and Time", value: `22nd Feb, 2 PM` },
        { label: "Event Span", value: `1 day`  },
      ],
    },
    {
      title: "Guest Lecture by Scogo Networks",
      Speaker: "Mr. Karan Singh",
      imgSrc: scogoTuring,
      description: ` Microsoft Learn Students Club organized a seminar titled "From Turing to Transformers: AI's Revolutionary Tale" featuring guest speaker Mr. Karan Singh, Co-founder and CTO of Scogo Networks, elucidating AI's transformative journey. Attendees delved into AI's impact across diverse sectors, gaining valuable insights, and received certificates recognizing their participation and engagement in the event.`,
      info: [
        { label: "Organizing People", value: 8 },
        { label: "Participants", value: 171 },
        { label: "Date and Time", value: `20th Feb, 11:30 AM` },
        { label: "Event Span", value: `1 day`  },
      ],
    },
    {
      title: "ReactJS Workshop",
      imgSrc: workshopEventImg,
      description: `Participants in MLSC's recent React JS workshop engaged in hands-on coding sessions under 
      expert guidance, gaining insights into cutting-edge developments. The workshop included an 
      exclusive Q&A with Coding Adda's instructors. Certificates were awarded to those 
      demonstrating commitment and outstanding achievements.`,
      info: [
        { label: "Organizing People", value: 8 },
        { label: "Participants", value: 194 },
        { label: "Date and Time", value: `8th to 10th Dec 2023, 6:30 PM` },
        { label: "Event Span", value: `3 days` },
      ],
    },
    {
      title: "Git Going",
      Speaker: "Club leads",
      imgSrc: "https://i.imgur.com/S84VLt8.jpeg",
      description: ` A hands-on workshop where students gained practical experience with Git commands, version control, and collaborative workflows.
They learned how to efficiently manage code repositories, track changes, and resolve merge conflicts in real-world projects.`,
      info: [
        { label: "Organizing People", value: 8 },
        { label: "Participants", value: 171 },
        { label: "Date and Time", value: `20th Feb, 11:30 AM` },
        { label: "Event Span", value: `1 day`  },
      ],
    },
    {
      title: "Mission Career Seminar",
      Speaker: "Mr Gauam Umashankar",
      imgSrc: "https://i.imgur.com/4mAKREa.jpeg",
      description: ` The Career Guidance Seminar by Mission Career provided students with a valuable opportunity to gain insights, guidance, and strategies to advance their careers. By leveraging the expertise of MissionCareer, attendees were equipped with the tools and knowledge necessary to make informed decisions and pursue their career goals with confidence.`,
      info: [
        { label: "Organizing People", value: 8 },
        { label: "Participants", value: 171 },
        { label: "Date and Time", value: `20th Feb, 11:30 AM` },
        { label: "Event Span", value: `1 day`  },
      ],
    },
     {
          title: "Product showcase challenge",
          Speaker: "",
          imgSrc: "https://i.imgur.com/989R6rL.jpeg",
          description: ` The VCET Product Showcase, organized by the Microsoft Learn Student Club, was a successful platform for showcasing innovative, Microsoft-centric projects and enhancing the technical skills of students. By promoting teamwork, creativity, and mentorship, the event aligned with MLSC’s vision to empower students and prepare them for future career opportunities in the tech industry.`,
          info: [
            { label: "Organizing People", value: 8 },
            { label: "Participants", value: 171 },
            { label: "Date and Time", value: `20th Feb, 11:30 AM` },
            { label: "Event Span", value: `1 day`  },
          ],
        },
  ];

  return (
    <>
      <section className={`section | ${styles.event_section}`}>
        <h1 className='title'>Dive into the Tech Universe with us</h1>
        <div className={`flex_center | ${styles.event_container}`}>
          {eventsData.slice(0, count ? count : eventsData.length).map((event, index) => (
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
