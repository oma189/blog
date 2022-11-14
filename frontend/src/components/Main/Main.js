import styles from "./Main.module.css"
import grow from "../../image/grow.jpg";
import body_butter from "../../image/body_butter.jpg";
import black from "../../image/black.jpg";
import therapy from "../../image/therapy.jpg";
import skin_wax from "../../image/skin_wax.jpg";
import skin1 from "../../image/skin1.jpg";
import oil from "../../image/oil.avif";
import viva from "../../image/viva.jpg"
import skin2 from "../../image/skin2.jpg"
import toa from "../../image/toa.jpg"


export default function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.firstdiv}>
                <div className={styles.inner_div}>
                    <img src={grow} />
                    <p>Grow your shinny skin with rich oil papaya that nourishes your body to your satisfaction.</p>
                </div>
                <div className={styles.inner_div}>
                    <img src={body_butter} />
                    <p>Grow your shinny skin with rich oil papaya that nourishes your body to your satisfaction.</p>
                </div>
                <div className={styles.inner_div}>
                    <img src={grow} />
                    <p>Grow your shinny skin with rich oil papaya that nourishes your body to your satisfaction.</p>
                </div>
                <div className={styles.inner_div}>
                    <img src={grow} />
                    <p>Grow your shinny skin with rich oil papaya that nourishes your body to your satisfaction.</p>
                </div>
                <button>See all post</button>
            </div>
            <div className={styles.gallary}>
                <div>
                    <img src={oil} />
                </div>
                <div>
                    <img src={therapy} />
                </div>
                <div>
                    <img src={skin1} />
                </div>
                <div>
                    <img src={skin2} />
                </div>
                <div>
                    <img src={skin_wax} />
                </div>
                <div>
                    <img src={black} />
                </div>
                <div>
                    <img src={black} />
                </div>
                <div>
                    <img src={oil} />
                </div>
                <div>
                    <img src={viva} />
                </div>
                <div>
                    <img src={toa} />
                </div>
                <button>Leave a comment</button>
            </div>
        </div>
    )
}