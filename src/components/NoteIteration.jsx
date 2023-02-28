import React from "react";
import { BrowserRouter, Link, useParams } from "react-router-dom";


export function NoteIteration({note}){
    const { title, body, isVoiceNote, isPublic } = note;
    
    return(
        <li>
            <Link to={`/notes/${title}`} activeClassName="current" >{title}</Link>
            {body}


        </li>
    )
}