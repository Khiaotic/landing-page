
import React from "react";
import boardData from "./skateboard_chart.svg"
import boardData2 from "./skateboard_chart-01.svg"

export default function Data() {
    return (
        <section>
            {/* ////i want a container that has the image in the center, then two cards with the foot placement and information under them? */}
                <h1 className="text-purple text-2xl font-FACT">
                    DATA ANALYSIS
                </h1>
           <div className="flex flex-row items-center">
            <div  className=" ">
            <img
              src={boardData2}
              alt="image of a skateboard with data on it"
              height={3840}
              width={2160}
              shape-rendering= "crispEdges"
              />
            </div>
            </div>
        </section>
    )
}