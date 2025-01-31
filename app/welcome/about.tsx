import React from "react";
import selfie from './selfie-01.svg'
import maybe from "./skateboard_maybe.svg"

export default function About() {
    return (
        <section className="m-5">
            <div className="flex flex-row items-center border-s-green md:border-dotted">
                <div className=" flex flex-col w-1/2 p-4 items-center">
                <h2 className=" font-bold font-FACT text-2xl">
                    About The Project
                </h2>
                <p className="font-bold">
                    Welcome to The Landing Page! This is apart of an on going series I'm directing on YouTube
                    called "Prompt.folio". For this prompt--"Data Analysis & Abstract Shapes---I decided to track my progress 
                    on moving ollies! I've been cruising for about seven years, but really trying to skate for the past six months.
                    To document my progress, I've been tracking my ollies on a spreadsheet and filming my sessions. One of the key things
                    I've been analyzing is foot position, testing two methods: Tyshawn Method and Regular Tail Method
                </p>
                <p className="font-bold mt-5">
                    1.Tyshawn Method: A more exaggerated pop and flick, inspired by the Tyshawn Jones' powerful ollie technique
                </p>
                <p className="font-bold mt-5">
                    2.Regular Method: A more subtle pop and flick, inspired by the classic ollie technique. A standard tail pop!
                </p>
                <p className="font-bold mt-5">
                    This page is here to help others understand the importance of ollies in the early stages of skating and maybe even provide
                    some helpful tips for those who are just starting out. I've also included a link to my to my series on YouTube and my Behance.
                </p>
                <img
                className="mt-10"
              src={maybe}
              alt="React Router"
              />
                </div>
                <div className="w-1/2 p-4">
                <img
                // height={700}
                // width={700}
              src={selfie}
              alt="React Router"
            //   className="hidden w-full dark:block"
              />
                </div>

            </div>
        </section>
    )
}