import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => (
    <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
    </div>
);

export default MainLayout;
