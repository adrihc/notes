import React, { useState } from "react";

export function Note() {
    const [isPublic, setPublic] = useState(false)
    const [isVoiceNote, setVoiceNote] = useState(false)

    // const response = fetch(`http://localhost:8081/notes/${id}`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-type': 'application/json',
    //         'Authorization': "Bearer " + localStorage.getItem('token')
    //     }
    // })

    // const responseFile = fetch(`http://localhost:8081/notes/${id}/file`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-type': 'application/json',
    //         'Authorization': "Bearer " + localStorage.getItem('token')
    //     }
    // })

    // const {title, body, isPublic, isVoiceNote} = response

    const id = 1
    function handleDelete() {
        const response = fetch(`http://localhost:8081/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        })
    }

    function handleUpdate() {
        const response = fetch(`http://localhost:8081/notes/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: "title",
                body: "note",
                isVoiceNote: false,
                isPublic: "isPublic"
            }),
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        })
    }




    const handleOnChange = () => {
        setPublic(!isPublic);
    };

    const handleOnChangeVoice = () => {
        setVoiceNote(!isVoiceNote);
    };


    if(isVoiceNote){
        return (<div>
            <input type="text" value="titulo" /><br />
            <textarea name="" id="" cols="30" rows="10" value="note" /><br />
            <label>Publico</label><input type="checkbox" checked={isPublic} onChange={handleOnChange} /><br />
            <label>Audio</label><input type="checkbox" checked={isVoiceNote} onChange={handleOnChangeVoice} /> <input type="file" /> <br />
            <button onClick={handleUpdate}>Actualizar</button><br />
            <button onClick={handleDelete}> Eliminar nota </button><br />
        </div>)
    }else{
        return (<div>
            <input type="text" value="titulo" /><br />
            <textarea name="" id="" cols="30" rows="10" value="note" /><br />
            <label>Publico</label><input type="checkbox" checked={isPublic} onChange={handleOnChange} /><br />
            <label>Audio</label><input type="checkbox" checked={isVoiceNote} onChange={handleOnChangeVoice} /><br />
            <button onClick={handleUpdate}>Actualizar</button><br />
            <button onClick={handleDelete}> Eliminar nota </button><br />
        </div>)
    }
}