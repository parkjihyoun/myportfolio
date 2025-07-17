import React from "react";
import Tag from "../atoms/Tag";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ image, title, description, techStack = [], link }) => {
    const imageSrc = image.startsWith("/") ? image : `/${image}`;
    return (
        <div className={styles.card}>
            <img src={imageSrc} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.tags}>
                    {techStack.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                    ))}
                </div>
                {link && (
                    <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">
                        프로젝트 보러가기
                    </a>
                )}

            </div>
        </div>
    );
};

export default ProjectCard;
