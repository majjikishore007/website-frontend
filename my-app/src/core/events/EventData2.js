import React, { useState, useEffect } from "react";
import EventSilder from "../EventSilder";
const EventData2 = (props) => {
  console.log("event 2", props);
  const { description, organizers, images, children } = props;
  return (
    <section class='bgeevent1'>
      <div class='container-y'>
        <div class='split-y'>
          <div>
            <EventSilder images={images}></EventSilder>
          </div>
          <div className='card_content'>
            {children}
            <p>
              {description}
              <p>
                <b class='organizers'>Organizers</b>
                <br></br>
                {organizers.map((o, i) => (
                  <span key={i}>{o} ,</span>
                ))}
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventData2;
