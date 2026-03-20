// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./anime.module.css";

// Componetes
import { AnimeHeader } from "@/components/AnimeHeader/page";
import { DownloadSection } from "@/components/DownloadSection/page";
import { RecommendedAnime } from "@/components/RecommendedAnime/page";

function AnimePage() {
  return (
    <div className={styles.page}>
      <main className={styles.animeContainer}>
        <AnimeHeader />
        <hr className={styles.hrFaded} />
        <DownloadSection />

        <RecommendedAnime />
      </main>
    </div>
  );
}

export default AnimePage;
