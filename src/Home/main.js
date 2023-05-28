import React, {useEffect, useState} from 'react';
import styles from './mainPage.module.css';
import Note from './modules/eachNote/eachNote';
import Header from './modules/header/header';
import NewNoteForm from './modules/newNoteForm/newNoteForm';
import CopyRight from './modules/footer/footer';
import LargeNote from './modules/largNote/largeNotes';

const MainPage = () => {
    const [allNotes, setAllNotes] = useState(JSON.parse(localStorage.getItem("storage")) === null ? [] : JSON.parse(localStorage.getItem("storage")));
    const [resultTitle, setResultTitle] = useState("");
    const [resultNote, setResultNote] = useState("");
    const [bgColor, setBgColor] = useState("#000000");
    const [color, setColor] = useState("#ffffff");

    const [bgBlur, setBgBlur] = useState(0);
    const [noteOpen, setNoteOpen] = useState("none")
    const [openedId, setOpendId] = useState(-1)


    const save = () => {
        if(resultTitle !== '' && resultNote !== '') {
            const newSchema = {
                title: resultTitle,
                note: resultNote,
                bgColor: bgColor,
                color: color,
            }
            setAllNotes(allNotes => [...allNotes, newSchema]);
        }
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
        setNoteOpen("block");
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
                <NewNoteForm setResultTitle={setResultTitle} setResultNote={setResultNote} setBgColor={setBgColor} setColor={setColor} save={save}/>
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