import styles from "./SearchBar.module.css";

function SearchBar({query, onChange, children } ) {
    return (
        <div className={styles.searchBar}>        
            <input 
                className={styles.searchInput} 
                placeholder="Search projects..."
                type="search"
                value={query}
                onChange={onChange}
                />
                {children}
            </div>    
        );
}

export default SearchBar;