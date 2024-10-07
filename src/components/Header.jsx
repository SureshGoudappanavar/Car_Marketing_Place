import { UserButton, useUser, SignInButton } from '@clerk/clerk-react';
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {
    const { user, isSignedIn } = useUser();

    return (
        <div className='flex justify-between items-center shadow-sm p-5'>
            <img src='./logo.svg' width={150} height={100} alt="Logo"/>
        
            <ul className='hidden md:flex gap-16'>
                <li className='font-medium hover:scale-105 translate-all hover:text-primary'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='font-medium hover:scale-105 translate-all hover:text-primary'>
                    <Link to='/search'>Search</Link>
                </li>
                <li className='font-medium hover:scale-105 translate-all hover:text-primary'>
                    <Link to='/new'>New</Link>
                </li>
                <li className='font-medium hover:scale-105 translate-all hover:text-primary'>
                    <Link to='/preowned'>Preowned</Link>
                </li>
            </ul>

            {isSignedIn ? (
                <div className='flex items-center gap-5'>
                    {/* UserButton component from Clerk */}
                    <UserButton />
                    
                    {/* Link to profile or listing */}
                    <Link to='/profile'>
                        <Button>Submit Listing</Button>
                    </Link>
                </div>
            ) : (
                <div className='flex items-center gap-5'>
                    {/* Sign In Button */}
                    <SignInButton mode="modal">
                        <Button>Sign In</Button>
                    </SignInButton>

                    {/* Submit Listing redirects to profile even for non-signed-in users */}
                    <Link to='/profile'>
                        <Button>Submit Listing</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;


