import React, { Fragment, useState, useRef } from "react";
import  { NoteList } from './components/NoteList'


export function App(){
  const [notes, setNote] = useState([{ title: "title" , note: "Note 1", categorie: "categoria"  }]);
  
  const titleRef = useRef();
  const noteRef = useRef();
  


  fetch('/login')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })

  const handleNoteAdd = () => {

    const note = noteRef.current.value;
    const title = titleRef.current.value;
       if( note === '') return;
       if( title === '') return;
      setNote((prevNotes) => {
        return [...prevNotes, {title, note, categorie:1}]
      });
      titleRef.current.value = null;
      noteRef.current.value = null;
  }
  return(
    <Fragment>
      <NoteList notes={notes}/>
      <input ref={titleRef} type="text" placeholder="Título" />
      <input ref={noteRef} type="text" placeholder="Nueva nota" />
      <button onClick={handleNoteAdd}>+</button>
      <button>Borrar</button>
    </Fragment>
  );
}

