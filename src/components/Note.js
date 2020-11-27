import React from "react"
import db from "../firebase/firebase"
import NoteForm from "./NoteForm"

export const Note = ({
  data: { description, author, date, noteId },
  setState,
}) => {
  const removeNote = () => {
    console.log(noteId, "oi, td bem?")
    db.collection("notes")
      .doc(noteId)
      .delete()
      .then(() => {
        console.log("note was successfully deleted")
        setState((prevState) => {
          // let newNotes = prevState.notes.filter(
          //   (note) => note.noteId !== noteId
          // )
          // console.log(newNotes)
          return {
            notes: prevState.notes.filter((note) => note.noteId !== noteId),
          }
        })
      })
      .catch((error) => console.log(error))
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
              <button className="btn btn-outline-success btn-block h-100">
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
      <NoteForm setState={setState} formData={{ description, author, date }} />
    </div>
  )
}

export default Note
