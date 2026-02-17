// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./recentlyova.module.css";

// Images
import Sousou from "../../../public/sousou.jpg";

function RecentlyAddedOVA() {
  return (
    <section className={styles.recentlyAddedOVA}>
      <div className={styles.recentlyAddedOVATitleContainer}>
        <h2 className={styles.recentlyAddedOVATitle}>
          ÚLTIMOS OVAs ADICIONADOS
        </h2>
        <button className={styles.btnSeeAll}>Ver Todos</button>
      </div>
      <hr className={styles.recentlyAddedOVAHr} />
      <div className="grid grid-cols-5 gap-5">
        <article className={styles.recentlyAddedOVACard}>
          <Image
            className={styles.recentlyAddedOVAPicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.OVAOverlay}>
            <h3 className={styles.OVATitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>
        <article className={styles.recentlyAddedOVACard}>
          <Image
            className={styles.recentlyAddedOVAPicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.OVAOverlay}>
            <h3 className={styles.OVATitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>

        <article className={styles.recentlyAddedOVACard}>
          <Image
            className={styles.recentlyAddedOVAPicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.OVAOverlay}>
            <h3 className={styles.OVATitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>

        <article className={styles.recentlyAddedOVACard}>
          <Image
            className={styles.recentlyAddedOVAPicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.OVAOverlay}>
            <h3 className={styles.OVATitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>

        <article className={styles.recentlyAddedOVACard}>
          <Image
            className={styles.recentlyAddedOVAPicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.OVAOverlay}>
            <h3 className={styles.OVATitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>
      </div>
    </section>
  );
}

export { RecentlyAddedOVA };
