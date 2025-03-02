import React, { useState } from "react";

import "./Note.css";

const Note = (props) => {
    

    return (
        <div className="note">
            <div className= "avatar"></div>
            <div className="note-info">
                <h1 className="title">{props.note_title}</h1>
                <h2 className="date">{props.note_date}</h2>
            </div>
            <div className="note-content">{props.note_content}</div>
        </div>
    )
}