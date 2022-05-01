import React from 'react';
import styles from './mainPage.module.css';
import Note from './modules/eachNote';
import Header from './modules/header/header';
import CopyRight from './modules/footer/footer';

const MainPage = () => {
    return(
        <div className={styles.MainPage}>
            <Header />
            <Note />
            <CopyRight />
        </div>
    );
}
export default MainPage;