// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./epicard.module.css";

// Images
import EnEnShoboutai from "../../../public/enen_no_shoboutai.png";

function EpisodeCard() {
  return (
    <section className={styles.animesAiring}>
      <div className={styles.animesAiringTitleContainer}>
        <h2 className={styles.animesAiringTitle}>ANIMES EM EXIBIÇÃO</h2>
        <button className={styles.btnSeeAll}>Ver Todos</button>
      </div>

      <hr className={styles.animesAiringHr} />
      <div className="grid grid-cols-4 gap-4">
        <article className={styles.epiCard}>
          <Image
            className={styles.epiBg}
            src={EnEnShoboutai}
            alt="En En no Shoboutai"
            fill
            priority
          />

          <div className={styles.epiOverlay}>
            <h3 className={styles.epiTitle}>En En no Shouboutai Season 2</h3>
            <span className={styles.epiTexts}>EP: 01</span>
          </div>
        </article>

        <article className={styles.epiCard}>
          <Image
            className={styles.epiBg}
            src={EnEnShoboutai}
            alt="En En no Shoboutai"
            fill
            priority
          />

          <div className={styles.epiOverlay}>
            <h3 className={styles.epiTitle}>En En no Shouboutai Season 2</h3>
            <span className={styles.epiTexts}>EP: 01</span>
          </div>
        </article>

        <article className={styles.epiCard}>
          <Image
            className={styles.epiBg}
            src={EnEnShoboutai}
            alt="En En no Shoboutai"
            fill
            priority
          />

          <div className={styles.epiOverlay}>
            <h3 className={styles.epiTitle}>En En no Shouboutai Season 2</h3>
            <span className={styles.epiTexts}>EP: 01</span>
          </div>
        </article>

        <article className={styles.epiCard}>
          <Image
            className={styles.epiBg}
            src={EnEnShoboutai}
            alt="En En no Shoboutai"
            fill
            priority
          />

          <div className={styles.epiOverlay}>
            <h3 className={styles.epiTitle}>En En no Shouboutai Season 2</h3>
            <span className={styles.epiTexts}>EP: 01</span>
          </div>
        </article>

        <article className={styles.epiCard}>
          <Image
            className={styles.epiBg}
            src={EnEnShoboutai}
            alt="En En no Shoboutai"
            fill
            priority
          />

          <div className={styles.epiOverlay}>
            <h3 className={styles.epiTitle}>En En no Shouboutai Season 2</h3>
            <span className={styles.epiTexts}>EP: 01</span>
          </div>
        </article>

        <article className={styles.epiCard}>
          <Image
            className={styles.epiBg}
            src={EnEnShoboutai}
            alt="En En no Shoboutai"
            fill
            priority
          />

          <div className={styles.epiOverlay}>
            <h3 className={styles.epiTitle}>En En no Shouboutai Season 2</h3>
            <span className={styles.epiTexts}>EP: 01</span>
          </div>
        </article>

        <article className={styles.epiCard}>
          <Image
            className={styles.epiBg}
            src={EnEnShoboutai}
            alt="En En no Shoboutai"
            fill
            priority
          />

          <div className={styles.epiOverlay}>
            <h3 className={styles.epiTitle}>En En no Shouboutai Season 2</h3>
            <span className={styles.epiTexts}>EP: 01</span>
          </div>
        </article>

        <article className={styles.epiCard}>
          <Image
            className={styles.epiBg}
            src={EnEnShoboutai}
            alt="En En no Shoboutai"
            fill
            priority
          />

          <div className={styles.epiOverlay}>
            <h3 className={styles.epiTitle}>En En no Shouboutai Season 2</h3>
            <span className={styles.epiTexts}>EP: 01</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export { EpisodeCard };
