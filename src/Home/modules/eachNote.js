import React from 'react';
import styles from './eachNote.module.css';
import closeBtn from '../source/close.png';

const Note = (props) => {

    const close = () => {
        props.onDelete(props.id);
    }

    return(
        <div className={styles.note} style={{backgroundColor: props.bgColor}} key={props.key}>
            <img src={closeBtn} alt="close" className={styles.closeBtn} onClick={close}/>
            <h3 className="title" style={{color: props.color}}>{props.title}</h3>
            <p className="text" style={{color: props.color}} >{props.note}</p>
        </div>
    );
}

export default Note;