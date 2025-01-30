import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import landingGreen from "./landing-logo-green3.svg"
import landingGreen2 from "./landing-logo-green2.svg"
import React from "react";
import Nav from "./navigation"
import About from "./about"
// import {Navbar, MobileNav, Typography, Button, IconButton} from "@material-tailwind/react"



export function Welcome() {


  return (
    <body className="bg-primary">

    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <Nav />
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={landingGreen2}
              alt="React Router"
              className="block w-full dark:hidden"
              />
            <img
              src={landingGreen2}
              alt="React Router"
              className="hidden w-full dark:block"
              />
          </div>
        </header>
        <About />
        <div className="max-w-[300px] w-full space-y-6 px-4">
        </div>
      </div>
    </main>
  </body>
  );
}


