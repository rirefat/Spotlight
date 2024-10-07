import React from 'react';

const PaymentPage = () => {
    return (
        <div className="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
            <h2 className="font-bold text-xl mb-8">Payment Details</h2>

            <form>
                <div className="my-4 space-y-2">
                    <label for="name" className="block">Name</label>
                    <input type="text" id="name" className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
                </div>

                <div className="my-4 space-y-2">
                    <label for="email" className="block">Email</label>
                    <input type="email" id="email"
                        className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
                </div>

                <div className="my-4 space-y-2">
                    <label for="card" className="block">Card Number</label>
                    <input type="text" id="card" className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
                </div>

                <div className="my-4 space-y-2">
                    <label for="expiry" className="block">Expiry Date</label>
                    <input type="text" id="expiry"
                        className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
                </div>

                <div className="my-4 space-y-2">
                    <label for="cvv" className="block">CVV</label>
                    <input type="text" id="cvv" className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
                </div>

                <button type="submit" className="w-full my-8 bg-indigo-600 hover:bg-indigo-800 py-2 rounded-md">Pay Now</button>
            </form>
        </div>
    );
};

export default PaymentPage;