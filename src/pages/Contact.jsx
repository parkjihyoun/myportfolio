import React from "react";
import MainLayout from "../components/templates/MainLayout";
import styles from "./Contact.module.css";

const Contact = () => (
    <MainLayout>
        <section className={styles.contactPage}>
            <h2>Contact</h2>
            <div className={styles.contactList}>
                <div className={styles.contactItem}>
                    <h3>Email</h3>
                    <a href="mailto:jihyoun2002@knu.ac.kr">jihyoun2002@knu.ac.kr</a>
                </div>
                <div className={styles.contactItem}>
                    <h3>Phone</h3>
                    <a href="tel:+82-10-9151-7780">+82-10-9151-7780</a>
                </div>
                <div className={styles.contactItem}>
                    <h3>GitHub</h3>
                    <a href="https://github.com/parkjihyoun" target="_blank" rel="noopener noreferrer">
                        github.com/parkjihyoun
                    </a>
                </div>
                <div className={styles.contactItem}>
                    <h3>Velog</h3>
                    <a href="https://velog.io/@parkjihyoun" target="_blank" rel="noopener noreferrer">
                        velog.io/@parkjihyoun
                    </a>
                </div>
            </div>
        </section>
    </MainLayout>
);

export default Contact; 