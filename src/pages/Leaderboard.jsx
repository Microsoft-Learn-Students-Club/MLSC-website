import styles from './Leaderboard.module.css'
import teamData from "../utils/data.json";

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

  const rendertop1 = (section, memberName) => {
    return (
      teamData[section]?.filter(member => member.name === memberName).map((member) => (
        <>
          <div className={styles.topdetails}>
            <div>
              <img className={styles.topimg_1} id='img1' src={member.imgSrc} alt="" />
            </div>
            <div className={styles.toprank} style={{
              background: 'radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)',
            }}>
              <div className={styles.number}>1 <p className={styles.tag}>st</p> </div>
            </div>
            <p className={styles.topname}>{member.name}</p>
            <p className={styles.topteamposition}>{member.role}</p>
          </div>
        </>
      )) || []
    );
  };

  const rendertop2 = (section, memberName) => {
    return (
      teamData[section]?.filter(member => member.name === memberName).map((member) => (
        <>
          <div className={styles.topdetails}>
            <div>
              <img className={styles.topimg_2} src={member.imgSrc} alt="" />
            </div>
            <p className={styles.toprank} style={{
              background: 'linear-gradient(300deg, #2d3436 0%, #d3d3d3 85%)'
            }}>
              <p className={styles.number}>2 <p className={styles.tag}>nd</p></p>
            </p>
            <p className={styles.topname}>{member.name}</p>
            <p className={styles.topteamposition}>{member.role}</p>
          </div>
        </>
      )) || []
    );
  };

  const rendertop3 = (section, memberName) => {
    return (
      teamData[section]?.filter(member => member.name === memberName).map((member) => (
        <>
          <div className={styles.topdetails}>
            <div>
              <img className={styles.topimg_3} src={member.imgSrc} alt="" />
            </div>
            <p className={styles.toprank} style={{
              background: 'radial-gradient(ellipse farthest-corner at right bottom, #8C7853 0%, #7C6E4E 8%, #6C6448 20%, #5C5A43 10%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)',
            }}>
              <p className={styles.number}>3 <p className={styles.tag}>rd</p></p>
            </p>
            <p className={styles.topname}>{member.name}</p>
            <p className={styles.topteamposition}>{member.role}</p>
          </div>
        </>
      )) || []
    );
  };

  const rendertable = (section, memberName, Rank) => {
    return (
      teamData[section]?.filter(member => member.name === memberName).map((member) => (
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

  return (
    <div className={styles.leaderboard_section}>

      <p className={styles.performer}>Achievers of the Month</p>
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
        <p className={styles.mention}>Notable Mentions</p>
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