import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.container}>
            <h1>Oma'sCare</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <div className={styles.btn}>
                <button>Sign in</button>
                <button>Sign Up</button>
            </div>
        </div>


    )
}