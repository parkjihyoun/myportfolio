import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavLinks.module.css";

const navItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
];

const NavLinks = () => {
    const location = useLocation();
    return (
        <nav className={styles.navlinks}>
            {navItems.map((item) =>
                item.external ? (
                    <a
                        key={item.label}
                        href={item.to}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.label}
                    </a>
                ) : (
                    <Link
                        key={item.label}
                        to={item.to}
                        className={`${styles.link} ${location.pathname === item.to ? styles.active : ""}`}
                    >
                        {item.label}
                    </Link>
                )
            )}
        </nav>
    );
};

export default NavLinks;
