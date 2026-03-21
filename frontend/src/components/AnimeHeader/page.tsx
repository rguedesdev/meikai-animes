// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./animeheader.module.css";

// Icones
import { LuAudioLines } from "react-icons/lu";

import { PiSubtitles } from "react-icons/pi";
import { PiSubtitlesBold } from "react-icons/pi";

// Imagens
import Frieren from "../../../public/sousou.jpg";

function AnimeHeader() {
  return (
    <section className={styles.animeSection}>
      <div className={styles.animeImageWrapper}>
        <Image
          className={styles.animeImage}
          src={Frieren}
          alt="Anime Picture"
          fill
          unoptimized
          priority
        />
      </div>
      <div className={styles.animeInfo}>
        <h1 className={styles.animeTitle}>Sousou no Frieren</h1>
        <p className={styles.description}>
          Durante a busca de uma década para derrotar o Rei Demônio, os membros
          do grupo do herói — o próprio Himmel, o sacerdote Heiter, o guerreiro
          anão Eisen e a maga elfa Frieren — forjam laços através de aventuras e
          batalhas, criando memórias preciosas e inesquecíveis para quase todos
          eles. No entanto, o tempo que Frieren passa com seus companheiros
          equivale a apenas uma fração de sua vida, que já dura mais de mil
          anos. Quando o grupo se desfaz após a vitória, Frieren retorna
          naturalmente à sua rotina de coletar feitiços pelo continente.No
          entanto, o tempo que Frieren passa com seus companheiros equivale a
          apenas uma fração de.
        </p>
        <div className={styles.audioInfo}>
          <LuAudioLines className={styles.audioIcon} size={20} />
          <span className={styles.audioText}>
            Audio: Japonês | Português Brasileiro
          </span>
        </div>
        <div className={styles.subtitleInfo}>
          <PiSubtitles className={styles.subtitleIcon} size={20} />
          <span className={styles.subtitleText}>
            Legenda: Português Brasileiro
          </span>
        </div>
        <div className={styles.animeTags}>
          <span className={styles.animeTag}>Comédia</span>
          <span className={styles.animeTag}>Romance</span>
          <span className={styles.animeTag}>Fantasia</span>
        </div>
        <div className={styles.animeStats}>
          <span className={styles.statItem}>MAL 7.6</span>
          <span className={styles.statItem}>AL 8.6</span>
          <span className={styles.statItem}>2005</span>
          <span className={styles.statItem}>Em exibição</span>
        </div>
      </div>
    </section>
  );
}

export { AnimeHeader };
