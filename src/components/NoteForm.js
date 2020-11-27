import React, { useState, useEffect } from "react"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"
import db from "../firebase/firebase"

export const NoteForm = (props) => {
  const [dateInput, setDateInput] = useState(new Date())
  const [nameInput, setNameInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")

  useEffect(() => {
    console.log("ola ;P")
    console.log(props.formData)
    if (!!props.formData) {
      console.log("ola mundo")
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

  const onFormSubmit = (e) => {
    e.preventDefault()
    const note = {
      author: nameInput,
      description: descriptionInput,
      date: dateInput,
    }

    db.collection("notes")
      .add(note)
      .then((docRef) => {
        console.log("addeed :)", note)
        note.noteId = docRef.id
        props.setState((prevState) => ({
          notes: [note].concat(prevState.notes),
        }))
        setNameInput("")
        setDescriptionInput("")
      })
      .catch((e) => {
        console.log(e)
      })
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
              <label for="nameInput" className="ml-1">
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
              <label for="descriptionInput" className="ml-1">
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
