import React, { useState } from "react";

import "./Notebook.css";

const Notebook = () => {
    const [notes, setNotes] = useState([
        {
            title: "Note 1",
            date: "2023-10-01",
            content: "This is the content of note 1."
        },
        {
            title: "Note 2",
            date: "2023-10-02",
            content: "This is the content of note 2."
        },
        {
            title: "Note 3",
            date: "2023-10-03",
            content: "This is the content of note 3."
        }
    ]);
    return (
        <>
            <div className="notebook">
                <h2>Notebook</h2>
                <div className="notes">
                    {notes.map((note, index) => (
                        <div key={index} className="note">
                            <div className="note_header">
                                <span className="note_title">
                                    <h3>{note.title}</h3>
                                </span>
                                <span className="note_date">
                                    <h3>{note.date}</h3>
                                </span>
                            </div>
                            <div className="note_content">
                                <p>{note.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}