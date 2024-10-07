import EventList from "@/components/landingPage/EventList";
import Header from "@/components/landingPage/Header";

const Home = () => {
  return (
    <section className="container">
      <Header />
      <EventList/>
    </section>
  );
};

export default Home;