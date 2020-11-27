import React from "react"

export const Note = (props) => {
  return (
    <div className="note border border-dark rounded m-1">
      <div className="my-1">
        <div className="mx-1 font-weight-bold">Description</div>
        <div className="border border-secondary rounded p-2 mx-1 bg-white">
          <p className="note__description">oioioi</p>
        </div>
        <div className="container">
          <div className="row my-1">
            <div className="col px-1">
              <div className="p-2 border rounded bg-light">
                <strong>Date:</strong> 26/nove
              </div>
            </div>
            <div className="col px-1">
              <div className="p-2 border rounded bg-light">
                <strong>Author:</strong> Dimitre
              </div>
            </div>
            <div className="col px-1">
              <button className="btn btn-outline-success btn-block h-100">
                Edit
              </button>
            </div>
            <div className="col px-1">
              <button className="btn btn-outline-danger btn-block h-100">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note
