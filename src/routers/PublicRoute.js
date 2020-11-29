import React from "react"
import { Redirect } from "react-router-dom"
import useIsLoggedIn from "../customHooks/useIsLoggedIn"

export const PublicRoute = ({ component: Component, ...rest }) => {
  const [isLoggedIn, setIsLoggedIn, loading] = useIsLoggedIn()

  return (
    <div>
      {loading == true ? (
        "Loading..."
      ) : isLoggedIn == true ? (
        <Redirect to="/" />
      ) : (
        <Component {...rest} />
      )}
    </div>
  )
}

export default PublicRoute
