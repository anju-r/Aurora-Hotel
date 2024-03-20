import React from 'react'

const EditRoom = () => {
    const [room, setRoom] = useState({
        photo: null,
        roomType: "",
        roomPrice: ""
    })

    const [imagePreview, setImagePreview] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0]
        setRoom({ ...room, photo: selectedImage })
        setImagePreview(URL.createObjectURL(selectedImage))

    }

    const handleInpuChange = (event) => {
        const { name, value } = event.target
        setRoom({ ...room, [name]: value })
    }


    return (
        <div>
            <h2>Edit Room</h2>
        </div>
    )
}

export default EditRoom