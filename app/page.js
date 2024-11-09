import EventList from "@/components/landingPage/EventList";
import Header from "@/components/landingPage/Header";
import { Suspense } from "react";

const Home = ({ searchParams: { query } }) => {
  return (
    <section className="container">
      <Header />
      <Suspense key={query} fallback={<p>Loading event data...</p>}>
        <EventList query={query} />
      </Suspense>
    </section>
  );
};

export default Home;