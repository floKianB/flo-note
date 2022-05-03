import React, {useEffect, useState} from 'react';
import styles from './mainPage.module.css';
import Note from './modules/eachNote';
import Header from './modules/header/header';
import CopyRight from './modules/footer/footer';

const MainPage = () => {
    const [allNotes, setAllNotes] = useState(JSON.parse(localStorage.getItem("storage")) === null ? [] : JSON.parse(localStorage.getItem("storage")));
    const [resultTitle, setResultTitle] = useState("");
    const [resultNote, setResultNote] = useState("");
    const [bgColor, setBgColor] = useState("#000000");
    const [color, setColor] = useState("#ffffff");

    const save = () => {
        const newSchema = {
            title: resultTitle,
            note: resultNote,
            bgColor: bgColor,
            color: color,
        }
        setAllNotes(allNotes => [...allNotes, newSchema]);
        
    }
    console.log(allNotes);

    useEffect(() => {
        localStorage.setItem("storage", JSON.stringify(allNotes))
    }, [allNotes]);
    
    return (
        <div className={styles.MainPage}>
            <Header />
            <div className={styles.inputDiv}>
                <input type="text" class={styles.input} id={styles.inputTitle} onInput={event => setResultTitle(event.target.value)} placeholder="Title" />
                <input type="text" class={styles.input} onInput={event => setResultNote(event.target.value)} placeholder="Add Note ..." />
                <input type="color" onInput={event => setBgColor(event.target.value)}/>
                <input type="color" onInput={event => setColor(event.target.value)}/>
                <button id={styles.submit} onClick={save}> Add</button>
            </div>

            {
                allNotes.map((notesObj, index) => {
                    return <Note title={notesObj.title} note={notesObj.note} bgColor={notesObj.bgColor} color={notesObj.color} keyis={index} />
                })
            }
            <CopyRight />
        </div>
    );
}
export default MainPage;