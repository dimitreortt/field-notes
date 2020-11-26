import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/styles.scss'

export const FieldNotesApp = (props) => {
  return <div>
    <div className="main-header showborder m-1 p-3">
      oi
    </div>
    <div className="container">
      <div>
        Please, start taking notes!
      </div>
      <div className="add-button d-flex showborder">
        <button className="btn btn-success p-3 flex-fill">ADD</button>
      </div>
      <div className="notes-list showborder">
        <div className="note m-1 showborder">
          nota 1
        </div>
        <div className="note m-1 showborder">
          nota 2
        </div>
      </div>
    </div>
    <footer className="footer text-center bg-success text-white fixed-bottom p-3">
      <div>
        E-mail: dimiortt@gmail.com
      </div>
      <div>
        LinkeIn: https://www.linkedin.com/in/dimitre-ortt-3465bb177/
      </div>
    </footer>
  </div>
}

export default FieldNotesApp