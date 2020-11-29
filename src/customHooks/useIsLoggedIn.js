import React, { useState, useEffect } from "react"
import firebase from "firebase"

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const verifyAuthState = () => {
      console.log(isLoggedIn, "in use logged in")
      firebase.auth().onAuthStateChanged(function (user) {
        let isLogged
        if (user) {
          // User is signed in.
          console.log("// User is signed in., in usili")
          isLogged = true
        } else {
          // No user is signed in.
          console.log("// No user is signed in.")
          isLogged = false
        }

        // setIsLoggedIn(false)
        if (mounted) {
          setIsLoggedIn(isLogged)
          setLoading(false)
        }
      })
    }

    verifyAuthState()
    // cleanup function
    return () => (mounted = false)
  }, [])

  return [isLoggedIn, setIsLoggedIn, loading]
}

export default useIsLoggedIn
