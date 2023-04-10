import styles from './sidebar.module.css';
import image from '../assets/dashboard.png';
import image1 from '../assets/people.png';
import image2 from '../assets/question.png';
import image3 from '../assets/helpcenter.png';
import image4 from '../assets/speakernotes.png';
import image5 from '../assets/factcheck.png';

function Sidebar(){
    return(
    <div className={styles.main}>  
  <div className={styles.a}>      
    <img className={styles.img1} src={image} alt=""></img>
    <h6 className={styles.h1}>Dashboard</h6>
    </div>
    <br></br>
    <div className={styles.b}>
    <img className= {styles.img1} src={image1} alt=""></img>
    <h6 className={styles.h1}>User Management</h6>
    </div>
    <br></br>
  <div className={styles.a}>      
    <img className= {styles.img1} src={image2} alt=""></img>
    <h6 className={styles.h1}>Messages History</h6>
   </div>
     <br></br>  
  <div className={styles.a}>      
    <img className= {styles.img1} src={image3} alt=""></img>
    <h6 className={styles.h1}>Questions</h6>
    <div className={styles.c}>
    <h6 className={styles.h4}>16</h6>
    </div>
   </div> 
    <br></br>
  <div className={styles.a}>      
    <img className= {styles.img1} alt="" src={image4}></img>
    <h6 className={styles.h1}>Answers</h6>
    <div className={styles.c}>
    <h6 className={styles.h2}>16</h6>
    </div>
   </div>
    <br></br>
  <div className={styles.a}>      
    <img className= {styles.img1} src={image5} alt=""></img>
    <h6 className={styles.h1}>Abuse Reports</h6>
    <div className={styles.c}>
    <h6 className={styles.h3}>16</h6>
    </div>
   </div>
    </div>
    )
}
export default Sidebar;