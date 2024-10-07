import Image from "next/image";

const EventCard = () => {
    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <Image
                src="/events/google-io-2023-1.png"
                alt="Event 1"
                className="w-full"
                width={375}
                height={375}
            />

            <div className="p-3">
                <a href="./details.html" className="font-bold text-lg">Google I/O Extended</a>
                <p className="text-[#9C9C9C] text-sm mt-1">Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh</p>
                <div className="text-[#737373] text-sm mt-1">
                    <span>1k Interested</span>
                    <span>|</span>
                    <span>40K Going</span>
                </div>

                {/* Buttons  */}
                <div className="w-full flex gap-4 mt-4">
                    {/* bg-indigo-600 indicating Active  */}
                    <button className="w-full bg-indigo-600 hover:bg-indigo-800">Interested</button>

                    {/* bg-green-600 indicating Active  */}
                    <button className="w-full">Going</button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;