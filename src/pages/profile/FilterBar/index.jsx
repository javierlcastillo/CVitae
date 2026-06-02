import { useState } from "react";
import styles from "./FilterBar.module.css";
import FilterPill from "./FilterPill";

function FilterBar({categorias, activeFilter, onFilterChange}){

    return (
        <div className={styles.filterBar}>
            {categorias.map((cat) => {return(
                <FilterPill key={cat.value} label={cat.label} isSelected={cat.value === activeFilter} onClick={() => onFilterChange(cat.value)}/>
            )}
         )}
        </div>
    );
}

export default FilterBar;