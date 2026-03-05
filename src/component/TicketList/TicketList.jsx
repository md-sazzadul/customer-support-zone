import { use } from "react";
import TicketCard from "../TicketCard/TicketCard";

const TicketList = ({ ticketsPromise }) => {
  const tickets = use(ticketsPromise);

  return (
    <div>
      <h2 className="font-semibold mb-4">Customer Tickets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketList;
