import React, { useRef, useState } from 'react'
import styles from './newNoteForm.module.css';
import { TwitterPicker } from 'react-color';


function NewNoteForm({setResultTitle, setResultNote, setBgColor, setColor, save}) {
    const [newNoteStatus, setNewnNoteStatus] = useState(false)
    const refTitle = useRef();
    const refNote = useRef();
    const resetInput = () => {
        refTitle.current.value = '';
        refNote.current.value = '';
        setResultTitle('');
        setResultNote('');
    }
    return (
        <>
        <button onClick={() => {setNewnNoteStatus(!newNoteStatus); console.log(newNoteStatus);}} className={styles.addButton}>{newNoteStatus ? '-' : '+'}</button>
        <div className={newNoteStatus === true ? styles.inputDiv : styles.inputNoDiv }>
            <div className={styles.textInputs}>
                <input type="text" class={styles.input} id={styles.inputTitle} onInput={event => setResultTitle(event.target.value)} placeholder="Title" ref={refTitle}/>
                <textarea type="text" class={styles.input} id={styles.inputNote} onInput={event => setResultNote(event.target.value)} placeholder="Add Note ..." ref={refNote}/>
            </div>
            <div className={styles.bgColorPickerContainer}>
                <label>Background Color</label>
                <TwitterPicker onChange={(color) => setBgColor(color.hex)} />
            </div>
            <div className={styles.noteColorPickerContainer}>
                <label>Text Color</label>
                <TwitterPicker colors={['#0a0a0a', '#1f2aab', '#701a91', '#268717', '#1c7980', '#961533', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF']} onChange={(color) => setColor(color.hex)} />
            </div>
            <button id={styles.submit} onClick={() => {save(); resetInput()}}> Add</button>
        </div>
        </>
        
    )
}

export default NewNoteForm