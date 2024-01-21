import styles from './Leaderboard.module.css'
import img from '../assets/mlsclogo.png'
import teamData from "../utils/data.json";
import Card from "../components/Card";

const Leaderboard = () => {

  const first = { name: "Adarsh Gupta", team: "Dev", rank: "1" }
  const second = { name: "Mukesh Billa", team: "Dev", rank: "2" }
  const third = { name: "Manav Lade", team: "Dev", rank: "3" }
  const forth = { name: "Karan Gandhi", team: "Dev", rank: "4" }
  const fifth = { name: "Rishabh Tripathi", team: "lead", rank: "5" }
  const sixth = { name: "Sanika Patil", team: "lead", rank: "6" }
  const seventh = { name: "Aditya Trivedi", team: "lead", rank: "7" }
  const eight = { name: "Hrushikesh Shetty", team: "lead", rank: "8" }
  const nineth = { name: "Om Achrekar", team: "lead", rank: "9" }
  const tenth = { name: "Karan Patra", team: "lead", rank: "10" }




  const rendertable = (section, memberName, Rank) => {
    return (
      teamData[section]?.filter(member => member.name === memberName).map((member, index) => (
        <>
          <div>
            <img src={member.imgSrc} alt={member.name} className={styles.indi_img} />
          </div>
          <div className={styles.table_info}>
            <p className={styles.table_name}>{member.name}</p>
            <p className={styles.table_team}>{member.role}</p>
          </div>
          <p className={styles.table_rank}>{Rank} </p>

        </>
      )) || []
    );
  };

  const rendertop1 = (section, memberName, Rank) => {
    return (
      teamData[section]?.filter(member => member.name === memberName).map((member, index) => (
        <>
          <img className={styles.topimg_1} id='img1' src={member.imgSrc} alt="" />
          <div className={styles.toprank}>
            {/* <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill='#ffffff' d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" /></svg> */}
            <img width="100" height="100" src="https://img.icons8.com/plasticine/100/000000/gold-medal.png" alt="gold-medal"/>          
          </div>
          {/* <div className={styles.rank} style={ {background: 'rgb(175, 175, 44)'}}><p>1</p></div> */}
          <div className={styles.topdetails}>
            <p className={styles.topname}>{member.name}</p>
            <p className={styles.toprankdetail}>{Rank}</p>
            <p className={styles.topteamposition}>{member.role}</p>
          </div>
        </>
      )) || []
    );
  };
  const rendertop2 = (section, memberName, Rank) => {
    return (
      teamData[section]?.filter(member => member.name === memberName).map((member, index) => (
        <>
          <img className={styles.topimg_2} src={member.imgSrc} alt="" />
          <p className={styles.toprank} style={{ background: 'blue' }}>
            <img src="data:image/png;base64,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"></img>
            </p>
          <div className={styles.topdetails}>
            <p className={styles.topname}>{member.name}</p>
            <p className={styles.toprankdetail}>{Rank}</p>
            <p className={styles.topteamposition}>{member.role}</p>
          </div>
        </>
      )) || []
    );
  };
  const rendertop3 = (section, memberName, Rank) => {
    return (
      teamData[section]?.filter(member => member.name === memberName).map((member, index) => (
        <>
          <img className={styles.topimg_3} src={member.imgSrc} alt="" />
          <p className={styles.toprank} style={{ background: 'green' }}>
          <img width="100" height="100" src="https://img.icons8.com/plasticine/100/000000/gold-medal.png" alt="gold-medal"/>
          </p>
          <div className={styles.topdetails}>
            <p className={styles.topname}>{member.name}</p>
            <p className={styles.toprankdetail}>{Rank}</p>
            <p className={styles.topteamposition}>{member.role}</p>
          </div>
        </>
      )) || []
    );
  };

  return (
    <div className={styles.leaderboard_section}>
      {/* <h1 className={`title`}>Revealing Soon</h1> */}
      <section className={styles.top3}>
        <div className={styles.topimage_container} id='rank-2'>
          {rendertop2(second.team, second.name, second.rank)}
        </div>
        <div className={styles.topimage_container} id='rank-1'>
          {rendertop1(first.team, first.name, first.rank)}
        </div>
        <div className={styles.topimage_container} id='rank-3'>
          {rendertop3(third.team, third.name, third.rank)}
        </div>
      </section>
      <div className={styles.leaderboard_table}>
        <div className={styles.first}>
          {rendertable(forth.team, forth.name, forth.rank)}
        </div>
        <div className={styles.individual}>
          {rendertable(fifth.team, fifth.name, fifth.rank)}
        </div>
        <div className={styles.individual}>
          {rendertable(sixth.team, sixth.name, sixth.rank)}
        </div>
        <div className={styles.individual}>
          {rendertable(seventh.team, seventh.name, seventh.rank)}
        </div>
        <div className={styles.individual}>
          {rendertable(eight.team, eight.name, eight.rank)}
        </div>
        <div className={styles.individual}>
          {rendertable(nineth.team, nineth.name, nineth.rank)}
        </div>
        <div className={styles.last}>
          {rendertable(tenth.team, tenth.name, tenth.rank)}
        </div>
      </div>
    </div>
  )
}

export default Leaderboard