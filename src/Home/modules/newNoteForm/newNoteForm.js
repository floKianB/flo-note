import React, { useRef } from 'react'
import styles from './newNoteForm.module.css';

function NewNoteForm({setResultTitle, setResultNote, setBgColor, setColor, save}) {
    const refTitle = useRef();
    const refNote = useRef();
    const resetInput = () => {
        refTitle.current.value = '';
        refNote.current.value = '';
    }
    return (
        <div className={styles.inputDiv}>
            <input type="text" class={styles.input} id={styles.inputTitle} onInput={event => setResultTitle(event.target.value)} placeholder="Title" ref={refTitle}/>
            <input type="text" class={styles.input} onInput={event => setResultNote(event.target.value)} placeholder="Add Note ..." ref={refNote}/>
            <label>Background Color: </label>
            <input type="color" onInput={event => setBgColor(event.target.value)}/>
            <label>Color: </label>
            <input type="color" onInput={event => setColor(event.target.value)} default="#ffffff"/>
            <button id={styles.submit} onClick={() => {save(); resetInput()}}> Add</button>
        </div>
    )
}

export default NewNoteForm