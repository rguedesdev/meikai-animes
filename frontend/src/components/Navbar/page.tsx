"use client";

// Imports Princiais
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.css";

// Icons
import { RiHome3Line } from "react-icons/ri";
// import { FaPlay } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiPencilCircle } from "react-icons/pi";

import { BsMouse } from "react-icons/bs";

// Imagens
import Banner from "../../../public/meikai_banner.png";

function Navbar() {
  const pathName = usePathname();

  return (
    <header>
      <nav className={styles.navbar}>
        <Image
          className={styles.banner}
          src={Banner}
          alt="Banner"
          width={1020}
          height={336}
          unoptimized
          priority
        />
        {/* <BsMouse size={35} color="#ffffff" /> */}
        <ul className={styles.navList}>
          <li className={``}>
            <Link
              className={
                pathName === "/" ? styles.navLinkActive : styles.navLink
              }
              href={`/`}
            >
              <RiHome3Line size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/animes" ? styles.navLinkActive : styles.navLink
              }
              href={`/animes`}
            >
              <IoPlay size={20} />
              <span>Animes</span>
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/pedidos" ? styles.navLinkActive : styles.navLink
              }
              href={`/pedidos`}
            >
              <PiPencilCircle size={20} />
              <span>Pedidos</span>
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/faq" ? styles.navLinkActive : styles.navLink
              }
              href={`/faq`}
            >
              <FaQuestion size={15} />
              <span>F.A.Q.</span>
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/staff" ? styles.navLinkActive : styles.navLink
              }
              href={`/staff`}
            >
              <MdOutlinePeopleAlt size={20} />
              <span>Staff</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Navbar };
