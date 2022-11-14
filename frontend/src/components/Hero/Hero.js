import skin1 from "../../image/skin1.jpg";
import skin2 from "../../image/skin2.jpg";
import body_butter from "../../image/body_butter.jpg";


import styles from "./Hero.module.css"

export default function Hero() {
    return (
        <div className={styles.hero_container}>
         
         <div>
             <img src={skin1} />
         </div>
         <div>
             <img src={body_butter} />
             <h2 className={styles.contasy}>My Body My Blog.</h2>
         </div>
         <div>
             <img src={skin2} />
         </div>
        </div>

        
    )
}