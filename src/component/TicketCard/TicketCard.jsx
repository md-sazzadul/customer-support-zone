const TicketCard = ({ ticket }) => {
  const statusColor =
    ticket.status === "Open" ? "badge-success" : "badge-warning";

  const priorityColor =
    ticket.priority === "high"
      ? "text-red-500"
      : ticket.priority === "medium"
        ? "text-yellow-500"
        : "text-green-500";

  return (
    <div className="card bg-base-100 shadow-sm border border-gray-200">
      <div className="card-body p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-sm">{ticket.title}</h3>

          <div className={`badge ${statusColor}`}>{ticket.status}</div>
        </div>

        <p className="text-sm text-gray-500">{ticket.description}</p>

        <div className="flex justify-between items-center mt-3 text-xs">
          <div className="flex gap-3 items-center">
            <span className="text-gray-400">#{ticket.id}</span>

            <span className={`font-semibold uppercase ${priorityColor}`}>
              {ticket.priority} priority
            </span>
          </div>

          <div className="flex gap-3 text-gray-400">
            <span>{ticket.customer}</span>

            <span>{ticket.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
