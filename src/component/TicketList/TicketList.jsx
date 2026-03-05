import { use } from "react";
import TicketCard from "../TicketCard/TicketCard";

const TicketList = ({ ticketsPromise, onCardClick, ticketStatuses }) => {
  const tickets = use(ticketsPromise);

  return (
    <div>
      <h2 className="text-base font-bold text-gray-900 mb-4">
        Customer Tickets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onCardClick={onCardClick}
            ticketStatuses={ticketStatuses}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketList;
