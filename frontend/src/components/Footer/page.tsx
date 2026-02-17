// Style Sheet CSS
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <h3 className={styles.footerCopyright}>
          Meikai Animes | Copyright © 2022
        </h3>
        <div>Mídias Sociais</div>
      </div>
    </footer>
  );
}

export { Footer };
