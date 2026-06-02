// src/pages/profile/ProjectList/ProjectList.jsx
import styles from "./ProjectList.module.css";

function ProjectList({ projects }) {
    return (
        <div className={styles.projectList}>
            {projects.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className={styles.categories}>
                        {project.categories.map((cat) => (
                            <span key={cat}>{cat}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;