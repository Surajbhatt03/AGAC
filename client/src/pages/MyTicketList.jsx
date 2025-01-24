import React from "react";
import TicketList from "../component/TicketList";

const MyTicketList = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-teal-600 my-6">
        Support Ticket System
      </h1>

      <TicketList />
    </div>
  );
};

export default MyTicketList;
