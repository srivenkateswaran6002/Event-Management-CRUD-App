"use client"

import { useEffect, useState } from "react";
import { fetchAllEvents } from "./api/api";
import EventCard from "./components/EventCard"
import NewEvent from "./components/NewEvent"
import Loading from "./components/Loading";

export default  function Home() {
  
  const [events , setEvents] = useState([])
  const [loading , setLoading] = useState(false)
  let sortedEvents = [];

  useEffect(() => {
    const getEvents = async () => {
      try {
        setLoading(true)
        setEvents(await fetchAllEvents())      
      }
      catch(err) {
        console.error("Error fetching events:", err)
        setEvents([])
      }
      finally {
        setLoading(false)
      }
    }
    getEvents()
  } , [])

  // Sort the events only if list is not empty and by completed & upcoming order first
  if (events.length > 0) {
    sortedEvents = [...events].sort((a, b) => {
      const now = new Date()

      const dateA = new Date(a.date)
      const dateB = new Date(b.date)

      const isCompletedA = dateA < now
      const isCompletedB = dateB < now

      if (isCompletedA && !isCompletedB) return 1
      if (!isCompletedA && isCompletedB) return -1

      return dateA - dateB
    })
  }

  return (
    loading ? (<Loading />) : (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Events</h1>
      {
        (sortedEvents.length === 0) ? (
          <p>No events available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {sortedEvents.map((event) => <EventCard key={event.id} event={event} />)}
            <NewEvent />
          </div>
        )
      }
    </div>
  )
)
}