import React from 'react'
import { NoteIteration } from './NoteIteration'

export function NoteList({ notes }) {
    return (
        <ul>
            {notes.map((note) => (
                <NoteIteration note={note} />
            ))}
        </ul>
    )
}