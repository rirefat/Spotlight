'use client'
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const UserAccess = () => {
    const router = useRouter();
    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
        setAuth(null);
        router.push('/login')
    }

    return (
        <div>
            {
                auth ? (
                    <>
                        <span>Hello, {auth.name}</span>
                        <span className='px-2'>|</span>
                        <span className='hover:text-slate-200 cursor-pointer' onClick={handleLogout}>Logout</span>

                    </>
                ) :
                    <Link className='hover:text-slate-200' href="/login">Login</Link>
            }
        </div>
    );
};

export default UserAccess;