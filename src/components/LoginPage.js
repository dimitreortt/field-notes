import React, { useEffect } from "react"
import Header from "./Header"
import firebase from "firebase"
import useIsLoggedIn from "../customHooks/useIsLoggedIn"
import { Redirect } from "react-router-dom"

export const LoginPage = (props) => {
  const [isLoggedIn, setIsLoggedIn, loading] = useIsLoggedIn()

  const signIn = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((anything) => {
        console.log("anything", anything)
        setIsLoggedIn(true)
        alert("The user has been successfully signed in!")
      })
      .catch(function (error) {
        console.log(`Error: ${error.message}`)
        alert(error.message)
      })
  }

  const onFormSubmit = (e) => {
    e.preventDefault()

    console.log("oiee")
    const email = e.target[0].value
    const password = e.target[1].value
    console.log(email, password)
    signIn(email, password)
  }

  return (
    <div className="login-page-layout">
      <div className="login-page-layout__background">
        <Header />
      </div>
      <div className="login-page-layout__box">
        <div className="login-page-layout__title text-dark p-1">
          FIELD NOTES
        </div>
        <p>Start to get your notes under control!</p>
        <form onSubmit={onFormSubmit}>
          <div className="form-...">
            <div className="form-group text-left mb-2">
              <label htmlFor="mailInput">E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter E-mail"
                id="mainInput"
              ></input>
            </div>
            <div className="form-group text-left">
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                id="passwordInput"
              ></input>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Login with E-mail
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
