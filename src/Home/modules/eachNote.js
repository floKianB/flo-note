import React from 'react';
import styles from './eachNote.module.css';

const Note = (props) => {
    styles.backgroundColor = props.bgColor
    return(
        <div className={styles.note} style={{backgroundColor: props.bgColor}} key={props.keyis}>
            <h3 className="title" style={{color: props.color}}>{props.title}</h3>
            <p className="text" style={{color: props.color}}>{props.note}</p>
        </div>
    );
}

export default Note;