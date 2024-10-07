import ActionButtons from '@/components/ActionButtons';
import DetailsHeroSection from '@/components/details/DetailsHeroSection';
import EventDetails from '@/components/details/EventDetails';
import EventVenue from '@/components/details/EventVenue';
import Image from 'next/image';

const DetailsPage = () => {
    return (
        <>
            <DetailsHeroSection />
            <section className="container">
                <div className="grid grid-cols-5 gap-12 my-12">
                    <EventDetails />
                    <EventVenue />
                </div>
            </section>
        </>
    );
};

export default DetailsPage;