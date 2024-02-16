import axios from axios;

export const api = axios.create({
    baseURL: "http://localhost:8080"
})

export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/room/add/newroom", formData)
    if (response.status === 201) {
        return true
    } else {
        return false
    }
}