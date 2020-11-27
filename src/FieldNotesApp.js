import React, { createRef, Component } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./styles/styles.scss"
import Header from "./components/Header"
import NoteForm from "./components/NoteForm"
import Note from "./components/Note"

export class FieldNotesApp extends Component {
  constructor(props) {
    super(props)

    this.noteFormRef = createRef()
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
        <div className="container main-content">
          <div>Please, start taking notes!</div>
          <div className="add-button d-flex">
            <button
              className="btn btn-success p-3 flex-fill"
              onClick={this.showNoteForm}
            >
              ADD
            </button>
          </div>
          {/* <NoteForm /> */}
          <div className="notes-list">
            <div className="note m-1 showborder">nota 1</div>
            <div className="note m-1 showborder">nota 2</div>
            <Note />
            <Note />
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
