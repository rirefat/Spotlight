'use client'
import { addInterestedEvents } from "@/actions";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ActionButtons = ({ eventId, interestedUserIds, fromDetails }) => {
    const router = useRouter();
    const { auth } = useAuth();

    const isInterested = interestedUserIds?.find((id) => id === auth?._id);
    const [interested, setInterested] = useState(isInterested);
    const [isPending, startTransition] = useTransition();

    async function toggleInterest() {
        if (auth) {
            await addInterestedEvents(eventId, auth?._id);
            setInterested(!interested);
        } else {
            router.push('/login');
        }
    }

    function markAsGoing() {
        if (auth) {
            router.push(`/payment/${eventId}`)
        } else {
            router.push('/login');
        }
    }


    return (
        <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
            {/* bg-indigo-600 indicating Active  */}
            <button
                onClick={() =>
                    startTransition(() => {
                        toggleInterest();
                    })
                }
                className={`w-full ${isInterested && "bg-indigo-600 hover:bg-indigo-800"}`}
            >
                Interested
            </button>

            {/* bg-green-600 indicating Active  */}
            <button
                onClick={markAsGoing}
                className=" text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
            >
                Going
            </button>
        </div>
    );
};

export default ActionButtons;