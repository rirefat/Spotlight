import React from 'react';

const About = () => {
  return (
    <div className="bg-[#18191A] min-h-screen py-10 px-6 text-white">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold text-center mb-10">Spotlight: Your Gateway to World-Class Events</h1>
        
        <div className="text-lg leading-relaxed mb-8">
          <p className="mb-4">
            <strong>Spotlight</strong> is your ultimate destination for discovering world-class events across various industries. From technology and innovation to business and culture, our platform curates the most exciting and influential events happening around the globe. Whether you’re looking to attend the Web Summit, Google Innovation Summit, or niche conferences in your field, Spotlight brings them all together in one place.
          </p>
          <p className="mb-4">
            Our goal is to connect people with events that inspire, educate, and foster networking opportunities. By highlighting top-tier gatherings, we ensure that you never miss out on the most important happenings in your industry.
          </p>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          The mission of <strong>Spotlight</strong> is to simplify the way people find and attend events. We aim to become the go-to platform for anyone looking to expand their knowledge, build connections, and stay ahead of industry trends by offering easy access to a curated list of impactful events.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Why Choose Spotlight?</h2>
        <div className="mb-8">
          <p className="text-lg mb-4">
            Here’s what makes <strong>Spotlight</strong> stand out as your event discovery platform:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Curated Events:</strong> We carefully select events that offer high value in terms of content, networking, and innovation, ensuring you only get the best.</li>
            <li><strong>Global Reach:</strong> From local meetups to global conferences, Spotlight connects you to events no matter where they are held.</li>
            <li><strong>Tailored to Your Interests:</strong> Receive personalized recommendations based on your industry, preferences, and past attendance.</li>
            <li><strong>Seamless Registration:</strong> With easy-to-use tools for event registration, attending your favorite events is just a few clicks away.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Discover Events</h3>
            <p>Find industry-leading events and conferences, from global tech summits to specialized workshops in your field.</p>
          </div>
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
            <p>Get event suggestions tailored to your preferences, based on the topics and industries that matter most to you.</p>
          </div>
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Streamlined Registration</h3>
            <p>Register for events quickly and easily through our platform, with secure payment and ticketing options.</p>
          </div>
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Networking Opportunities</h3>
            <p>Connect with fellow attendees, speakers, and thought leaders to expand your professional network.</p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Join the Spotlight Community</h2>
        <p className="text-lg mb-6">
          Whether you&apos;re an attendee seeking inspiration or an event organizer looking to promote your conference, <strong>Spotlight</strong> is here to help. Join our community today and never miss out on the events that matter. 
        </p>
        <p className="text-lg">
          Have any questions or want to get involved? Feel free to <a href="/contact" className="text-blue-400 hover:underline">reach out to us</a>. We’d love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default About;
