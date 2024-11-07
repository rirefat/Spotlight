import EventList from "@/components/landingPage/EventList";
import Header from "@/components/landingPage/Header";

const Home = ({ searchParams: { query } }) => {
  return (
    <section className="container">
      <Header />
      <EventList query={query} />
    </section>
  );
};

export default Home;