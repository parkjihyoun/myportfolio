import React from "react";
import ProfileImage from "../atoms/ProfileImage";
import NavLinks from "../molecules/NavLinks";
import styles from "./Header.module.css";

const Header = () => (
    <header className={styles.header}>
        <div className={styles.profileSection}>
            <ProfileImage src="profile.jpg" size={64} alt="프로필" />
            <div>
                <h1 className={styles.name}>박지현</h1>
                <p className={styles.slogan}> 풀스택 개발자를 목표로 성장 중인 개발자</p>
            </div>
        </div>
        <NavLinks />
    </header>
);

export default Header;
