import React from 'react';
import styles from './eachNote.module.css';

const Note = () => {
    return(
        <div className={styles.note}>
            <h3 className="title">Note Title</h3>
            <p className="text">Description of note</p>
        </div>
    );
}

export default Note;