// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./recommended.module.css";

// Images
import Sousou from "../../../public/sousou.jpg";

function RecommendedAnime() {
  return (
    <section className={styles.recommendedAnime}>
      <div className={styles.recommendedAnimeTitleContainer}>
        <h2 className={styles.recommendedAnimeTitle}>Animes Recomendados</h2>
        <button className={styles.btnSeeAll}>Ver Todos</button>
      </div>

      <hr className={styles.recommendedAnimeHr} />

      <div className={styles.cardsGrid}>
        <article className={styles.recommendedAnimeCard}>
          <Image
            className={styles.recommendedAnimePicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.recommendedAnimeOverlay}>
            <h3 className={styles.recommendedAnimeTitle}>
              Sousou no Frieren 2nd Season
            </h3>
          </div>
        </article>

        <article className={styles.recommendedAnimeCard}>
          <Image
            className={styles.recommendedAnimePicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.recommendedAnimeOverlay}>
            <h3 className={styles.recommendedAnimeTitle}>
              Sousou no Frieren 2nd Season
            </h3>
          </div>
        </article>

        <article className={styles.recommendedAnimeCard}>
          <Image
            className={styles.recommendedAnimePicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.recommendedAnimeOverlay}>
            <h3 className={styles.recommendedAnimeTitle}>
              Sousou no Frieren 2nd Season
            </h3>
          </div>
        </article>

        <article className={styles.recommendedAnimeCard}>
          <Image
            className={styles.recommendedAnimePicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.recommendedAnimeOverlay}>
            <h3 className={styles.recommendedAnimeTitle}>
              Sousou no Frieren 2nd Season
            </h3>
          </div>
        </article>

        <article className={styles.recommendedAnimeCard}>
          <Image
            className={styles.recommendedAnimePicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.recommendedAnimeOverlay}>
            <h3 className={styles.recommendedAnimeTitle}>
              Sousou no Frieren 2nd Season
            </h3>
          </div>
        </article>
      </div>
    </section>
  );
}

export { RecommendedAnime };
