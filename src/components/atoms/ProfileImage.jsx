import React from "react";
import styles from "./ProfileImage.module.css";

const ProfileImage = ({ src, alt = "Profile", size = 80 }) => {
    const imageSrc = src.startsWith("/") ? src : `/${src}`;
    return (
        <img
            className={styles.profileImage}
            src={imageSrc}
            alt={alt}
            width={size}
            height={size}
            style={{ borderRadius: "50%", objectFit: "cover" }}
        />
    );
};

export default ProfileImage;
