import React from "react"
import { EventsFrontMatter } from "../../pages/events"
import Image from "next/image";
import config from "../../config";

export function EventCard(props: {eventFrontMatter: EventsFrontMatter}) {
    console.log(props.eventFrontMatter);
    
    return <div className="flex">
        <Image 
            height={250}
            width={250}
            objectFit="cover"
            // layout="fill"
            objectPosition="relative"
            src={`${config.ASSETS}${props?.eventFrontMatter?.coverImage}`} />
        
        <div>
            <h2>
                {props.eventFrontMatter?.title}
            </h2>
            <p>
                {props.eventFrontMatter?.organisedOn}
            </p>
            <p>
                {props.eventFrontMatter?.organisers}
            </p>
            <p>
                {props.eventFrontMatter?.eventLocation}
            </p>
        </div>

    </div>
}