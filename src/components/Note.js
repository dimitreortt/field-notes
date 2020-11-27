import React from "react"
import db from "../firebase/firebase"

export const Note = ({ data: { description, name: author, date } }) => {
  const addObjectToFirestore = () => {
    db.collection("testeew")
      .add({ oi: "baby" })
      .then(() => {
        console.log("adicionado")
      })
      .catch((error) => {
        console.log("errão", error)
      })
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
                onClick={addObjectToFirestore}
              >
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
