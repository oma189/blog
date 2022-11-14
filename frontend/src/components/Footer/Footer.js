import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Let me know what's on your mind</h1>
      </div>
      <div>
        <form>
          <div className={styles.details}>
            <label className={styles.box}>
              firstName:<br /><br />
              <input type="text" name="name" />
            </label> <br /><br />
            <label>
              lastName:<br /><br />
              <input type="text" name="name" />
            </label><br /><br />

          </div>
          <div className={styles.details}>
            <label>
              enter your email:<br /><br />
              <input type="email" name="email" />
            </label><br /><br />

            <textarea placeholder="  Leave a comment">

            </textarea> <br/><br/>

          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}