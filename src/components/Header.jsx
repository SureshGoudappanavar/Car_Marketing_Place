// import { UserButton, useUser, SignInButton } from '@clerk/clerk-react';
// import React, { useEffect } from 'react';
// import { Button } from './ui/button';
// import { Link } from 'react-router-dom';

// function Header() {
//     const { user, isSignedIn } = useUser();


    

//     return (
//         <div className='flex justify-between items-center shadow-sm p-5'>
//               <Link to="/">
//                  <img src="/logo.svg" width={150} height={100} alt="Logo" />
//               </Link>

        
//             <ul className='hidden md:flex gap-16'>
//                 <li className='font-medium hover:scale-105 translate-all hover:text-primary'>
//                     <Link to='/'>Home</Link>
//                 </li>
//                 <li className='font-medium hover:scale-105 translate-all hover:text-primary'>
//                     <Link to='/search'>Search</Link>
//                 </li>
//                 <li className='font-medium hover:scale-105 translate-all hover:text-primary'>
//                 <Link to='/about'>About</Link>
//             </li>
//             <li className='font-medium hover:scale-105 translate-all hover:text-primary'>
//                <Link to='/contact'>Contact Us</Link>
//             </li>
//             </ul>

//             {isSignedIn ? (
//                 <div className='flex items-center gap-5'>
//                     {/* UserButton component from Clerk */}
//                     <UserButton />
                    
//                     {/* Link to profile or listing */}
//                     <Link to='/profile'>
//                         <Button>Submit Listing</Button>
//                     </Link>
//                 </div>
//             ) : (
//                 <div className='flex items-center gap-5'>
//                     {/* Sign In Button */}
//                     <SignInButton mode="modal">
//                         <Button>Sign In</Button>
//                     </SignInButton>

//                     {/* Submit Listing redirects to profile even for non-signed-in users */}
//                     <Link to='/profile'>
//                         <Button>Submit Listing</Button>
//                     </Link>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Header;

import { UserButton, useUser, SignInButton } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger icons

function Header() {
    const { isSignedIn } = useUser();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='flex justify-between items-center shadow-sm p-5 relative'>
            {/* Logo */}
               {/* Mobile Hamburger */}
            <div className='md:hidden'>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className='text-2xl focus:outline-none'
                >
                    {mobileMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            <Link to="/">
                <img src="/logo.svg" width={150} height={100} alt="Logo" />
            </Link>

            {/* Desktop Links */}
            <ul className='hidden md:flex gap-16'>
                <li className='font-medium hover:scale-105 transition hover:text-primary'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='font-medium hover:scale-105 transition hover:text-primary'>
                    <Link to='/search'>Search</Link>
                </li>
                <li className='font-medium hover:scale-105 transition hover:text-primary'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='font-medium hover:scale-105 transition hover:text-primary'>
                    <Link to='/contact'>Contact Us</Link>
                </li>
            </ul>

            {/* Mobile Hamburger */}
            {/* <div className='md:hidden'>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className='text-2xl focus:outline-none'
                >
                    {mobileMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div> */}

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <ul className='absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-5 md:hidden z-50'>
                    <li className='font-medium hover:scale-105 transition hover:text-primary'>
                        <Link to='/' onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    </li>
                    <li className='font-medium hover:scale-105 transition hover:text-primary'>
                        <Link to='/search' onClick={() => setMobileMenuOpen(false)}>Search</Link>
                    </li>
                    <li className='font-medium hover:scale-105 transition hover:text-primary'>
                        <Link to='/about' onClick={() => setMobileMenuOpen(false)}>About</Link>
                    </li>
                    <li className='font-medium hover:scale-105 transition hover:text-primary'>
                        <Link to='/contact' onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                    </li>
                </ul>
            )}

            {/* User Actions */}
            <div className='flex items-center gap-5 ml-5'>
                {isSignedIn ? (
                    <>
                        <UserButton />
                        <Link to='/profile'>
                            <Button>Listing</Button>
                        </Link>
                    </>
                ) : (
                    <>
                        <SignInButton mode="modal">
                            <Button>Sign In</Button>
                        </SignInButton>
                        <Link to='/profile'>
                            <Button>Listing</Button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;




