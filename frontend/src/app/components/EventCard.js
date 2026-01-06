import Link from "next/link"

export default function EventCard({ event }) {
    const current_date = new Date()
    const event_date = new Date(event.date)
    let status = "Upcoming"

    if (event_date < current_date) {
        status = " Completed"
    } else if (event_date.toDateString() === current_date.toDateString()) {
        status = " Today"
    } else {
        status = " Upcoming in " + Math.ceil((event_date - current_date) / (1000 * 60 * 60 * 24)) + " day(s)"
    }

    const checkCompleted = status.includes("Completed")


  return (
    <Link href={`/events/${event.id}`}>

    <div className="min-h-[230px] bg-zinc-700 p-4 rounded shadow hover:shadow-lg hover:bg-zinc-800 hover:scale-105 duration-200">
      <h2 className="text-xl font-semibold text-white">{event.title}</h2>
      <p className="text-zinc-400 mt-2">{event.description}</p>
      <p className="mt-2">
        <strong>Venue:</strong> {event.venue}
      </p>
      <p>
        <strong>Date:</strong> {event.date}
        <br />
        <strong>Time:</strong> {event.time}
        <br />
        <strong >Status : </strong><strong className={checkCompleted ? "text-green-500" : "text-yellow-500"}>{status}</strong>
      </p>
    </div>
    
    </Link>
  );
}
