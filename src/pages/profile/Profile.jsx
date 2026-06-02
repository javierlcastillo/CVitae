import React, { useState } from "react";
import styles from "./Profile.module.css";
import FilterBar from "./FilterBar";
import SearchBar from "@/components/layout/SearchBar";
import { SlidersHorizontal } from "lucide-react";
import MantenimeintoSkeleton from "@/components/ui/MantenimientoSkeleton.jsx";
import ProjectList from "./ProjectList";

import useProjects from "@/hooks/useProjects";

function Profile() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [query, setQuery] = useState('');
    const { filteredProjects, loading, error } = useProjects(activeFilter, query);
    const [filterOpen, setFilterOpen] = useState(false);
    const categorias = [{label: "All",value: "all"}, {label: "In Production", value: "production"}, {label: "Client Work", value: "client"}, {label: "Hackathon", value:"hackathon"}, {label: "Research", value:"research"}, {label:"Full-Stack", value: "full-stack"}, {label: "Back-end", value:"back-end"}, {label: "Product Owner", value: "productowner"}, {label: "AI/ML", value:"aiml"}];

    if (error || loading) {
        return (
            <MantenimeintoSkeleton/>
        )
    }
    return (
        <div className={styles.profilePage}>
            <div className={styles.header}>
                <div className={styles.searchAndFilter}>
                    <SearchBar query={query} onChange={(e) => setQuery(e.target.value)}>
                        <div className={styles.filterContainer}>
                            <button className={styles.activateFilter} onClick={() => setFilterOpen(!filterOpen)}>
                                <SlidersHorizontal size={20} color={"#24a085"}/>
                                Filter
                            </button>
                            {filterOpen && (
                                <div className={styles.filterDropDown}>
                                    {categorias.map((cat) => (
                                        <button
                                            key={cat.value}
                                            className={`${styles.dropDownItem} ${activeFilter === cat.value ? styles.activeItem : ""}`}
                                            onClick={() => {
                                                setActiveFilter(cat.value);
                                                setFilterOpen(false);
                                            }}
                                        >
                                            {cat.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </SearchBar>
                </div>
                <div className={styles.filterBar}>
                    <FilterBar categorias={categorias} activeFilter={activeFilter} onFilterChange={(value) => setActiveFilter(value)}/>
                </div>
            </div>
            <ProjectList projects={filteredProjects}/>
        </div>
    );
}   

export default Profile;