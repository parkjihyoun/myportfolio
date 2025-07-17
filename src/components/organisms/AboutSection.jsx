import React from "react";
import styles from "./AboutSection.module.css";

const AboutSection = ({ intro, vision, records = [] }) => (
    <section className={styles.aboutSection}>
        <h2>About Me</h2>
        <p className={styles.intro}>{intro}</p>
        <h3>Vision</h3>
        <p className={styles.vision}>{vision}</p>
        {records.length > 0 && (
            <div className={styles.records}>
                <h4>동아리 · 대회 · 수상 기록</h4>
                <ul>
                    {records.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                    ))}
                </ul>
            </div>
        )}
    </section>
);

export default AboutSection;
