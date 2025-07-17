import React from "react";
import MainLayout from "../components/templates/MainLayout";
import ProjectCard from "../components/organisms/ProjectCard";
import SkillList from "../components/organisms/SkillList";
import { useProjectsStore } from "../store/projects";
import styles from "./Projects.module.css";

const skills = ["JavaScript", "React", "CSS", "Zustand", "Git", "Vite"];

const Projects = () => {
    const projects = useProjectsStore((state) => state.projects);

    return (
        <MainLayout>
            <section className={styles.representativeSection}>
                <h2>대표 프로젝트</h2>
                <div className={styles.projectList}>
                    {projects.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>
            </section>
            <section className={styles.skillsSection}>
                <h2>기술 스택</h2>
                <SkillList skills={skills} />
            </section>
        </MainLayout>
    );
};

export default Projects;
