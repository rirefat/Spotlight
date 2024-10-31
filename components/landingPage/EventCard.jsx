import Image from "next/image";
import ActionButtons from "../ActionButtons";
import Link from "next/link";

const EventCard = ({ event }) => {
    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <div className="h-60 relative">
                <Image
                    fill
                    src={event.imageUrl}
                    alt="Event 1"
                    className="w-full"
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className="p-3">
                <Link href={`/eventDetails/${event?.id}`} className="font-bold text-lg">{event.name}</Link>
                <p className="text-[#9C9C9C] text-sm mt-1">{event.location}</p>
                <div className="text-[#737373] text-sm mt-1">
                    <span>{event?.interested_ids?.length} Interested</span>
                    <span className='mx-2'>|</span>
                    <span>{event?.going_ids?.length} Going</span>
                </div>

                {/* Buttons  */}
                <ActionButtons eventId={event?.id} interestedUserIds={event?.interested_ids} />
            </div>
        </div>
    );
};

export default EventCard;