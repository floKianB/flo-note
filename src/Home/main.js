import React, {useEffect, useState, useRef} from 'react';
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
    const ref1 = useRef();
    const ref2 = useRef();

    const resetInput = () => {
        ref1.current.value = '';
        ref2.current.value = '';
    }

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

    const deleteNotes = (id) => {
        console.log(id);
        setAllNotes(result => {
            return allNotes.filter((note, index)=>{
                return index !== id
            })
        }
    )}

    useEffect(() => {
        localStorage.setItem("storage", JSON.stringify(allNotes))
    }, [allNotes]);

    
    return (
        <>
            <Header />

            <div className={styles.MainPage}>
                
                <div className={styles.inputDiv}>
                    <input type="text" class={styles.input} id={styles.inputTitle} onInput={event => setResultTitle(event.target.value)} placeholder="Title" ref={ref1}/>
                    <input type="text" class={styles.input} onInput={event => setResultNote(event.target.value)} placeholder="Add Note ..." ref={ref2}/>
                    <input type="color" onInput={event => setBgColor(event.target.value)}/>
                    <input type="color" onInput={event => setColor(event.target.value)} default="#ffffff"/>
                    <button id={styles.submit} onClick={() => {save(); resetInput()}}> Add</button>
                </div>
                <div class={styles.Notes}>
                    {
                        allNotes.map((notesObj, index) => {
                            return <Note title={notesObj.title} note={notesObj.note} bgColor={notesObj.bgColor} color={notesObj.color} onDelete={deleteNotes} key={index} id={index} />
                        })
                    }
                </div>
                
            </div>
            <CopyRight />

        </>

    );
}
export default MainPage;