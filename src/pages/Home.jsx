import { useEffect } from 'react'
import Footer from "../layouts/Footer"
import { Link } from 'react-router-dom'
import globe from 'vanta/src/vanta.globe'
import styles from './Home.module.css'
import About from './About'
import Socials from './Socials'
import Gallery from './Gallery'

const Home = () => {

  useEffect(() => {
    globe({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 90.00,
      minWidth: 90.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x273ce8,
      backgroundColor: 0x190f29
    })
  })

  return (
    <>
      <div className={styles.home_container}>
        <div className={styles.bg} id='vanta'></div>
        <div className={styles.home_content}>
          <div className={styles.hero_title}>
            <h1>MLSC <span>VCET</span></h1>
            <p>for the love of coding and innovation</p>
          </div>
          <div className={styles.btn_container}>
            <Link to="/about" className={styles.btn}>About us<span>↗</span></Link>
          </div>
        </div>
      </div>
      <Socials />
      <About />
      <Gallery/>
      <Footer />
    </>
  )

}

export default Home