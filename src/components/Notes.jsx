import React, { Fragment, useState } from 'react'
import { NoteList } from './NoteList';

export function Notes() {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [isPublic, setPublic] = useState(false)
    const [isVoiceNote, setVoiceNote] = useState(false)

    //de mientras
    const [notes, setNotes] = useState([{ title: 'titulo 1', body: 'Nota1', isVoiceNote: false, isPublic: true },{ title: 'titulo 2', body: 'Nota2', isVoiceNote: false, isPublic: true }])
    console.log(notes)


    const handleOnChange = () => {
        setPublic(!isPublic);
    };

    const handleOnChangeVoice = () => {
        setVoiceNote(!isVoiceNote);
    };

    // const response =  fetch("http://localhost:8081/notes", {
    //     method: "GET",
    //     headers: {
    //         "content-type": "application/json",
    //         "Authorization": "Bearer " + localStorage.getItem("token")
    //     }
    // })
    //     .then(response => {
    //         console.log(response)
    //     })


    const handleNewNote = async () => {
        if (title === '') {
            alert('El título está vacío')
            return
        } else if (note === '') {
            alert('La nota está vacía')
            return
        } else {
            const response = await fetch('http://localhost:8081/notes', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: note,
                    isVoiceNote: false,
                    isPublic: isPublic
                }),
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': bearer
                }
            })
            if (response.status === 409) {
                alert("Ese usuario ya existe")
            } else if (response.status === 200) {
                alert("Tu cuenta ha sido creada, por favor introduzca los datos de nuevo para iniciar sesión")
                window.location.replace('/')
            }
        }
    }


    if(isVoiceNote === false){
    return (
        <Fragment>
            <ul>
                <NoteList notes={notes} />
            </ul>
            <input type="text" placeholder='Título' onChange={(input) => { setTitle(input.target.value) }} /><br />
            <textarea name="" id="" cols="30" rows="10" onChange={(input) => { setNote(input.target.value) }} /><br />
            <label>Publico</label><input type="checkbox" checked={isPublic} onChange={handleOnChange} /><br />
            <label>Audio</label><input type="checkbox" checked={isVoiceNote} onChange={handleOnChangeVoice} /><br />
            <button onClick={handleNewNote}>Nueva nota</button>
        </Fragment>
    )
    } else{
        return (
            <Fragment>
                <ul>
                    <NoteList notes={notes} />
                </ul>
                <input type="text" placeholder='Título' onChange={(input) => { setTitle(input.target.value) }} /><br />
                <textarea name="" id="" cols="30" rows="10" onChange={(input) => { setNote(input.target.value) }} /><br />
                <label>Publico</label><input type="checkbox" checked={isPublic} onChange={handleOnChange} /><br />
                <label>Audio</label><input type="checkbox" checked={isVoiceNote} onChange={handleOnChangeVoice} /> <input type="file" /> <br />
                <button onClick={handleNewNote}>Nueva nota</button>
            </Fragment>
        )
    }

}