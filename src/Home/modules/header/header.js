import React, {useState} from 'react';
import styles from './header.module.css';

const Header = () => {
    const previousSaved = localStorage.getItem("storage");
    if(previousSaved === null){
        localStorage.setItem("storage", JSON.stringify([]))
    }

    const [resultTitle, setResultTitle] = useState("");
    const [resultNote, setResultNote] = useState("");
    const save = () => {
        const newSchema = {
            title: resultTitle,
            note: resultNote
        }
        const previousSaved = localStorage.getItem("storage");
        const prevousSavedArr = JSON.parse(previousSaved);
        prevousSavedArr.push(newSchema);
        localStorage.setItem("storage", JSON.stringify(prevousSavedArr));

    }
    return(
        <header className={styles.header}>
            <h1 className={styles.titleName}>Flo Notes</h1>
            <div className={styles.add}>
                <input type="text" class={styles.input} id={styles.inputTitle} onInput={event => setResultTitle(event.target.value)} placeholder="Title" />
                <input type="text" class={styles.input} onInput={event => setResultNote(event.target.value)} placeholder="Add Note ..." />
                <button id={styles.submit} onClick={save}>Add</button>
            </div>
        </header>
    );
}

export default Header;