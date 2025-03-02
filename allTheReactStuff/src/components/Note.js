import React, { useState } from "react";

import "./Note.css";

const Note = (props) => {
    return (
        <div className="note">
            <div className="note_header">
                <span className="note_title">
                    <h3>{props.note_title}</h3>
                </span>
                <span className="note_date">
                    <h3>{props.note_date}</h3>
                </span>
            </div>
            <div className="note_content">
                <p>{props.note_content}</p>
            </div>
        </div>
    )
}