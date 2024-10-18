import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-center'>
            <h2>Not Found</h2>
            <p className='my-6 text-2xl'>Could not find requested page.</p>
            <Link
                href="/"
                className=" text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors"
            >
                Return Home
            </Link>
        </div>
    )
}