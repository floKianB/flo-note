import React from 'react';
import styles from './eachNote.module.css';
import { AiFillCloseCircle } from 'react-icons/ai';


const Note = (props) => {
    const open = () => {
        props.onOpen(props.id)
    }
    const close = () => {
        props.onDelete(props.id);
    }
    return(
        <div className={styles.note} style={{backgroundColor: props.bgColor}} key={props.key}>
            <AiFillCloseCircle className={styles.deleteBtn} onClick={close}/>
            <p className={styles.header} style={{color: props.color}} onClick={open} >{props.title}</p>
            <p className={styles.text} style={{color: props.color}}>{props.note.length > 27 ? props.note.slice(0, 27).concat('...') : props.note}</p>
        </div>
    );
}

export default Note;