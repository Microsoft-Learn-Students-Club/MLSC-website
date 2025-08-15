import aboutImg from '../assets/about.jpg';
import styles from './About.module.css';
import ScrambledText from '../blocks/TextAnimations/ScrambledText/ScrambledText';
import TextType from '../blocks/TextAnimations/TextType/TextType';

const About = () => {
  return (
    <section className={`section | ${styles.about_section}`}>
      <h1 className={`title | ${styles.about_title}`}>
        <TextType text="A Hub of Tech Excellence and Collaboration" />
      </h1>
      <br />
      <div className={`flex_center | ${styles.about_content_container}`}>
        <ScrambledText className='md:text-sm text-xl font-bold m-2'
         radius={100} duration={1.2} speed={0.5} scrambleChars=".:"
        >
         Microsoft Learn Student Club, is a Technical Club which is dedicated to elevating the coding culture at Vidyavardhini College of Engineering and Technology by mentoring and motivating its members to refine their critical thinking, logical reasoning, and coding skills into making them unrivalled! We offer to spread technical knowledge about the current advancements through peer-to-peer learning strategy. We as a Club have like-minded individualists who encourage students to develop and volunteer in making open source projects, participate in various technical events and also conduct comprehensive seminars.
        </ScrambledText>
        <img src={aboutImg} alt='aboutImg' className={styles.aboutImg} />
      </div>
    </section>
  )
}

export default About