import DetailsHeroSection from '@/components/details/DetailsHeroSection';
import EventDetails from '@/components/details/EventDetails';
import EventVenue from '@/components/details/EventVenue';
import { getEventById } from '@/database/queries';

const DetailsPage =async ({ params: { id } }) => {
    const event = await getEventById(id);
    return (
        <>
            <DetailsHeroSection event={event}/>
            <section className="container">
                <div className="grid grid-cols-5 gap-12 my-12">
                    <EventDetails details={event?.details}/>
                    <EventVenue />
                </div>
            </section>
        </>
    );
};

export default DetailsPage;