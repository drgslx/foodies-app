import React from "react";
import classes from "./main-header.module.css";
import logoImg from "../../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import HeaderBackground from "./header-background";


function MainHeader() {
  return (
    <>
    <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image  height={50} width={50} src={logoImg.src} alt="Logo" priority/>
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
