import React, { useState, useEffect } from "react"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"
import db from "../firebase/firebase"

export const NoteForm = (props) => {
  const [dateInput, setDateInput] = useState(new Date())
  const [nameInput, setNameInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")

  useEffect(() => {
    if (!!props.formData) {
      const { date, author, description } = props.formData
      setDateInput(date)
      setNameInput(author)
      setDescriptionInput(description)
    }
  }, [])

  const onInputChange = (e) => {
    setNameInput(e.target.value)
  }

  const onDescriptionInputChange = (e) => {
    setDescriptionInput(e.target.value)
  }

  const addNote = (note) => {
    db.collection("notes")
      .add(note)
      .then((docRef) => {
        console.log("Document successfully created")
        note.noteId = docRef.id
        props.setNotes([note].concat(props.notes))
        setNameInput("")
        setDescriptionInput("")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const updateNote = (newNote) => {
    db.collection("notes")
      .doc(props.formData.noteId)
      .update(newNote)
      .then(() => {
        console.log("Document successfully updated", newNote)

        props.setNotes(
          props.notes.map((note) =>
            note.noteId === props.formData.noteId
              ? { ...newNote, noteId: props.formData.noteId }
              : note
          )
        )

        setNameInput("")
        setDescriptionInput("")
        props.setInEditMode(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    const note = {
      author: nameInput,
      description: descriptionInput,
      date: dateInput,
    }
    !!props.formData ? updateNote(note) : addNote(note)
  }

  return (
    <div className="note-form border border-secondary rounded">
      {`${nameInput}, ${descriptionInput}, ${dateInput}`}
      <form className="" onSubmit={onFormSubmit}>
        <div className="row">
          {/* <div className="showborder col-sm-12 col-md-8">oi</div>
          <div className="showborder col-sm-12 col-md-4">oi</div> */}
          <div className="col-sm-12 col-md-8">
            <div className="form-group">
              <label htmlFor="nameInput" className="ml-1">
                Author Name
              </label>
              <input
                id="nameInput"
                className="form-control"
                type="text"
                placeholder="Enter Name"
                value={nameInput}
                onChange={onInputChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="descriptionInput" className="ml-1">
                Description
              </label>
              <textarea
                id="nameInput"
                className="form-control"
                placeholder="Enter Description"
                rows="3"
                onChange={onDescriptionInputChange}
                value={descriptionInput}
              ></textarea>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="h-100 d-flex flex-column justify-content-between align-items-center">
              <div className="form-group justify-content-center">
                <label className="d-block">Date</label>
                <DatePicker
                  selected={dateInput}
                  onChange={(date) => setDateInput(date)}
                  className="form-control"
                  id="dateInput"
                />
              </div>
              <div className="col align-self-end d-flex align-items-center">
                <button
                  type="submit"
                  className="btn btn-outline-success btn-lg rounded-pill btn-block"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NoteForm
