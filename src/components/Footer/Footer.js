import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.Footer}>
        <p>
            {
                new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "2-digit",
                day: "numeric"
            })
            }
        </p>
        </footer>
    )
}

export default Footer