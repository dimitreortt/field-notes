import React, { useState } from "react"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"

export const NoteForm = (props) => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div className="note-form border border-secondary rounded">
      <form className="">
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
              ></textarea>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="h-100 d-flex flex-column justify-content-between align-items-center">
              <div className="form-group justify-content-center">
                <label className="d-block">Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="form-control"
                  id="dateInput"
                />
              </div>
              <div className="col align-self-end d-flex align-items-center">
                <button className="btn btn-outline-success btn-lg rounded-pill btn-block">
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
