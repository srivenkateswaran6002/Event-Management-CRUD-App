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