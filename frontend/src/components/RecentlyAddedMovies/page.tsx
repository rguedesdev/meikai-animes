// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./recentlymovies.module.css";

// Images
import Sousou from "../../../public/sousou.jpg";

function RecentlyAddedMovies() {
  return (
    <section className={styles.recentlyAddedMovies}>
      <div className={styles.recentlyAddedMoviesTitleContainer}>
        <h2 className={styles.recentlyAddedMoviesTitle}>
          ÚLTIMOS FILMES ADICIONADOS
        </h2>
        <button className={styles.btnSeeAll}>Ver Todos</button>
      </div>
      <hr className={styles.recentlyAddedMoviesHr} />
      <div className="grid grid-cols-5 gap-5">
        <article className={styles.recentlyAddedMoviesCard}>
          <Image
            className={styles.recentlyAddedMoviesPicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.MoviesOverlay}>
            <h3 className={styles.MoviesTitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>
        <article className={styles.recentlyAddedMoviesCard}>
          <Image
            className={styles.recentlyAddedMoviesPicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.MoviesOverlay}>
            <h3 className={styles.MoviesTitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>

        <article className={styles.recentlyAddedMoviesCard}>
          <Image
            className={styles.recentlyAddedMoviesPicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.MoviesOverlay}>
            <h3 className={styles.MoviesTitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>

        <article className={styles.recentlyAddedMoviesCard}>
          <Image
            className={styles.recentlyAddedMoviesPicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.MoviesOverlay}>
            <h3 className={styles.MoviesTitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>

        <article className={styles.recentlyAddedMoviesCard}>
          <Image
            className={styles.recentlyAddedMoviesPicture}
            src={Sousou}
            alt="Anime Cover"
            fill
            priority
          />

          <div className={styles.MoviesOverlay}>
            <h3 className={styles.MoviesTitle}>Sousou no Frieren 2nd Season</h3>
          </div>
        </article>
      </div>
    </section>
  );
}

export { RecentlyAddedMovies };
