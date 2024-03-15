import React, { useState } from 'react'

const RoomFilter = ({ data, setFilteredData }) => {
    const [filter, setFilter] = useState("")

    const handleSelectChange = (e) => {
        const selectedRoomType = e.target.value
        setFilter(selectedRoomType)
        const filteredRooms = data.filter((room) =>
            room.roomType.toLowerCase()
                .includes(selectedRoomType.toLowerCase()))
        setFilteredData(filteredRooms)
    }
    const clearFilter = () => {
        setFilter("")
        setFilteredData(data)
    }

    const roomTypes = ["", ...new set(data.map((room) => room.roomType))]


    return (
        <div>RoomFilter</div>
    )
}

export default RoomFilter