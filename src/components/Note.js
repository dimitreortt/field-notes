import React, { useState } from "react"
import db from "../firebase/firebase"
import NoteForm from "./NoteForm"

export const Note = ({
  data: { description, author, date, noteId },
  setNotes,
  notes,
  index,
}) => {
  const [inEditMode, setInEditMode] = useState(false)

  const removeNote = () => {
    db.collection("notes")
      .doc(noteId)
      .delete()
      .then(() => {
        console.log("Note was successfully deleted")
        setNotes(notes.filter((note) => note.noteId !== noteId))
      })
      .catch((error) => console.log(error))
  }

  const toggleInEditMode = () => {
    setInEditMode(!inEditMode)
  }

  return (
    <div className="note border border-dark rounded m-1">
      <div className="my-1">
        <div className="mx-1 font-weight-bold">Description</div>
        <div className="border border-secondary rounded p-2 mx-1 bg-white">
          <p className="note__description">{description}</p>
        </div>
        <div className="container">
          <div className="row my-1">
            <div className="col px-1">
              <div className="p-2 border rounded bg-light">
                <strong>Date: </strong>
                {date.toLocaleDateString()}
              </div>
            </div>
            <div className="col px-1">
              <div className="p-2 border rounded bg-light">
                <strong>Author: </strong>
                {author}
              </div>
            </div>
            <div className="col px-1">
              <button
                className="btn btn-outline-success btn-block h-100"
                onClick={toggleInEditMode}
              >
                Edit
              </button>
            </div>
            <div className="col px-1">
              <button
                className="btn btn-outline-danger btn-block h-100"
                onClick={removeNote}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      {inEditMode && (
        <div className="container m-1 mt-2">
          <NoteForm
            setNotes={setNotes}
            notes={notes}
            index={index}
            setInEditMode={setInEditMode}
            formData={{
              description,
              author,
              date,
              noteId,
            }}
          />
        </div>
      )}
    </div>
  )
}

export default Note
