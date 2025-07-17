import React from "react";
import MainLayout from "../components/templates/MainLayout";
import AboutSection from "../components/organisms/AboutSection";
import styles from "./About.module.css";

const about = {
    intro: "UX와 AI에 강한 풀스택 개발자를 목표로 성장 중인 박지현입니다.",
    vision: "프론트엔드와 백엔드를 모두 이해하며, 사용자와 비즈니스 모두에 가치를 주는 개발자가 되고자 합니다.",
    records: [
        "멋쟁이사자처럼 12기 & 13기 프론트엔드",
        "2024 대구를 빛내는 해커톤 우수상",
        "2025 KERT 보안 CTF 우수상",
    ],
};

const About = () => (
    <MainLayout>
        <div className={styles.aboutPage}>
            <AboutSection {...about} />
        </div>
    </MainLayout>
);

export default About;
