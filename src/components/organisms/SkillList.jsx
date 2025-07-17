import React from "react";
import Tag from "../atoms/Tag";
import styles from "./SkillList.module.css";

const SkillList = ({ skills = [] }) => (
    <div className={styles.skillList}>
        {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
        ))}
    </div>
);

export default SkillList;
