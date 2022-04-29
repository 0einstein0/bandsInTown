import React from "react";
import "../index.css";

const EventCard = (event) => {
  const str = event.starts_at;
  const datetime = new Date(str);
  const time = datetime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = datetime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div
      class="rounded-xl overflow-hidden  w-96 drop-shadow-2xl bg-opacity-75 bg-primary
     text-primary-content grid md:grid-cols-2 md:divide-x-2 md:divide-stone-900/20  gap-2 p-6"
    >
      <div class="">
        <div class="stat-title">Venue</div>
        <div class="">
          <h2 className="text-lg font-medium">{event.venue.name}</h2>
        </div>
        <div class="pt-3">
          <div class="stat-title">Location</div>
          <div className="rounded-lg bg-success w-fit mt-3 py-2 px-4 font-medium text-xs">
            {event.venue.city}, {event.venue.country}
          </div>
        </div>
      </div>

      <div class="md:px-8 sm:mt-3 ">
        <div class="stat-title">Date</div>
        <div class="">
          <h3 className="text-lg font-medium">{date}</h3>
        </div>
        <div class="stat-actions grid grid-flow-row gap-2 md:gap-4 auto-row-max">
          <div className="rounded-lg bg-neutral text-base text-slate-300 text-center py-2 ">
            {time}
          </div>
          <button class="btn btn-sm btn-info ">
            <a className="text-lg" href={event.url}>
              Get Ticket
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
