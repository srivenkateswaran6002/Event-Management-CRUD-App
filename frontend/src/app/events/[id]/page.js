export default async function EventPage({ params }) {
  const { id } = await params;
  return <p>Event Details Page! Your ID is {id}</p>;
}