import styles from '../../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p><span>PokeNext</span> &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer