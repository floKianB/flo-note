import React from 'react';
import styles from './eachNote.module.css';

const Note = (props) => {
    return(
        <div className={styles.note} key={props.key}>
            <h3 className="title">{props.title}</h3>
            <p className="text">{props.note}</p>
        </div>
    );
}

export default Note;