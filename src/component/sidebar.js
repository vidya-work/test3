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
    <img className={styles.img1} src={image}></img>
    <h className={styles.h1}>Dashboard</h>
    </div>
    <br></br>
    <div className={styles.b}>
    <img className= {styles.img1} src={image1}></img>
    <h className={styles.h1}>User Management</h>
    </div>
    <br></br>
  <div className={styles.a}>      
    <img className= {styles.img1} src={image2}></img>
    <h className={styles.h1}>Messages History</h>
   </div>
     <br></br>  
  <div className={styles.a}>      
    <img className= {styles.img1} src={image3}></img>
    <h className={styles.h1}>Questions</h>
    <div className={styles.c}>
    <h className={styles.h4}>16</h>
    </div>
   </div> 
    <br></br>
  <div className={styles.a}>      
    <img className= {styles.img1} src={image4}></img>
    <h className={styles.h1}>Answers</h>
    <div className={styles.c}>
    <h className={styles.h2}>16</h>
    </div>
   </div>
    <br></br>
  <div className={styles.a}>      
    <img className= {styles.img1} src={image5}></img>
    <h className={styles.h1}>Abuse Reports</h>
    <div className={styles.c}>
    <h className={styles.h3}>16</h>
    </div>
   </div>
    </div>
    )
}
export default Sidebar;