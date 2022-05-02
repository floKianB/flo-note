import React from 'react';
import styles from './mainPage.module.css';
import Note from './modules/eachNote';
import Header from './modules/header/header';
import CopyRight from './modules/footer/footer';

const MainPage = () => {
    const allNotesArr = JSON.parse(localStorage.getItem('storage'));

    return(
        <div className={styles.MainPage}>
            <Header />
            {
                allNotesArr.map((notesObj, index) => {
                    const title = notesObj.title;
                    const note = notesObj.note;
                    console.log(title + note);
                    return <Note title={title} note={note} key={index} />
                })
            }
            <CopyRight />
        </div>
    );
}
export default MainPage;