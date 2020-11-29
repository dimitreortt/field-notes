import React from "react"
import useIsLoggedIn from "../customHooks/useIsLoggedIn"
import { Redirect, Route } from "react-router-dom"

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoggedIn, setIsLoggedIn, loading] = useIsLoggedIn()
  // const isLoggedIn = true
  // const loading = false

  console.log("to na private")

  return (
    <Route
      {...rest}
      component={(props) =>
        loading ? (
          "Loading..."
        ) : isLoggedIn ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
    // <div>
    //   {loading == true ? (
    //     "Loading..."
    //   ) : isLoggedIn == true ? (
    //     // <Redirect to={"/"} />
    //     <Component {...rest} />
    //   ) : (
    //     <Redirect path="/login" />
    //   )}
    // </div>
  )
}

export default PrivateRoute
