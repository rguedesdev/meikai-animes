// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./home.module.css";

// Componetes
import { EpisodeCard } from "@/components/EpisodeCard/page";
import { RecentlyAddedAnime } from "@/components/RecentlyAddedAnime/page";
import { RecentlyAddedOVA } from "@/components/RecentlyAddedOVA/page";
import { RecentlyAddedMovies } from "@/components/RecentlyAddedMovies/page";
import { MeikaiPass } from "@/components/MeikaiPass/page";
import { FeaturedAnime } from "@/components/FeaturedAnime/page";

function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        {/* Alert Informativo */}
        <div role="status" className={styles.alert}>
          Ainda estamos fazendo algumas alterações no site e podem ocorrer
          alguns bugs durante a navegação. Prometo que não é nada que atrapalhe
          na usabilidade ❤
        </div>

        {/* Animes em exibição */}
        <EpisodeCard />

        {/* Últimos Animes Adicionados */}
        <RecentlyAddedAnime />

        {/* Últimos OVAs Adicionados */}
        <RecentlyAddedOVA />

        {/* Últimos Filmes Adicionados */}
        <RecentlyAddedMovies />

        {/* Anime em Destaque */}
        <FeaturedAnime />

        {/* Serviço Premium - Meikai Pass */}
        <MeikaiPass />
      </main>
    </div>
  );
}

export default Home;
