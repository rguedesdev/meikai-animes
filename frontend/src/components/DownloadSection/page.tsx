"use client";

// Imports Principais
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import styles from "./download.module.css";

// Icones
import { BsDownload } from "react-icons/bs";
import { TiArrowSortedUp } from "react-icons/ti";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { PiCrownSimpleBold } from "react-icons/pi";

// Imagens
import downloadImage from "../../../public/enen_no_shoboutai.png";

function DownloadSection() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    const isPremium = false; // futuramente vem do usuário
    if (isPremium) {
      router.push("/temporada/1");
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <section>
      <h1 className={styles.downloadTitle}>Área de Download</h1>

      <div className={styles.downloadGrid}>
        <div className={styles.item}>
          <div className={styles.seasonCard} onClick={handleCardClick}>
            <div className={styles.imageWrapper}>
              <Image
                src={downloadImage}
                alt="Capa da 1ª temporada"
                fill
                className={styles.seasonImage}
                unoptimized
              />
            </div>

            <span className={styles.downloadIcon}>
              <BsDownload size={24} />
            </span>

            <div className={styles.moreInfo}>
              <span>
                <TiArrowSortedUp size={22} />
              </span>
              <p>mais informações</p>
            </div>
          </div>

          <h2 className={styles.seasonTitle}>1ª Temporada</h2>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h3>Conteúdo Exclusivo para Colaboradores</h3>
              <button className={styles.btnClose} onClick={closeModal}>
                <IoMdCloseCircleOutline size={25} />
              </button>
            </div>

            <p className={styles.modalMessage}>
              Somente os Animes em Exibição estão disponíveis para os usuários
              FREE. Os demais animes (Completos, Filmes e OVAs) são exclusivos
              para assinantes do Meikai Pass.
            </p>

            <h4 className={styles.modalBenefitsTitle}>
              Não conhece o Meikai Pass?
            </h4>

            <ul className={styles.modalBenefits}>
              <li className={styles.modalBenefitHighlight}>
                <PiCrownSimpleBold size={18} color="#FFD700" />
                <p>Baixe os animes em Exibição</p>
              </li>
              <li className={styles.modalBenefitHighlight}>
                <PiCrownSimpleBold size={18} color="#FFD700" />
                Crie listas personalizadas de Animes
                <p></p>
              </li>
              <li className={styles.modalBenefitHighlight}>
                <PiCrownSimpleBold size={18} color="#FFD700" />
                <p>Download liberado em todo site</p>
              </li>
              <li className={styles.modalBenefitHighlight}>
                <PiCrownSimpleBold size={18} color="#FFD700" />
                <p>Pedidos de Animes liberado</p>
              </li>
              <li className={styles.modalBenefitHighlight}>
                <PiCrownSimpleBold size={18} color="#FFD700" />
                <p>Assista online em diversos dispositivos</p>
              </li>
              <li className={styles.modalBenefitHighlight}>
                <PiCrownSimpleBold size={18} color="#FFD700" />
                <p>Bônus: Donghuas, Doramas e Live Actions online</p>
              </li>
            </ul>

            <button className={styles.btnMeikaiPass}>
              Conhecer o Meikai Pass
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export { DownloadSection };
