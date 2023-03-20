import styles from'./header.module.css';
import image from '../assets/Group 255.png';
import image2 from '../assets/Ellipse 38.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Header (){
    return(
    <div className={styles.body}>
        <div className={styles.header}>
        <img className={styles.img1} src={image}></img>
        <img className={styles.img2} src={image2}></img>
        <h className={styles.h1}>Julietta Craig</h>
        <ExpandMoreIcon className={styles.icon}/>
        </div>
    </div>
    )
}
export default Header;