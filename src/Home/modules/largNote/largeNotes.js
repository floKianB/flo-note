import React from 'react';
import styles from './largeNote.module.css';

import closeBtn from '../../source/close.png';


const LargeNote = (props) => {
    const closeNote = () => {
        props.closeNote();
    }

    const allNotes = JSON.parse(localStorage.getItem("storage")) === null ? [] : JSON.parse(localStorage.getItem("storage"))
    let title;
    let note;
    let bgColor;
    let fontColor;

    allNotes.forEach((eachNote, index) => {
        if(props.id === index){
            title = eachNote.title;
            note = eachNote.note;
            bgColor = eachNote.bgColor;
            fontColor = eachNote.color;
            console.log(note)
        }
    })
    return (
        <div className={styles.openedContainer} style={{display: `${props.openStatus}`, backgroundColor: `${bgColor}`}}>
            <img src={closeBtn} className={styles.closeBtn} alt="Close" onClick={closeNote}/>
            <div className={styles.data}>
                <h2 style={{color: `${fontColor}`}}>{title}</h2>
                <p style={{color: `${fontColor}`}}>{note}</p>
            </div>
        </div>
    );
}

export default LargeNote;