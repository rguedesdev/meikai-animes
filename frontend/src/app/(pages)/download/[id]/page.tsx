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
import PikPak from "../../../../../public/pikpak-logo.png";
import Blomp from "../../../../../public/blomp.png";
import PCloud from "../../../../../public/pcloud.png";
import TeraBox from "../../../../../public/terabox.png";

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

            {/* <h3>Opções de Download</h3> */}

            <div className={styles.btnsDownload}>
              <a
                className={`${!enabled ? styles.disabled : styles.btnMediafire}`}
                href={enabled ? "https://mediafire.com/seu-link" : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiMediafire size={30} />
                <span>Mediafire</span>
              </a>

              <a
                className={`${!enabled ? styles.disabled : styles.btnMega}`}
                href={enabled ? "https://mega.io/seu-link" : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiMega size={20} />
                <span>Mega</span>
              </a>

              <a
                className={`${!enabled ? styles.disabled : styles.btnPikPak}`}
                href={enabled ? "https://mypikpak.com/seu-link" : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={PikPak}
                  alt="PikPak Logo"
                  width={20}
                  height={20}
                  unoptimized
                />
                <span>PikPak</span>
              </a>

              <a
                className={`${!enabled ? styles.disabled : styles.btnBlomp}`}
                href={enabled ? "https://mypikpak.com/seu-link" : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Blomp}
                  alt="Blomp Logo"
                  width={20}
                  height={20}
                  unoptimized
                />
                <span>Blomp</span>
              </a>

              <a
                className={`${!enabled ? styles.disabled : styles.btnPCloud}`}
                href={enabled ? "https://mypikpak.com/seu-link" : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={PCloud}
                  alt="pCloud Logo"
                  width={28}
                  height={28}
                  unoptimized
                />
                <span>pCloud</span>
              </a>

              <a
                className={`${!enabled ? styles.disabled : styles.btnTerabox}`}
                href={enabled ? "https://mypikpak.com/seu-link" : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={TeraBox}
                  alt="Terabox Logo"
                  width={28}
                  height={28}
                  unoptimized
                />
                <span>Terabox</span>
              </a>
            </div>

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
              )}
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
