import EventList from "@/components/landingPage/EventList";
import Header from "@/components/landingPage/Header";
import Loading from "@/components/Loading";
import { Suspense } from "react";

const Home = ({ searchParams: { query } }) => {
  return (
    <section className="container">
      <Header />
      <Suspense key={query} fallback={<Loading />}>
        <EventList query={query} />
      </Suspense>
    </section>
  );
};

export default Home;