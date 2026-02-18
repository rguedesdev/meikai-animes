// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./recentlyanime.module.css";

// Images
import Sousou from "../../../public/sousou.jpg";

function RecentlyAddedAnime() {
  return (
    <section className={styles.recentlyAddedAnime}>
      <div className={styles.recentlyAddedAnimeTitleContainer}>
        <h2 className={styles.recentlyAddedAnimeTitle}>
          ÚLTIMOS ANIMES ADICIONADOS
        </h2>
        <button className={styles.btnSeeAll}>Ver Todos</button>
      </div>
      <hr className={styles.recentlyAddedAnimeHr} />
      <div className={styles.cardsGrid}>
        <article className={styles.recentlyAddedAnimeCard}>
          <Image
            className={styles.recentlyAddedAnimePicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.animeOverlay}>
            <h3 className={styles.animeTitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>
        <article className={styles.recentlyAddedAnimeCard}>
          <Image
            className={styles.recentlyAddedAnimePicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.animeOverlay}>
            <h3 className={styles.animeTitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>

        <article className={styles.recentlyAddedAnimeCard}>
          <Image
            className={styles.recentlyAddedAnimePicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.animeOverlay}>
            <h3 className={styles.animeTitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>

        <article className={styles.recentlyAddedAnimeCard}>
          <Image
            className={styles.recentlyAddedAnimePicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.animeOverlay}>
            <h3 className={styles.animeTitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>

        <article className={styles.recentlyAddedAnimeCard}>
          <Image
            className={styles.recentlyAddedAnimePicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.animeOverlay}>
            <h3 className={styles.animeTitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>
      </div>
    </section>
  );
}

export { RecentlyAddedAnime };
