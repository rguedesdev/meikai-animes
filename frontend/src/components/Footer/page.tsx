// Style Sheet CSS
import styles from "./footer.module.css";

// Icons
import { RiTwitterXLine } from "react-icons/ri";
import { RiTelegram2Line } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <h3 className={styles.footerCopyright}>
          Meikai Animes | Copyright © 2026 - Todos os direitos das obras são
          reservados proprietários (artistas, editoras, estúdios, etc).
        </h3>
        <div className={styles.socialMediasContainer}>
          <h4 className={styles.socialMediaTitle}>Mídias Sociais</h4>
          <div className={styles.icons}>
            <RiTwitterXLine size={25} />
            <RiTelegram2Line size={30} />
            <RiDiscordLine size={30} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
