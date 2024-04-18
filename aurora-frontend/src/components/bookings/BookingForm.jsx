import React, { useEffect } from "react"
import moment from "moment"
import { useState } from "react"
import { Form, FormControl, Button } from "react-bootstrap"
import BookingSummary from "./BookingSummary"
import { bookRoom, getRoomById } from "../utils/ApiFunctions"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../auth/AuthProvider"

const BookingForm = () => {
    const [validated, setValidated] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [roomPrice, setRoomPrice] = useState(0)

    const currentUser = localStorage.getItem("userId")

    const [booking, setBooking] = useState({
        guestFullName: "",
        guestEmail: currentUser,
        checkInDate: "",
        checkOutDate: "",
        numOfAdults: "",
        numOfChildren: ""
    })

    const { roomId } = useParams()
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setBooking({ ...booking, [name]: value })
        setErrorMessage("")
    }


    const getRoomPriceById = async (roomId) => {
        try {
            const response = await getRoomById(roomId)
            setRoomPrice(response.roomPrice)
        } catch (error) {
            throw new Error(error)
        }
    }

    useEffect(() => {
        getRoomPriceById(roomId)
    }, [roomId])

    const calculatePayment = () => {
        const checkInDate = moment(booking.checkInDate)
        const checkOutDate = moment(booking.checkOutDate)
        const diffInDays = checkOutDate.diff(checkInDate, "days")
        const paymentPerDay = roomPrice ? roomPrice : 0
        return diffInDays * paymentPerDay
    }

    const isGuestCountValid = () => {
        const adultCount = parseInt(booking.numOfAdults)
        const childrenCount = parseInt(booking.numOfChildren)
        const totalCount = adultCount + childrenCount
        return totalCount >= 1 && adultCount >= 1
    }

    const isCheckOutDateValid = () => {
        if (!moment(booking.checkOutDate).isSameOrAfter(moment(booking.checkInDate))) {
            setErrorMessage("Check-out date must be after check-in date")
            return false
        } else {
            setErrorMessage("")
            return true
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        if (form.checkValidity() === false || !isGuestCountValid() || !isCheckOutDateValid()) {
            e.stopPropagation()
        } else {
            setIsSubmitted(true)
        }
        setValidated(true)
    }

    const handleFormSubmit = async () => {
        try {
            const confirmationCode = await bookRoom(roomId, booking)
            setIsSubmitted(true)
            navigate("/booking-success", { state: { message: confirmationCode } })
        } catch (error) {
            const errorMessage = error.message
            console.log(errorMessage)
            navigate("/booking-success", { state: { error: errorMessage } })
        }
    }

    return (
        <div></div>

    )
}
export default BookingForm