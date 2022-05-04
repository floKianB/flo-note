import React, { useRef, useEffect } from 'react';
import styles from './eachNote.module.css';
import deleteBtn from '../../source/delete.png';

const Note = (props) => {
    const ref = useRef()

    useEffect(() => {
        const recivedInnerHtml = ref.current.innerHTML;
        ref.current.innerHTML = recivedInnerHtml.slice(0, 27).concat('...')
    }, [props.onDelete])

    const open = () => {
        props.onOpen(props.id)
    }

    const close = () => {
        props.onDelete(props.id);
    }

    return(
        <div className={styles.note} style={{backgroundColor: props.bgColor}} key={props.key}>
            <img src={deleteBtn} alt="delete" className={styles.deleteBtn} onClick={close}/>
            <p className={styles.header} style={{color: props.color}} onClick={open} >{props.title}</p>
            <p className={styles.text} style={{color: props.color}} ref={ref}>{props.note}</p>
        </div>
    );
}

export default Note;