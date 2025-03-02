import React, { useState } from "react";
import "./Notebook.css";

const Notebook = () => {
    const [notes, setNotes] = useState([]);
    return (
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
    );
};

export default Notebook;