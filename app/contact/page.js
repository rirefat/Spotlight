'use client'
import { useState } from 'react';
import { toast } from 'sonner';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
            setError('');
            setFormData({ name: '', email: '', message: '' });
            // toast.success("Thanks for contacting us, we'll reach you soon.");

        } catch (err) {
            setError('Failed to send your message. Please try again later.');
        }
    };

    return (
        <div className="bg-[#18191A] min-h-screen py-10 px-6 text-white">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-5xl font-bold text-center mb-6">Contact Us</h1>

                <p className="text-lg text-center mb-8">
                    We&apos;re here to help! If you have any questions or feedback, please reach out to us.
                </p>

                {isSubmitted && (
                    <div className="bg-green-500 text-white p-4 rounded-lg mb-6">
                        Thank you for your message! We’ll get back to you shortly.
                    </div>
                )}

                {error && (
                    <div className="bg-red-500 text-white p-4 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                {
                    !isSubmitted &&
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-lg mb-2" htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg mb-2" htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg mb-2" htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none"
                                rows="4"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                }
            </div>
        </div>
    );
};

export default ContactUs;
