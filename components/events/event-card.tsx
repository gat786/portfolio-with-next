import React from "react"
import { EventsFrontMatter } from "../../pages/events"
import Image from "next/image";
import config from "../../config";
import { format } from "date-fns";

export function EventCard(props: {eventFrontMatter: EventsFrontMatter}) {
    console.log(props.eventFrontMatter);
    
    return <div className="flex flex-col md:flex-row xl:w-1/2 bg-white shadow-md dark:bg-zinc-800 p-4 rounded-md m-8 hover:shadow-lg duration-200">
        <Image 
            height={250}
            width={250}
            objectFit="cover"
            // layout="fill"
            objectPosition="relative"
            src={`${config.ASSETS}${props?.eventFrontMatter?.coverImage}`} />
        
    
        <div className="pl-3">
            <h2 className="text-3xl capitalize pbs-2 pbe-2 font-semibold">
                {props.eventFrontMatter?.title}
            </h2>
            <p className="dark:text-slate-300 font-light plb-2">
                <span className="text-sm font-light pie-1">
                    On :-
                </span>
                {format(new Date(props.eventFrontMatter?.organisedOn as string), 'PPPP')}
                {}
            </p>
            <p className="dark:text-slate-300 font-medium">
                <span className="text-sm font-light">
                    Organisers :- <br/>
                </span>
                {props.eventFrontMatter?.organisers}
            </p>
            <p>
                {props.eventFrontMatter?.eventLocation}
            </p>
        </div>

    </div>
}