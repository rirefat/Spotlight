import Image from "next/image";
import Link from "next/link";
import UserAccess from "./UserAccess";

const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between items-center py-4">
                <div className="nav-brand">
                    <Link href="/">
                        <Image
                            src="/spotlight-logo.png"
                            alt="Logo of Spotlight"
                            className="h-[45px]"
                            width={135}
                            height={135}
                        />
                    </Link>
                </div>

                <ul className="flex gap-4 text-[#9C9C9C] ">
                    <li><Link className='hover:text-slate-200' href="/">Home</Link></li>
                    <li><Link className='hover:text-slate-200' href="/about">About</Link></li>
                    <li><Link className='hover:text-slate-200' href="/contact">Contact</Link></li>
                    <li><UserAccess /></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;