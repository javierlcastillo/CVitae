import { useState, useEffect, useMemo } from "react";
import projectsData from "./projects";

function useProjects(activeFilter, query) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        let active = true;

        setTimeout(() => {
            if (active) {
                setProjects(projectsData);
                setLoading(false);
            }
        }, 800);

        return () => { active = false; };
    }, []);

    const filteredProjects = useMemo(() => {
        return projects ? projects.filter((p) => {
            const matchesFilter = activeFilter === "all" || p.categories.includes(activeFilter);
            const matchesQuery = query === "" || p.title.toLowerCase().includes(query.toLowerCase());
            return matchesFilter && matchesQuery;
        }) : [];
    }, [projects, activeFilter, query]);

    return { filteredProjects, loading, error };
}

export default useProjects;