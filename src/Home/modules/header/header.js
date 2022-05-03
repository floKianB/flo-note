import React from 'react';
import styles from './header.module.css';

const Header = () => {

    return(
        <header className={styles.header}>
            <h1 className={styles.titleName}>Flo Notes</h1>
            <div className={styles.add}>
            </div>
        </header>
    );
}

export default Header;