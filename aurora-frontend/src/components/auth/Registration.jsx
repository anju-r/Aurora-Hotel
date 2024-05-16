import React, { useState } from "react"
import { registerUser } from "../utils/ApiFunctions"
import { Link } from "react-router-dom"

const Registration = () => {
    const [registration, setRegistration] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleInputChange = (e) => {
        setRegistration({ ...registration, [e.target.name]: e.target.value })
    }

    const handleRegistration = async (e) => {
        e.preventDefault()
        try {
            const result = await registerUser(registration)
            setSuccessMessage(result)
            setErrorMessage("")
            setRegistration({ firstName: "", lastName: "", email: "", password: "" })
        } catch (error) {
            setSuccessMessage("")
            setErrorMessage(`Registration error : ${error.message}`)
        }
        setTimeout(() => {
            setErrorMessage("")
            setSuccessMessage("")
        }, 5000)
    }

    return (
        <></>
    )
}

export default Registration