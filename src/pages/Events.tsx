import React from "react";
import { useGlobalContext } from "../context";
import EventsCard from "../components/EventsCard";
const Events = () => {
  const { allEventsData } = useGlobalContext();

  return (
    <div className="section-px section-py">
      <div className="grid grid-cols-2 md:grid-cols-12  gap-4 p-4">
        {allEventsData?.map((event, index) => (
          <EventsCard
            key={index} // ✅ Always add a unique key
            event={event}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
