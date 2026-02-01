// Imports Princiais
import Image from "next/image";

import styles from "./navbar.module.css";

// Icons
import { RiHome3Line } from "react-icons/ri";
// import { FaPlay } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";

// Imagens
import Banner from "../../../public/meikai_banner.png";

function Navbar() {
  return (
    <nav>
      <Image src={Banner} alt="Banner" width={1100} />
      <ul className="flex flex-row gap-2">
        <li className={styles.navLink}>
          <RiHome3Line size={20} />
          <span>Home</span>
        </li>
        <li className={styles.navLink}>
          <IoPlay size={20} />
          <span>Animes</span>
        </li>
        <li className={styles.navLink}>
          <span>Pedidos</span>
        </li>
        <li className={styles.navLink}>
          <span>F.A.Q.</span>
        </li>
        <li className={styles.navLink}>
          <span>Staff</span>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
