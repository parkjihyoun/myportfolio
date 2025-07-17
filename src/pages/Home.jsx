import React from "react";
import MainLayout from "../components/templates/MainLayout";
import styles from "./Home.module.css";

const Home = () => (
    <MainLayout>
        <section className={styles.introSection}>
            <h2>안녕하세요! 👋</h2>
            <p>프론트엔드로 세상을 연결하는 개발자 <b>박지현</b>입니다.</p>
        </section>
        <section className={styles.toolsSection}>
            <h2>내가 좋아하는 도구 & 생산성 팁</h2>
            <ul>
                <li>VSCode: 다양한 확장 프로그램으로 개발 효율 UP!</li>
                <li>Notion: 프로젝트 관리와 아이디어 정리에 필수</li>
                <li>Figma: UI/UX 시안 빠르게 공유</li>
                <li>Slack: 팀원과의 실시간 소통</li>
            </ul>
            <p>
                <strong>생산성 팁:</strong> "작은 목표를 세우고, 매일 꾸준히 기록하며 성장합니다."
            </p>
        </section>
        <section className={styles.philosophySection}>
            <h2>나의 가치관 & 개발 철학</h2>
            <p>
                "사용자에게 진짜 도움이 되는 서비스를 만들고 싶습니다."<br />
                "협업과 소통을 통해 더 나은 결과를 추구하며, 항상 배우는 자세로 임합니다."
            </p>
        </section>
        <section className={styles.educationSection}>
            <h2>학력</h2>
            <ul>
                <li>경북대학교 2023학년도 입학</li>
            </ul>
        </section>
    </MainLayout>
);

export default Home;
