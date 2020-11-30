import React, { useState, useEffect } from "react"
import firebase from "firebase"

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    const verifyAuthState = () => {
      firebase.auth().onAuthStateChanged(function (user) {
        let isLogged
        if (user) {
          console.log("User is signed in")
          isLogged = true
        } else {
          console.log("No user is signed in")
          isLogged = false
        }
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
