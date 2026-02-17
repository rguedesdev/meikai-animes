// Imports Princiais
import Image from "next/image";

// Style Sheet CSS
import styles from "./meikaipass.module.css";

// Imagens
import Devices from "../../../public/devices.png";
import MeikaiAnimesLogo from "../../../public/meikai-animes-logo.png";

function MeikaiPass() {
  return (
    <section className={styles.meikaiPassSection}>
      <div className={styles.meikaiPassContainer}>
        <div className={styles.meikaiPassCard}>
          <Image
            className={styles.meikaiLogo}
            src={MeikaiAnimesLogo}
            alt="Meikai Animes Logo"
            width={1282}
            height={405}
            unoptimized
          />
          <div className={styles.meikaiPassTexts}>
            <h2 className={styles.meikaiPassTitle}>ASSINE O MEIKAI PASS!</h2>
            <p>
              Desbloqueie todo o conteúdo do site e baixe ou assista nossos
              animes em qualquer dispositivo e em qualidade Full HD. Conheça o
              Meikai Pass.
            </p>
          </div>
          <button className={styles.btnLearnMore}>Saiba Mais!</button>
        </div>

        <div>
          <h2 className={styles.devicesTitle}>DISPONÍVEL EM:</h2>
          <Image
            className={styles.devicesPicture}
            src={Devices}
            alt="Devices Picture"
            width={1440}
            height={60}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

export { MeikaiPass };
