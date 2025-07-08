import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Contact from './contact'
import { Toaster } from "./components/ui/sonner";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './home'
import {ClerkProvider} from '@clerk/clerk-react'
import Profile from "./profile";
import AddListing from "./add-listing";
import SearchByCategory from "./search/[category]";
import SearchByOptions from "./search";
import ListingDetail from "./listing-details";
import About from "./Shared/About";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  ,
  {
    path: '/contact',
    element: <Contact/>,
  },
  {
    path: '/profile',
    element: <Profile/>,
  }
  ,
  {
    path: '/add-listing',
    element: <AddListing/>,
  }
  ,
  {
    path: '/search/:category',
    element: <SearchByCategory/>,
  }
  ,
  {
    path: '/search',
    element: <SearchByOptions/>,
  }
  ,
  {
    path: '/listing-details/:id',
    element: <ListingDetail/>,
  }

]);


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> 
    <RouterProvider router={router} />
    <Toaster />
    </ClerkProvider>
  </React.StrictMode>
);
