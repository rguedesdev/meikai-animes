// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./home.module.css";

// Componetes
import { EpisodeCard } from "@/components/EpisodeCard/page";

function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Seção principal / destaque */}
        {/* <section>
          <h1>Meikai Animes</h1>
          <p>Animes em exibição e lançamentos recentes</p>
        </section> */}

        {/* Animes em exibição */}
        <section className={styles.animesAiring}>
          <div className={styles.animesAiringTitleContainer}>
            <h2 className={styles.animesAiringTitle}>ANIMES EM EXIBIÇÃO</h2>
            <button className={styles.btnSeeAll}>Ver Todos</button>
          </div>

          <hr className={styles.animesAiringHr} />
          <div className="grid grid-cols-4 gap-4">
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
          </div>
        </section>

        {/* Lançamentos / Carrossel */}
        {/* <section>
          <h2>Lançamentos</h2>

          <div className="carousel">
            <article>
              <h3>Jujutsu Kaisen</h3>
              <Image src="#" alt="Jujutsu Kaisen" />
            </article>

            <article>
              <h3>Chainsaw Man</h3>
              <Image src="/chainsaw.jpg" alt="Chainsaw Man" />
            </article>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default Home;
