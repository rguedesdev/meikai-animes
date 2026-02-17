// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./featuredanime.module.css";

// Icons
import { FaPlus } from "react-icons/fa";

// Imagens
import TateNoYuushaWallpaper from "../../../public/tate-no-yuusha.jpg";
import TateNoYuushaLogo from "../../../public/tate-no-yuusha-logo.png";

function FeaturedAnime() {
  return (
    <section className={styles.featuredAnimeSection}>
      <div className={styles.featuredAnimeContainer}>
        <div className={styles.wallpaperWrapper}>
          <Image
            src={TateNoYuushaWallpaper}
            alt="Anime Wallpaper"
            width={1920}
            height={1080}
            unoptimized
          />
        </div>

        <div className={styles.animeInfoContainer}>
          <Image
            className={styles.animeLogo}
            alt="Anime Logo"
            src={TateNoYuushaLogo}
            width={713}
            height={447}
            unoptimized
          />
          <div className={styles.buttons}>
            <button className={styles.btn}>Página do Anime</button>
            <button className={styles.btn}>
              <FaPlus size={16} />
              <span>Minha Lista</span>
            </button>
          </div>
          <p className={styles.animeSynopsis}>
            Iwatani Naofumi é invocado para um mundo paralelo pra se tornar um
            dos quatro heróis lendários (espada, arco, lança e escudo). Ele é
            nomeado o Herói do escudo...
          </p>
        </div>
      </div>
    </section>
  );
}

export { FeaturedAnime };
