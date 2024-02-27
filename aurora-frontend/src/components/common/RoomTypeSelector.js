import React, { useEffect, useState } from 'react'
import { getRoomTypes } from '../utils/ApiFunctions'

const RoomTypeSelector = (handleRoomInputChange, newRoom) => {
    const [roomTypes, setRoomTypes] = useState([])
    const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false)
    const [newRoomType, setNewRoomType] = useState("")

    useEffect(() => {
        getRoomTypes().then((data) => {
            setRoomTypes(data)
        })
    }, [])

    const handleNewRoomInputChange = (e) => {
        setNewRoomType(e.target.value);
    }

    const handleAddNewRoomType = () => {
        if (newRoomType !== "") {
            setRoomTypes([...roomTypes, newRoomType])
            setNewRoomType("")
            setShowNewRoomTypeInput(false)
        }
    }

    return (
        {
            roomTypes.length > 0 && (
                <div>
                    <select
                        id='roomType'
                        name='roomType'
                        value={newRoom.roomType}
                        onChange={(e) => {
                            if (e.target.value === "Add New") {
                                setShowNewRoomTypeInput(true)
                            } else {
                                handleRoomInputChange(e)
                            }

                        }}></select>
                </div>
            )
        }
        < div > RoomTypeSelector</div >
    )
}

export default RoomTypeSelector