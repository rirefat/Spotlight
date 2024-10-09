import { getAllEvents } from "@/database/queries";
import EventCard from "./EventCard";

const EventList = async () => {
    const allEvents = await getAllEvents();
    console.log(allEvents);

    return (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {
                allEvents.map((event) => (
                    <EventCard key={event._id} event={event} />
                ))
            }
        </div>
    );
};

export default EventList;