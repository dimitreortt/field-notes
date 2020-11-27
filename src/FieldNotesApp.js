import React, { createRef, Component } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./styles/styles.scss"
import Header from "./components/Header"
import NoteForm from "./components/NoteForm"
import Note from "./components/Note"
import db from "./firebase/firebase"
import moment from "moment"

export class FieldNotesApp extends Component {
  constructor(props) {
    super(props)

    this.noteFormRef = createRef()
    this.state = {
      notes: [],
    }
    this.setState = this.setState.bind(this)
  }

  componentWillMount() {
    const downloadNotes = () => {
      db.collection("notes")
        .get()
        .then((snapshot) => {
          let notes = []
          snapshot.forEach((noteSnap) => {
            // convert TIMESTAMP to Date
            let data = noteSnap.data()
            data.date = data.date.toDate()
            notes.push(data)
          })

          this.setState(() => ({ notes }))
        })
        .then(() => {
          console.log("missão cumprida pai")
        })
        .catch((e) => console.log(e))
    }

    downloadNotes()
    console.log("in will mount")
  }

  showNoteForm = () => {
    // this.noteFormRef.current.style.background = "red"
    // let e = this.noteFormRef.current
    // e.style.height = ""
    // e.scrollIntoView({
    //   behavior: "smooth",
    // })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container main-content border rounded">
          <div>Please, start taking notes!</div>
          <div className="add-button d-flex m-1">
            <button
              className="btn btn-success p-3 flex-fill"
              onClick={this.showNoteForm}
            >
              ADD
            </button>
          </div>
          <NoteForm setState={this.setState} />
          <div className="notes-list">
            {this.state.notes.map((noteData) => (
              <Note data={noteData} />
            ))}
            {/* <Note />
            <Note /> */}
          </div>
        </div>
        <footer className="footer text-center bg-success text-white p-3">
          <div>E-mail: dimiortt@gmail.com</div>
          <div>
            LinkedIn: https://www.linkedin.com/in/dimitre-ortt-3465bb177/
          </div>
        </footer>
      </div>
    )
  }
}

export default FieldNotesApp
