
import React from "react";
import boardData from "./skateboard_chart.svg"

export default function Data() {
    return (
        <section>
            {/* ////i want a container that has the image in the center, then two cards with the foot placement and information under them? */}
            <div>
            <img
              src={boardData}
              alt="image of a skateboard with data on it"
              />
            </div>
        </section>
    )
}