import axios from "axios"

const BASE_URL = "http://localhost:8000/api"

export async function fetchAllEvents() {
    try {
        const res = await axios.get(`${BASE_URL}/events/`)
        return res.data
    } catch (err) {
        console.error(`Failed to fetch events from backend:`, err)
        throw err
    }
}

export async function fetchEventById(id) {
    try {
        const res = await axios.get(`${BASE_URL}/events/${id}/`)
        return res.data
    } catch (err) {
        console.error(`Failed to fetch event with id ${id} from backend:`, err)
        throw err
    }
}