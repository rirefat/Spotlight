import DetailsHeroSection from '@/components/details/DetailsHeroSection';
import EventDetails from '@/components/details/EventDetails';
import EventVenue from '@/components/details/EventVenue';
import { getEventById } from '@/database/queries';

export async function generateMetadata({ params: { id } }) {
    const eventInfo = await getEventById(id);

    return {
        title: `Spotlight - ${eventInfo?.name}`,
        description: eventInfo?.details,
        openGraph: {
            images: [eventInfo?.imageUrl]
        }
    }
}

const DetailsPage = async ({ params: { id } }) => {
    const event = await getEventById(id);
    return (
        <>
            <DetailsHeroSection event={event} />
            <section className="container">
                <div className="grid grid-cols-5 gap-12 my-12">
                    <EventDetails details={event?.details} />
                    <EventVenue location={event?.location} />
                </div>
            </section>
        </>
    );
};

export default DetailsPage;