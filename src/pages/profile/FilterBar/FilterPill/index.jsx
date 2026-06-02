import styles from "./FilterPill.module.css"; 

function FilterPill( { label, isSelected, onClick}){
    return (
        <button 
            className={`${styles.filterPill} ${isSelected ? styles.active : ""}`}
            onClick={onClick}>
            {label}
        </button>
    )
}

export default FilterPill;