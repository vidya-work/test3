import styles from'./header.module.css';
import image from '../assets/Group 255.png';
import image2 from '../assets/Ellipse 38.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Header (){
    return(
    <div className={styles.body}>
        <div className={styles.header}>
        <img className={styles.img1} src={image} alt=""></img>
        <img className={styles.img2} src={image2} alt=""></img>
        <h6 className={styles.h2}>Julietta Craig</h6>
        <ExpandMoreIcon className={styles.icon}/>
        </div>
    </div>
    )
}
export default Header;