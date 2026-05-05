"use client";

// Imports Principais
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Style Sheet CSS
import styles from "./download.module.css";

// Icons
import { SiMediafire } from "react-icons/si";
import { SiMega } from "react-icons/si";

// Imagens
import Frieren from "../../../../../public/sousou.jpg";

function DownloadPage() {
  const [timeLeft, setTimeLeft] = useState(15);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setEnabled(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className={styles.page}>
      <main className={styles.pageContainer}>
        <div className={styles.topAdvertising}>
          <p>Top Advertising</p>
        </div>
        <div className={styles.downloadCard}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.imageCover}
              src={Frieren}
              alt="Anime Cover"
              width={200}
              height={300}
              unoptimized
              priority
            />
          </div>
          <div>
            <h2 className={styles.episodeTitle}>
              Sousou no Frieren - Episódio XXX
            </h2>

            <div className={styles.countdownWrapper}>
              {!enabled ? (
                <>
                  <p className={styles.countdownText}>
                    Aguarde {timeLeft}s para liberar o download
                  </p>

                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${(timeLeft / 15) * 100}%` }}
                    />
                  </div>
                </>
              ) : (
                <></>
                // <p className={styles.readyText}>Download liberado 🚀</p>
              )}
            </div>

            {/* <h3>Opções de Download</h3> */}

            <div className={styles.btnsDownload}>
              {/* <button className={styles.btnMediafire} disabled={!enabled}>
                <SiMediafire size={30} />
                <span>Mediafire</span>
              </button> */}

              <a
                className={`${styles.btnMediafire} ${!enabled ? styles.disabled : ""}`}
                href={enabled ? "https://mediafire.com/seu-link" : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiMediafire size={30} />
                <span>{enabled ? "Mediafire" : `Aguarde ${timeLeft}s`}</span>
              </a>

              <a
                className={`${styles.btnMega} ${!enabled ? styles.disabled : ""}`}
                href={enabled ? "https://mega.io/seu-link" : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiMediafire size={30} />
                <span>{enabled ? "Mega" : `Aguarde ${timeLeft}s`}</span>
              </a>

              {/* <button className={styles.btnMega} disabled={!enabled}>
                <SiMega size={20} />
                <span>Mega</span>
              </button> */}
            </div>
          </div>
        </div>
        <div className={styles.centralAdvertising}>
          <div className={styles.centralAdItem}>
            <p>Central Advertising</p>
          </div>
          <div className={styles.centralAdItem}>
            <p>Central Advertising</p>
          </div>
        </div>
        <div className={styles.bottomAdvertising}>
          <p>Bottom Advertising</p>
        </div>
      </main>
    </div>
  );
}

export default DownloadPage;
