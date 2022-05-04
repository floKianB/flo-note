import React, {useEffect, useState, useRef} from 'react';
import styles from './mainPage.module.css';
import Note from './modules/eachNote/eachNote';
import Header from './modules/header/header';
import CopyRight from './modules/footer/footer';
import LargeNote from './modules/largNote/largeNotes';

const MainPage = () => {
    const [allNotes, setAllNotes] = useState(JSON.parse(localStorage.getItem("storage")) === null ? [] : JSON.parse(localStorage.getItem("storage")));
    const [resultTitle, setResultTitle] = useState("");
    const [resultNote, setResultNote] = useState("");
    const [bgColor, setBgColor] = useState("#000000");
    const [color, setColor] = useState("#ffffff");
    const ref1 = useRef();
    const ref2 = useRef();

    const [bgBlur, setBgBlur] = useState(0);
    const [noteOpen, setNoteOpen] = useState("none")
    const [openedId, setOpendId] = useState(-1)

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
        setAllNotes(result => {
            return allNotes.filter((note, index)=>{
                return index !== id
            })
        }
    )}

    const openNote = (id) => {
        
        setOpendId(id);
        setBgBlur(3);
        setNoteOpen("flex");
    }

    const closeNote = () => {
        setBgBlur(0);
        setNoteOpen("none");
    }

    useEffect(() => {
        localStorage.setItem("storage", JSON.stringify(allNotes))
    }, [allNotes]);

    
    return (
        <>
            <Header />
            <div className={styles.MainPage} style={{filter: `blur(${bgBlur}px)`}}>
                <div className={styles.inputDiv}>
                    <input type="text" class={styles.input} id={styles.inputTitle} onInput={event => setResultTitle(event.target.value)} placeholder="Title" ref={ref1}/>
                    <input type="text" class={styles.input} onInput={event => setResultNote(event.target.value)} placeholder="Add Note ..." ref={ref2}/>
                    <label>Background Color: </label>
                    <input type="color" onInput={event => setBgColor(event.target.value)}/>
                    <label>Color: </label>
                    <input type="color" onInput={event => setColor(event.target.value)} default="#ffffff"/>
                    <button id={styles.submit} onClick={() => {save(); resetInput()}}> Add</button>
                </div>
                <div class={styles.Notes}>
                    {
                        allNotes.map((notesObj, index) => {
                            return <Note title={notesObj.title} note={notesObj.note} bgColor={notesObj.bgColor} color={notesObj.color} onDelete={deleteNotes} onOpen={openNote} key={index} id={index} />
                        })
                    }
                </div>
                
            </div>

            <LargeNote openStatus={noteOpen} closeNote={closeNote} id={openedId}/>

            <CopyRight />
        </>

    );
}
export default MainPage;