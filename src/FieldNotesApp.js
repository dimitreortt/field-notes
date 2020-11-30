import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./styles/styles.scss"
import Header from "./components/Header"
import NoteForm from "./components/NoteForm"
import Note from "./components/Note"
import db from "./firebase/firebase"
import firebase from "firebase"
import { useHistory } from "react-router-dom"

export const FieldNotesApp = () => {
  const [notes, setNotes] = useState([])
  const history = useHistory()

  useEffect(() => {
    const downloadNotes = () => {
      db.collection("notes")
        .get()
        .then((snapshot) => {
          let notes = []
          snapshot.forEach((noteSnap) => {
            // convert TIMESTAMP to Date
            let data = noteSnap.data()
            data.date = data.date.toDate()
            data.noteId = noteSnap.id
            notes.push(data)
          })

          setNotes(notes)
        })
        .then(() => {
          console.log("Notes have been successfully downloaded!")
        })
        .catch((e) => console.log(e))
    }

    downloadNotes()
  }, [])

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Sign-out successful.")
        alert("User has been successfully signed out!")
        history.push("/login")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    console.log(notes, "no main")
  })

  return (
    <div>
      <Header />
      <div className="container main-content border rounded">
        <div>Please, start taking notes!</div>
        <div className="add-button d-flex m-1">
          <button className="btn btn-success p-3 flex-fill">ADD</button>
        </div>
        <NoteForm setNotes={setNotes} notes={notes} />
        <div className="notes-list">
          {notes.map((noteData, index) => (
            <Note
              key={index}
              data={noteData}
              setNotes={setNotes}
              notes={notes}
              index={index}
            />
          ))}
        </div>
        <div className="text-center mt-5 mb-2">
          <button
            className="btn btn-warning btn-lg rounded-pill px-5 text-dark"
            onClick={signOut}
          >
            Log Out
          </button>
        </div>
      </div>
      <footer className="footer text-center bg-success text-white p-3">
        <div>E-mail: dimiortt@gmail.com</div>
        <div>LinkedIn: https://www.linkedin.com/in/dimitre-ortt-3465bb177/</div>
      </footer>
    </div>
  )
}

export default FieldNotesApp
