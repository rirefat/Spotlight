import Image from "next/image";
import ActionButtons from "../ActionButtons";

const EventCard = () => {
    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <Image
                src="/events/google-io-2023-1.png"
                alt="Event 1"
                className="w-full"
                width={500}
                height={500}
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
                <ActionButtons />
            </div>
        </div>
    );
};

export default EventCard;