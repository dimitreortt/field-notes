import React from "react"
import useIsLoggedIn from "../customHooks/useIsLoggedIn"
import { Redirect, Route } from "react-router-dom"

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoggedIn, setIsLoggedIn, loading] = useIsLoggedIn()

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
  )
}

export default PrivateRoute
