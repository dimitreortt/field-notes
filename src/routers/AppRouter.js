import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
// import { createBrowserHistory } from "history"
import FieldNotesApp from "../FieldNotesApp"
import LoginPage from "../components/LoginPage"
import PublicRoute from "./PublicRoute"
import PrivateRoute from "./PrivateRoute"
import Test1 from "../components/Test1"
import Test2 from "../components/Test2"

// const history = createBrowserHistory()

export const AppRouter = (props) => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} />
        <PrivateRoute path="/" component={FieldNotesApp} exact />

        {/* <FieldNotesApp path={"/"} exact />
        <LoginPage path={"/login"} /> */}
      </Switch>
    </Router>
  )
}

export default AppRouter
